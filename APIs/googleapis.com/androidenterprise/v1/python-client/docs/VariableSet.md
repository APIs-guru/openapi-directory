# VariableSet

A variable set is a key-value pair of EMM-provided placeholders and its corresponding value, which is attributed to a user. For example, $FIRSTNAME could be a placeholder, and its value could be Alice. Placeholders should start with a '$' sign and should be alphanumeric only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**placeholder** | **str** | The placeholder string; defined by EMM. | [optional] 
**user_value** | **str** | The value of the placeholder, specific to the user. | [optional] 

## Example

```python
from openapi_client.models.variable_set import VariableSet

# TODO update the JSON string below
json = "{}"
# create an instance of VariableSet from a JSON string
variable_set_instance = VariableSet.from_json(json)
# print the JSON string representation of the object
print(VariableSet.to_json())

# convert the object into a dict
variable_set_dict = variable_set_instance.to_dict()
# create an instance of VariableSet from a dict
variable_set_from_dict = VariableSet.from_dict(variable_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


