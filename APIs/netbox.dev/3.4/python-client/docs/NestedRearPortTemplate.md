# NestedRearPortTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  {module} is accepted as a substitution for the module bay position when attached to a module type.  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_rear_port_template import NestedRearPortTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of NestedRearPortTemplate from a JSON string
nested_rear_port_template_instance = NestedRearPortTemplate.from_json(json)
# print the JSON string representation of the object
print(NestedRearPortTemplate.to_json())

# convert the object into a dict
nested_rear_port_template_dict = nested_rear_port_template_instance.to_dict()
# create an instance of NestedRearPortTemplate from a dict
nested_rear_port_template_from_dict = NestedRearPortTemplate.from_dict(nested_rear_port_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


