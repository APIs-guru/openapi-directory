# InterfaceTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**device_type** | [**NestedDeviceType**](NestedDeviceType.md) |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**mgmt_only** | **bool** |  | [optional] 
**module_type** | [**NestedModuleType**](NestedModuleType.md) |  | [optional] 
**name** | **str** |  {module} is accepted as a substitution for the module bay position when attached to a module type.  | 
**poe_mode** | [**PoeMode**](PoeMode.md) |  | [optional] 
**poe_type** | [**PoeType**](PoeType.md) |  | [optional] 
**type** | [**Type3**](Type3.md) |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.interface_template import InterfaceTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of InterfaceTemplate from a JSON string
interface_template_instance = InterfaceTemplate.from_json(json)
# print the JSON string representation of the object
print(InterfaceTemplate.to_json())

# convert the object into a dict
interface_template_dict = interface_template_instance.to_dict()
# create an instance of InterfaceTemplate from a dict
interface_template_from_dict = InterfaceTemplate.from_dict(interface_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


