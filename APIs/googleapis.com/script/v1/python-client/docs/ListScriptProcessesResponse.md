# ListScriptProcessesResponse

Response with the list of Process resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token for the next page of results. If empty, there are no more pages remaining. | [optional] 
**processes** | [**List[GoogleAppsScriptTypeProcess]**](GoogleAppsScriptTypeProcess.md) | List of processes matching request parameters. | [optional] 

## Example

```python
from openapi_client.models.list_script_processes_response import ListScriptProcessesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListScriptProcessesResponse from a JSON string
list_script_processes_response_instance = ListScriptProcessesResponse.from_json(json)
# print the JSON string representation of the object
print(ListScriptProcessesResponse.to_json())

# convert the object into a dict
list_script_processes_response_dict = list_script_processes_response_instance.to_dict()
# create an instance of ListScriptProcessesResponse from a dict
list_script_processes_response_from_dict = ListScriptProcessesResponse.from_dict(list_script_processes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


