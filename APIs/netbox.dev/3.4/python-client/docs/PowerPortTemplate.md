# PowerPortTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated_draw** | **int** | Allocated power draw (watts) | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**device_type** | [**NestedDeviceType**](NestedDeviceType.md) |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**maximum_draw** | **int** | Maximum power draw (watts) | [optional] 
**module_type** | [**NestedModuleType**](NestedModuleType.md) |  | [optional] 
**name** | **str** |  {module} is accepted as a substitution for the module bay position when attached to a module type.  | 
**type** | [**Type7**](Type7.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.power_port_template import PowerPortTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of PowerPortTemplate from a JSON string
power_port_template_instance = PowerPortTemplate.from_json(json)
# print the JSON string representation of the object
print(PowerPortTemplate.to_json())

# convert the object into a dict
power_port_template_dict = power_port_template_instance.to_dict()
# create an instance of PowerPortTemplate from a dict
power_port_template_from_dict = PowerPortTemplate.from_dict(power_port_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


