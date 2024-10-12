# SuggestedDocumentStyle

A suggested change to the DocumentStyle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_style** | [**DocumentStyle**](DocumentStyle.md) |  | [optional] 
**document_style_suggestion_state** | [**DocumentStyleSuggestionState**](DocumentStyleSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.suggested_document_style import SuggestedDocumentStyle

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestedDocumentStyle from a JSON string
suggested_document_style_instance = SuggestedDocumentStyle.from_json(json)
# print the JSON string representation of the object
print(SuggestedDocumentStyle.to_json())

# convert the object into a dict
suggested_document_style_dict = suggested_document_style_instance.to_dict()
# create an instance of SuggestedDocumentStyle from a dict
suggested_document_style_from_dict = SuggestedDocumentStyle.from_dict(suggested_document_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


