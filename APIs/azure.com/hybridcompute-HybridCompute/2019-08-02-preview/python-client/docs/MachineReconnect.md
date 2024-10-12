# MachineReconnect

Describes a hybrid machine reconnect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MachineReconnectProperties**](MachineReconnectProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.machine_reconnect import MachineReconnect

# TODO update the JSON string below
json = "{}"
# create an instance of MachineReconnect from a JSON string
machine_reconnect_instance = MachineReconnect.from_json(json)
# print the JSON string representation of the object
print(MachineReconnect.to_json())

# convert the object into a dict
machine_reconnect_dict = machine_reconnect_instance.to_dict()
# create an instance of MachineReconnect from a dict
machine_reconnect_from_dict = MachineReconnect.from_dict(machine_reconnect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


