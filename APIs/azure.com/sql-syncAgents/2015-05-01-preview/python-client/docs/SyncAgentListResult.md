# SyncAgentListResult

A list of sync agents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[SyncAgent]**](SyncAgent.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_agent_list_result import SyncAgentListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SyncAgentListResult from a JSON string
sync_agent_list_result_instance = SyncAgentListResult.from_json(json)
# print the JSON string representation of the object
print(SyncAgentListResult.to_json())

# convert the object into a dict
sync_agent_list_result_dict = sync_agent_list_result_instance.to_dict()
# create an instance of SyncAgentListResult from a dict
sync_agent_list_result_from_dict = SyncAgentListResult.from_dict(sync_agent_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


