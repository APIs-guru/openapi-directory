# MachineExtension

Describes a Machine Extension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MachineExtensionProperties**](MachineExtensionProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**identity** | [**Identity**](Identity.md) |  | [optional] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.machine_extension import MachineExtension

# TODO update the JSON string below
json = "{}"
# create an instance of MachineExtension from a JSON string
machine_extension_instance = MachineExtension.from_json(json)
# print the JSON string representation of the object
print(MachineExtension.to_json())

# convert the object into a dict
machine_extension_dict = machine_extension_instance.to_dict()
# create an instance of MachineExtension from a dict
machine_extension_from_dict = MachineExtension.from_dict(machine_extension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


