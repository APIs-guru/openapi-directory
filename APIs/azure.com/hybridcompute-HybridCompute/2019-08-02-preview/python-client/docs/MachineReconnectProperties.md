# MachineReconnectProperties

Describes the properties required to reconnect a hybrid machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_public_key** | **str** | Public Key that the client provides to be used during initial resource onboarding. | [optional] 
**vm_id** | **str** | Specifies the hybrid machine unique ID. | [optional] 

## Example

```python
from openapi_client.models.machine_reconnect_properties import MachineReconnectProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MachineReconnectProperties from a JSON string
machine_reconnect_properties_instance = MachineReconnectProperties.from_json(json)
# print the JSON string representation of the object
print(MachineReconnectProperties.to_json())

# convert the object into a dict
machine_reconnect_properties_dict = machine_reconnect_properties_instance.to_dict()
# create an instance of MachineReconnectProperties from a dict
machine_reconnect_properties_from_dict = MachineReconnectProperties.from_dict(machine_reconnect_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


