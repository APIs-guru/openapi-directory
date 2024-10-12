# SparkRBatch

A configuration for running an Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) batch workload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_uris** | **List[str]** | Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. | [optional] 
**args** | **List[str]** | Optional. The arguments to pass to the Spark driver. Do not include arguments that can be set as batch properties, such as --conf, since a collision can occur that causes an incorrect batch submission. | [optional] 
**file_uris** | **List[str]** | Optional. HCFS URIs of files to be placed in the working directory of each executor. | [optional] 
**main_r_file_uri** | **str** | Required. The HCFS URI of the main R file to use as the driver. Must be a .R or .r file. | [optional] 

## Example

```python
from openapi_client.models.spark_r_batch import SparkRBatch

# TODO update the JSON string below
json = "{}"
# create an instance of SparkRBatch from a JSON string
spark_r_batch_instance = SparkRBatch.from_json(json)
# print the JSON string representation of the object
print(SparkRBatch.to_json())

# convert the object into a dict
spark_r_batch_dict = spark_r_batch_instance.to_dict()
# create an instance of SparkRBatch from a dict
spark_r_batch_from_dict = SparkRBatch.from_dict(spark_r_batch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


