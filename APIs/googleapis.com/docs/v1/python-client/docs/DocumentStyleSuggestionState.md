# DocumentStyleSuggestionState

A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_suggestion_state** | [**BackgroundSuggestionState**](BackgroundSuggestionState.md) |  | [optional] 
**default_footer_id_suggested** | **bool** | Indicates if there was a suggested change to default_footer_id. | [optional] 
**default_header_id_suggested** | **bool** | Indicates if there was a suggested change to default_header_id. | [optional] 
**even_page_footer_id_suggested** | **bool** | Indicates if there was a suggested change to even_page_footer_id. | [optional] 
**even_page_header_id_suggested** | **bool** | Indicates if there was a suggested change to even_page_header_id. | [optional] 
**first_page_footer_id_suggested** | **bool** | Indicates if there was a suggested change to first_page_footer_id. | [optional] 
**first_page_header_id_suggested** | **bool** | Indicates if there was a suggested change to first_page_header_id. | [optional] 
**flip_page_orientation_suggested** | **bool** | Optional. Indicates if there was a suggested change to flip_page_orientation. | [optional] 
**margin_bottom_suggested** | **bool** | Indicates if there was a suggested change to margin_bottom. | [optional] 
**margin_footer_suggested** | **bool** | Indicates if there was a suggested change to margin_footer. | [optional] 
**margin_header_suggested** | **bool** | Indicates if there was a suggested change to margin_header. | [optional] 
**margin_left_suggested** | **bool** | Indicates if there was a suggested change to margin_left. | [optional] 
**margin_right_suggested** | **bool** | Indicates if there was a suggested change to margin_right. | [optional] 
**margin_top_suggested** | **bool** | Indicates if there was a suggested change to margin_top. | [optional] 
**page_number_start_suggested** | **bool** | Indicates if there was a suggested change to page_number_start. | [optional] 
**page_size_suggestion_state** | [**SizeSuggestionState**](SizeSuggestionState.md) |  | [optional] 
**use_custom_header_footer_margins_suggested** | **bool** | Indicates if there was a suggested change to use_custom_header_footer_margins. | [optional] 
**use_even_page_header_footer_suggested** | **bool** | Indicates if there was a suggested change to use_even_page_header_footer. | [optional] 
**use_first_page_header_footer_suggested** | **bool** | Indicates if there was a suggested change to use_first_page_header_footer. | [optional] 

## Example

```python
from openapi_client.models.document_style_suggestion_state import DocumentStyleSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentStyleSuggestionState from a JSON string
document_style_suggestion_state_instance = DocumentStyleSuggestionState.from_json(json)
# print the JSON string representation of the object
print(DocumentStyleSuggestionState.to_json())

# convert the object into a dict
document_style_suggestion_state_dict = document_style_suggestion_state_instance.to_dict()
# create an instance of DocumentStyleSuggestionState from a dict
document_style_suggestion_state_from_dict = DocumentStyleSuggestionState.from_dict(document_style_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


