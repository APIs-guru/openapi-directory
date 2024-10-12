# SuggestedNamedStyles

A suggested change to the NamedStyles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**named_styles** | [**NamedStyles**](NamedStyles.md) |  | [optional] 
**named_styles_suggestion_state** | [**NamedStylesSuggestionState**](NamedStylesSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.suggested_named_styles import SuggestedNamedStyles

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestedNamedStyles from a JSON string
suggested_named_styles_instance = SuggestedNamedStyles.from_json(json)
# print the JSON string representation of the object
print(SuggestedNamedStyles.to_json())

# convert the object into a dict
suggested_named_styles_dict = suggested_named_styles_instance.to_dict()
# create an instance of SuggestedNamedStyles from a dict
suggested_named_styles_from_dict = SuggestedNamedStyles.from_dict(suggested_named_styles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


