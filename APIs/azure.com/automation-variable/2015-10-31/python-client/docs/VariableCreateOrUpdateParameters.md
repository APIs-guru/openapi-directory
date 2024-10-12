# VariableCreateOrUpdateParameters

The parameters supplied to the create or update variable operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the variable. | 
**properties** | [**VariableCreateOrUpdateProperties**](VariableCreateOrUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.variable_create_or_update_parameters import VariableCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VariableCreateOrUpdateParameters from a JSON string
variable_create_or_update_parameters_instance = VariableCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(VariableCreateOrUpdateParameters.to_json())

# convert the object into a dict
variable_create_or_update_parameters_dict = variable_create_or_update_parameters_instance.to_dict()
# create an instance of VariableCreateOrUpdateParameters from a dict
variable_create_or_update_parameters_from_dict = VariableCreateOrUpdateParameters.from_dict(variable_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


