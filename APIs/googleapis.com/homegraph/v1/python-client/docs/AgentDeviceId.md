# AgentDeviceId

Third-party device ID for one device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Third-party device ID. | [optional] 

## Example

```python
from openapi_client.models.agent_device_id import AgentDeviceId

# TODO update the JSON string below
json = "{}"
# create an instance of AgentDeviceId from a JSON string
agent_device_id_instance = AgentDeviceId.from_json(json)
# print the JSON string representation of the object
print(AgentDeviceId.to_json())

# convert the object into a dict
agent_device_id_dict = agent_device_id_instance.to_dict()
# create an instance of AgentDeviceId from a dict
agent_device_id_from_dict = AgentDeviceId.from_dict(agent_device_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


