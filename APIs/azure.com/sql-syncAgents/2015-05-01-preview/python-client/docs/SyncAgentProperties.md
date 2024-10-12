# SyncAgentProperties

Properties of an Azure SQL Database sync agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry_time** | **datetime** | Expiration time of the sync agent version. | [optional] [readonly] 
**is_up_to_date** | **bool** | If the sync agent version is up to date. | [optional] [readonly] 
**last_alive_time** | **datetime** | Last alive time of the sync agent. | [optional] [readonly] 
**name** | **str** | Name of the sync agent. | [optional] [readonly] 
**state** | **str** | State of the sync agent. | [optional] [readonly] 
**sync_database_id** | **str** | ARM resource id of the sync database in the sync agent. | [optional] 
**version** | **str** | Version of the sync agent. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_agent_properties import SyncAgentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SyncAgentProperties from a JSON string
sync_agent_properties_instance = SyncAgentProperties.from_json(json)
# print the JSON string representation of the object
print(SyncAgentProperties.to_json())

# convert the object into a dict
sync_agent_properties_dict = sync_agent_properties_instance.to_dict()
# create an instance of SyncAgentProperties from a dict
sync_agent_properties_from_dict = SyncAgentProperties.from_dict(sync_agent_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


