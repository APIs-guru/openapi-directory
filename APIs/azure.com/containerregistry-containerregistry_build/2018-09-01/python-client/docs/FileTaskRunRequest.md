# FileTaskRunRequest

The request parameters for a scheduling run against a task file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_configuration** | [**AgentProperties**](AgentProperties.md) |  | [optional] 
**credentials** | [**Credentials**](Credentials.md) |  | [optional] 
**platform** | [**PlatformProperties**](PlatformProperties.md) |  | 
**source_location** | **str** | The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.  If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API. | [optional] 
**task_file_path** | **str** | The template/definition file path relative to the source. | 
**timeout** | **int** | Run timeout in seconds. | [optional] [default to 3600]
**values** | [**List[SetValue]**](SetValue.md) | The collection of overridable values that can be passed when running a task. | [optional] 
**values_file_path** | **str** | The values/parameters file path relative to the source. | [optional] 

## Example

```python
from openapi_client.models.file_task_run_request import FileTaskRunRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FileTaskRunRequest from a JSON string
file_task_run_request_instance = FileTaskRunRequest.from_json(json)
# print the JSON string representation of the object
print(FileTaskRunRequest.to_json())

# convert the object into a dict
file_task_run_request_dict = file_task_run_request_instance.to_dict()
# create an instance of FileTaskRunRequest from a dict
file_task_run_request_from_dict = FileTaskRunRequest.from_dict(file_task_run_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


