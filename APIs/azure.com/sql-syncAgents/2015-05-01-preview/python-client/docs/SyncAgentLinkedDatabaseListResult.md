# SyncAgentLinkedDatabaseListResult

A list of sync agent linked databases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[SyncAgentLinkedDatabase]**](SyncAgentLinkedDatabase.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_agent_linked_database_list_result import SyncAgentLinkedDatabaseListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SyncAgentLinkedDatabaseListResult from a JSON string
sync_agent_linked_database_list_result_instance = SyncAgentLinkedDatabaseListResult.from_json(json)
# print the JSON string representation of the object
print(SyncAgentLinkedDatabaseListResult.to_json())

# convert the object into a dict
sync_agent_linked_database_list_result_dict = sync_agent_linked_database_list_result_instance.to_dict()
# create an instance of SyncAgentLinkedDatabaseListResult from a dict
sync_agent_linked_database_list_result_from_dict = SyncAgentLinkedDatabaseListResult.from_dict(sync_agent_linked_database_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


