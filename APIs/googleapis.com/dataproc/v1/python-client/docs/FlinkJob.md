# FlinkJob

A Dataproc job for running Apache Flink applications on YARN.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **List[str]** | Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision might occur that causes an incorrect job submission. | [optional] 
**jar_file_uris** | **List[str]** | Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Flink driver and tasks. | [optional] 
**logging_config** | [**LoggingConfig**](LoggingConfig.md) |  | [optional] 
**main_class** | **str** | The name of the driver&#39;s main class. The jar file that contains the class must be in the default CLASSPATH or specified in jarFileUris. | [optional] 
**main_jar_file_uri** | **str** | The HCFS URI of the jar file that contains the main class. | [optional] 
**properties** | **Dict[str, str]** | Optional. A mapping of property names to values, used to configure Flink. Properties that conflict with values set by the Dataproc API might beoverwritten. Can include properties set in/etc/flink/conf/flink-defaults.conf and classes in user code. | [optional] 
**savepoint_uri** | **str** | Optional. HCFS URI of the savepoint, which contains the last saved progress for starting the current job. | [optional] 

## Example

```python
from openapi_client.models.flink_job import FlinkJob

# TODO update the JSON string below
json = "{}"
# create an instance of FlinkJob from a JSON string
flink_job_instance = FlinkJob.from_json(json)
# print the JSON string representation of the object
print(FlinkJob.to_json())

# convert the object into a dict
flink_job_dict = flink_job_instance.to_dict()
# create an instance of FlinkJob from a dict
flink_job_from_dict = FlinkJob.from_dict(flink_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


