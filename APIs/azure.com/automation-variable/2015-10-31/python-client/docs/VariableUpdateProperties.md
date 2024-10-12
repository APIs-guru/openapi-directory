# VariableUpdateProperties

The properties of the update variable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Gets or sets the description of the variable. | [optional] 
**value** | **str** | Gets or sets the value of the variable. | [optional] 

## Example

```python
from openapi_client.models.variable_update_properties import VariableUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VariableUpdateProperties from a JSON string
variable_update_properties_instance = VariableUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(VariableUpdateProperties.to_json())

# convert the object into a dict
variable_update_properties_dict = variable_update_properties_instance.to_dict()
# create an instance of VariableUpdateProperties from a dict
variable_update_properties_from_dict = VariableUpdateProperties.from_dict(variable_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


