# SyncAgent

An Azure SQL Database sync agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SyncAgentProperties**](SyncAgentProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sync_agent import SyncAgent

# TODO update the JSON string below
json = "{}"
# create an instance of SyncAgent from a JSON string
sync_agent_instance = SyncAgent.from_json(json)
# print the JSON string representation of the object
print(SyncAgent.to_json())

# convert the object into a dict
sync_agent_dict = sync_agent_instance.to_dict()
# create an instance of SyncAgent from a dict
sync_agent_from_dict = SyncAgent.from_dict(sync_agent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


