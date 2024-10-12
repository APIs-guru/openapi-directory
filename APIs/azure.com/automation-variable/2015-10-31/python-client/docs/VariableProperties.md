# VariableProperties

Definition of the variable properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **datetime** | Gets or sets the creation time. | [optional] 
**description** | **str** | Gets or sets the description. | [optional] 
**is_encrypted** | **bool** | Gets or sets the encrypted flag of the variable. | [optional] 
**last_modified_time** | **datetime** | Gets or sets the last modified time. | [optional] 
**value** | **str** | Gets or sets the value of the variable. | [optional] 

## Example

```python
from openapi_client.models.variable_properties import VariableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VariableProperties from a JSON string
variable_properties_instance = VariableProperties.from_json(json)
# print the JSON string representation of the object
print(VariableProperties.to_json())

# convert the object into a dict
variable_properties_dict = variable_properties_instance.to_dict()
# create an instance of VariableProperties from a dict
variable_properties_from_dict = VariableProperties.from_dict(variable_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


