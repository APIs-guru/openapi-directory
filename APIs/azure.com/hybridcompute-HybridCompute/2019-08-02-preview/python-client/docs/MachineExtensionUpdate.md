# MachineExtensionUpdate

Describes a Machine Extension Update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MachineExtensionUpdateProperties**](MachineExtensionUpdateProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.machine_extension_update import MachineExtensionUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of MachineExtensionUpdate from a JSON string
machine_extension_update_instance = MachineExtensionUpdate.from_json(json)
# print the JSON string representation of the object
print(MachineExtensionUpdate.to_json())

# convert the object into a dict
machine_extension_update_dict = machine_extension_update_instance.to_dict()
# create an instance of MachineExtensionUpdate from a dict
machine_extension_update_from_dict = MachineExtensionUpdate.from_dict(machine_extension_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


