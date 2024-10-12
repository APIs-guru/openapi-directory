# VariableListResult

The response model for the list variables operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[Variable]**](Variable.md) | Gets or sets a list of variables. | [optional] 

## Example

```python
from openapi_client.models.variable_list_result import VariableListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VariableListResult from a JSON string
variable_list_result_instance = VariableListResult.from_json(json)
# print the JSON string representation of the object
print(VariableListResult.to_json())

# convert the object into a dict
variable_list_result_dict = variable_list_result_instance.to_dict()
# create an instance of VariableListResult from a dict
variable_list_result_from_dict = VariableListResult.from_dict(variable_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


