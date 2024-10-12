# SyncAgentLinkedDatabase

An Azure SQL Database sync agent linked database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SyncAgentLinkedDatabaseProperties**](SyncAgentLinkedDatabaseProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_agent_linked_database import SyncAgentLinkedDatabase

# TODO update the JSON string below
json = "{}"
# create an instance of SyncAgentLinkedDatabase from a JSON string
sync_agent_linked_database_instance = SyncAgentLinkedDatabase.from_json(json)
# print the JSON string representation of the object
print(SyncAgentLinkedDatabase.to_json())

# convert the object into a dict
sync_agent_linked_database_dict = sync_agent_linked_database_instance.to_dict()
# create an instance of SyncAgentLinkedDatabase from a dict
sync_agent_linked_database_from_dict = SyncAgentLinkedDatabase.from_dict(sync_agent_linked_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


