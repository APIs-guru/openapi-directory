# WritableInterfaceTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**device_type** | **int** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**mgmt_only** | **bool** |  | [optional] 
**module_type** | **int** |  | [optional] 
**name** | **str** |  {module} is accepted as a substitution for the module bay position when attached to a module type.  | 
**poe_mode** | **str** |  | [optional] 
**poe_type** | **str** |  | [optional] 
**type** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_interface_template import WritableInterfaceTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of WritableInterfaceTemplate from a JSON string
writable_interface_template_instance = WritableInterfaceTemplate.from_json(json)
# print the JSON string representation of the object
print(WritableInterfaceTemplate.to_json())

# convert the object into a dict
writable_interface_template_dict = writable_interface_template_instance.to_dict()
# create an instance of WritableInterfaceTemplate from a dict
writable_interface_template_from_dict = WritableInterfaceTemplate.from_dict(writable_interface_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


