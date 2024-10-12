# CustomContextVariable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Type of custom context variable. | 
**account_id** | **str** | The account ID of the user. | 
**id** | **int** | The issue ID. | [optional] 
**key** | **str** | The issue key. | [optional] 
**value** | **object** | A JSON object containing custom content. | [optional] 

## Example

```python
from openapi_client.models.custom_context_variable import CustomContextVariable

# TODO update the JSON string below
json = "{}"
# create an instance of CustomContextVariable from a JSON string
custom_context_variable_instance = CustomContextVariable.from_json(json)
# print the JSON string representation of the object
print(CustomContextVariable.to_json())

# convert the object into a dict
custom_context_variable_dict = custom_context_variable_instance.to_dict()
# create an instance of CustomContextVariable from a dict
custom_context_variable_from_dict = CustomContextVariable.from_dict(custom_context_variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


