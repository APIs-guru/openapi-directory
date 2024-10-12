# ContextValue

A message representing context for a KeyRangeInfo, including a label, value, unit, and severity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**severity** | **str** | The severity of this context. | [optional] 
**unit** | **str** | The unit of the context value. | [optional] 
**value** | **float** | The value for the context. | [optional] 

## Example

```python
from openapi_client.models.context_value import ContextValue

# TODO update the JSON string below
json = "{}"
# create an instance of ContextValue from a JSON string
context_value_instance = ContextValue.from_json(json)
# print the JSON string representation of the object
print(ContextValue.to_json())

# convert the object into a dict
context_value_dict = context_value_instance.to_dict()
# create an instance of ContextValue from a dict
context_value_from_dict = ContextValue.from_dict(context_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


