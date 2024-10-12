# SparkRJob

A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_uris** | **List[str]** | Optional. HCFS URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip. | [optional] 
**args** | **List[str]** | Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur that causes an incorrect job submission. | [optional] 
**file_uris** | **List[str]** | Optional. HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. | [optional] 
**logging_config** | [**LoggingConfig**](LoggingConfig.md) |  | [optional] 
**main_r_file_uri** | **str** | Required. The HCFS URI of the main R file to use as the driver. Must be a .R file. | [optional] 
**properties** | **Dict[str, str]** | Optional. A mapping of property names to values, used to configure SparkR. Properties that conflict with values set by the Dataproc API might be overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code. | [optional] 

## Example

```python
from openapi_client.models.spark_r_job import SparkRJob

# TODO update the JSON string below
json = "{}"
# create an instance of SparkRJob from a JSON string
spark_r_job_instance = SparkRJob.from_json(json)
# print the JSON string representation of the object
print(SparkRJob.to_json())

# convert the object into a dict
spark_r_job_dict = spark_r_job_instance.to_dict()
# create an instance of SparkRJob from a dict
spark_r_job_from_dict = SparkRJob.from_dict(spark_r_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


