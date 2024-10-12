# SyncAgentKeyProperties

Properties of an Azure SQL Database sync agent key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sync_agent_key** | **str** | Key of sync agent. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_agent_key_properties import SyncAgentKeyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SyncAgentKeyProperties from a JSON string
sync_agent_key_properties_instance = SyncAgentKeyProperties.from_json(json)
# print the JSON string representation of the object
print(SyncAgentKeyProperties.to_json())

# convert the object into a dict
sync_agent_key_properties_dict = sync_agent_key_properties_instance.to_dict()
# create an instance of SyncAgentKeyProperties from a dict
sync_agent_key_properties_from_dict = SyncAgentKeyProperties.from_dict(sync_agent_key_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


