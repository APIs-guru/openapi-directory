# VariableUpdateParameters

The parameters supplied to the update variable operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the variable. | [optional] 
**properties** | [**VariableUpdateProperties**](VariableUpdateProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.variable_update_parameters import VariableUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VariableUpdateParameters from a JSON string
variable_update_parameters_instance = VariableUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(VariableUpdateParameters.to_json())

# convert the object into a dict
variable_update_parameters_dict = variable_update_parameters_instance.to_dict()
# create an instance of VariableUpdateParameters from a dict
variable_update_parameters_from_dict = VariableUpdateParameters.from_dict(variable_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


