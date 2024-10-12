# SyncAgentLinkedDatabaseProperties

Properties of an Azure SQL Database sync agent linked database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_id** | **str** | Id of the sync agent linked database. | [optional] [readonly] 
**database_name** | **str** | Database name of the sync agent linked database. | [optional] [readonly] 
**database_type** | **str** | Type of the sync agent linked database. | [optional] [readonly] 
**description** | **str** | Description of the sync agent linked database. | [optional] [readonly] 
**server_name** | **str** | Server name of the sync agent linked database. | [optional] [readonly] 
**user_name** | **str** | User name of the sync agent linked database. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_agent_linked_database_properties import SyncAgentLinkedDatabaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SyncAgentLinkedDatabaseProperties from a JSON string
sync_agent_linked_database_properties_instance = SyncAgentLinkedDatabaseProperties.from_json(json)
# print the JSON string representation of the object
print(SyncAgentLinkedDatabaseProperties.to_json())

# convert the object into a dict
sync_agent_linked_database_properties_dict = sync_agent_linked_database_properties_instance.to_dict()
# create an instance of SyncAgentLinkedDatabaseProperties from a dict
sync_agent_linked_database_properties_from_dict = SyncAgentLinkedDatabaseProperties.from_dict(sync_agent_linked_database_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


