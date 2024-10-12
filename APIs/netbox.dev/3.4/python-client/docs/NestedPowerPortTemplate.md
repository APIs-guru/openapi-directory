# NestedPowerPortTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  {module} is accepted as a substitution for the module bay position when attached to a module type.  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_power_port_template import NestedPowerPortTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of NestedPowerPortTemplate from a JSON string
nested_power_port_template_instance = NestedPowerPortTemplate.from_json(json)
# print the JSON string representation of the object
print(NestedPowerPortTemplate.to_json())

# convert the object into a dict
nested_power_port_template_dict = nested_power_port_template_instance.to_dict()
# create an instance of NestedPowerPortTemplate from a dict
nested_power_port_template_from_dict = NestedPowerPortTemplate.from_dict(nested_power_port_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


