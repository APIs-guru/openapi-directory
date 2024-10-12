# RearPortTemplate


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
**positions** | **int** |  | [optional] 
**type** | [**Type2**](Type2.md) |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.rear_port_template import RearPortTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of RearPortTemplate from a JSON string
rear_port_template_instance = RearPortTemplate.from_json(json)
# print the JSON string representation of the object
print(RearPortTemplate.to_json())

# convert the object into a dict
rear_port_template_dict = rear_port_template_instance.to_dict()
# create an instance of RearPortTemplate from a dict
rear_port_template_from_dict = RearPortTemplate.from_dict(rear_port_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


