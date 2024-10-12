# SparkJob

A Dataproc job for running Apache Spark (https://spark.apache.org/) applications on YARN.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_uris** | **List[str]** | Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. | [optional] 
**args** | **List[str]** | Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission. | [optional] 
**file_uris** | **List[str]** | Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. | [optional] 
**jar_file_uris** | **List[str]** | Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks. | [optional] 
**logging_config** | [**LoggingConfig**](LoggingConfig.md) |  | [optional] 
**main_class** | **str** | The name of the driver&#39;s main class. The jar file that contains the class must be in the default CLASSPATH or specified in SparkJob.jar_file_uris. | [optional] 
**main_jar_file_uri** | **str** | The HCFS URI of the jar file that contains the main class. | [optional] 
**properties** | **Dict[str, str]** | Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. | [optional] 

## Example

```python
from openapi_client.models.spark_job import SparkJob

# TODO update the JSON string below
json = "{}"
# create an instance of SparkJob from a JSON string
spark_job_instance = SparkJob.from_json(json)
# print the JSON string representation of the object
print(SparkJob.to_json())

# convert the object into a dict
spark_job_dict = spark_job_instance.to_dict()
# create an instance of SparkJob from a dict
spark_job_from_dict = SparkJob.from_dict(spark_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


