# FrontPortTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**device_type** | [**NestedDeviceType**](NestedDeviceType.md) |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**module_type** | [**NestedModuleType**](NestedModuleType.md) |  | [optional] 
**name** | **str** |  {module} is accepted as a substitution for the module bay position when attached to a module type.  | 
**rear_port** | [**NestedRearPortTemplate**](NestedRearPortTemplate.md) |  | 
**rear_port_position** | **int** |  | [optional] 
**type** | [**Type2**](Type2.md) |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.front_port_template import FrontPortTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of FrontPortTemplate from a JSON string
front_port_template_instance = FrontPortTemplate.from_json(json)
# print the JSON string representation of the object
print(FrontPortTemplate.to_json())

# convert the object into a dict
front_port_template_dict = front_port_template_instance.to_dict()
# create an instance of FrontPortTemplate from a dict
front_port_template_from_dict = FrontPortTemplate.from_dict(front_port_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


