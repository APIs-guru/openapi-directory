# EncodedTaskRunRequest

The parameters for a quick task run request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_configuration** | [**AgentProperties**](AgentProperties.md) |  | [optional] 
**credentials** | [**Credentials**](Credentials.md) |  | [optional] 
**encoded_task_content** | **str** | Base64 encoded value of the template/definition file content. | 
**encoded_values_content** | **str** | Base64 encoded value of the parameters/values file content. | [optional] 
**platform** | [**PlatformProperties**](PlatformProperties.md) |  | 
**source_location** | **str** | The URL(absolute or relative) of the source context. It can be an URL to a tar or git repository.  If it is relative URL, the relative path should be obtained from calling listBuildSourceUploadUrl API. | [optional] 
**timeout** | **int** | Run timeout in seconds. | [optional] [default to 3600]
**values** | [**List[SetValue]**](SetValue.md) | The collection of overridable values that can be passed when running a task. | [optional] 

## Example

```python
from openapi_client.models.encoded_task_run_request import EncodedTaskRunRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EncodedTaskRunRequest from a JSON string
encoded_task_run_request_instance = EncodedTaskRunRequest.from_json(json)
# print the JSON string representation of the object
print(EncodedTaskRunRequest.to_json())

# convert the object into a dict
encoded_task_run_request_dict = encoded_task_run_request_instance.to_dict()
# create an instance of EncodedTaskRunRequest from a dict
encoded_task_run_request_from_dict = EncodedTaskRunRequest.from_dict(encoded_task_run_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


