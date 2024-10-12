# WritableFrontPortTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**device_type** | **int** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**module_type** | **int** |  | [optional] 
**name** | **str** |  {module} is accepted as a substitution for the module bay position when attached to a module type.  | 
**rear_port** | **int** |  | 
**rear_port_position** | **int** |  | [optional] 
**type** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_front_port_template import WritableFrontPortTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of WritableFrontPortTemplate from a JSON string
writable_front_port_template_instance = WritableFrontPortTemplate.from_json(json)
# print the JSON string representation of the object
print(WritableFrontPortTemplate.to_json())

# convert the object into a dict
writable_front_port_template_dict = writable_front_port_template_instance.to_dict()
# create an instance of WritableFrontPortTemplate from a dict
writable_front_port_template_from_dict = WritableFrontPortTemplate.from_dict(writable_front_port_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


