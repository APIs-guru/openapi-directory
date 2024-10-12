# VariableCreateOrUpdateProperties

The properties of the create variable operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Gets or sets the description of the variable. | [optional] 
**is_encrypted** | **bool** | Gets or sets the encrypted flag of the variable. | [optional] 
**value** | **str** | Gets or sets the value of the variable. | [optional] 

## Example

```python
from openapi_client.models.variable_create_or_update_properties import VariableCreateOrUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VariableCreateOrUpdateProperties from a JSON string
variable_create_or_update_properties_instance = VariableCreateOrUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(VariableCreateOrUpdateProperties.to_json())

# convert the object into a dict
variable_create_or_update_properties_dict = variable_create_or_update_properties_instance.to_dict()
# create an instance of VariableCreateOrUpdateProperties from a dict
variable_create_or_update_properties_from_dict = VariableCreateOrUpdateProperties.from_dict(variable_create_or_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


