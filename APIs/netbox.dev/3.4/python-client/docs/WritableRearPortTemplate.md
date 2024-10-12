# WritableRearPortTemplate


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
**positions** | **int** |  | [optional] 
**type** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_rear_port_template import WritableRearPortTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of WritableRearPortTemplate from a JSON string
writable_rear_port_template_instance = WritableRearPortTemplate.from_json(json)
# print the JSON string representation of the object
print(WritableRearPortTemplate.to_json())

# convert the object into a dict
writable_rear_port_template_dict = writable_rear_port_template_instance.to_dict()
# create an instance of WritableRearPortTemplate from a dict
writable_rear_port_template_from_dict = WritableRearPortTemplate.from_dict(writable_rear_port_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


