# SparkBatch

A configuration for running an Apache Spark (https://spark.apache.org/) batch workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_uris** | **List[str]** | Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. | [optional] 
**args** | **List[str]** | Optional. The arguments to pass to the driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission. | [optional] 
**file_uris** | **List[str]** | Optional. HCFS URIs of files to be placed in the working directory of each executor. | [optional] 
**jar_file_uris** | **List[str]** | Optional. HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. | [optional] 
**main_class** | **str** | Optional. The name of the driver main class. The jar file that contains the class must be in the classpath or specified in jar_file_uris. | [optional] 
**main_jar_file_uri** | **str** | Optional. The HCFS URI of the jar file that contains the main class. | [optional] 

## Example

```python
from openapi_client.models.spark_batch import SparkBatch

# TODO update the JSON string below
json = "{}"
# create an instance of SparkBatch from a JSON string
spark_batch_instance = SparkBatch.from_json(json)
# print the JSON string representation of the object
print(SparkBatch.to_json())

# convert the object into a dict
spark_batch_dict = spark_batch_instance.to_dict()
# create an instance of SparkBatch from a dict
spark_batch_from_dict = SparkBatch.from_dict(spark_batch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


