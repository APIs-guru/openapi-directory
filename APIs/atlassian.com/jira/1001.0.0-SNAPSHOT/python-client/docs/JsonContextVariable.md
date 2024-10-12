# JsonContextVariable

A JSON object with custom content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of custom context variable. | 
**value** | **object** | A JSON object containing custom content. | [optional] 

## Example

```python
from openapi_client.models.json_context_variable import JsonContextVariable

# TODO update the JSON string below
json = "{}"
# create an instance of JsonContextVariable from a JSON string
json_context_variable_instance = JsonContextVariable.from_json(json)
# print the JSON string representation of the object
print(JsonContextVariable.to_json())

# convert the object into a dict
json_context_variable_dict = json_context_variable_instance.to_dict()
# create an instance of JsonContextVariable from a dict
json_context_variable_from_dict = JsonContextVariable.from_dict(json_context_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


