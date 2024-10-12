# StringInputs

Input parameter for regular widgets. For single-valued widgets, it is a single value list. For multi-valued widgets, such as checkbox, all the values are presented.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **List[str]** | An list of strings entered by the user. | [optional] 

## Example

```python
from openapi_client.models.string_inputs import StringInputs

# TODO update the JSON string below
json = "{}"
# create an instance of StringInputs from a JSON string
string_inputs_instance = StringInputs.from_json(json)
# print the JSON string representation of the object
print(StringInputs.to_json())

# convert the object into a dict
string_inputs_dict = string_inputs_instance.to_dict()
# create an instance of StringInputs from a dict
string_inputs_from_dict = StringInputs.from_dict(string_inputs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


