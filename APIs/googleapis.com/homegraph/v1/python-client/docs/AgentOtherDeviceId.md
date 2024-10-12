# AgentOtherDeviceId

Alternate third-party device ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_id** | **str** | Project ID for your smart home Action. | [optional] 
**device_id** | **str** | Unique third-party device ID. | [optional] 

## Example

```python
from openapi_client.models.agent_other_device_id import AgentOtherDeviceId

# TODO update the JSON string below
json = "{}"
# create an instance of AgentOtherDeviceId from a JSON string
agent_other_device_id_instance = AgentOtherDeviceId.from_json(json)
# print the JSON string representation of the object
print(AgentOtherDeviceId.to_json())

# convert the object into a dict
agent_other_device_id_dict = agent_other_device_id_instance.to_dict()
# create an instance of AgentOtherDeviceId from a dict
agent_other_device_id_from_dict = AgentOtherDeviceId.from_dict(agent_other_device_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


