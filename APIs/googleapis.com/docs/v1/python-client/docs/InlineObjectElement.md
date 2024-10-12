# InlineObjectElement

A ParagraphElement that contains an InlineObject.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inline_object_id** | **str** | The ID of the InlineObject this element contains. | [optional] 
**suggested_deletion_ids** | **List[str]** | The suggested deletion IDs. If empty, then there are no suggested deletions of this content. | [optional] 
**suggested_insertion_ids** | **List[str]** | The suggested insertion IDs. An InlineObjectElement may have multiple insertion IDs if it&#39;s a nested suggested change. If empty, then this is not a suggested insertion. | [optional] 
**suggested_text_style_changes** | [**Dict[str, SuggestedTextStyle]**](SuggestedTextStyle.md) | The suggested text style changes to this InlineObject, keyed by suggestion ID. | [optional] 
**text_style** | [**TextStyle**](TextStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.inline_object_element import InlineObjectElement

# TODO update the JSON string below
json = "{}"
# create an instance of InlineObjectElement from a JSON string
inline_object_element_instance = InlineObjectElement.from_json(json)
# print the JSON string representation of the object
print(InlineObjectElement.to_json())

# convert the object into a dict
inline_object_element_dict = inline_object_element_instance.to_dict()
# create an instance of InlineObjectElement from a dict
inline_object_element_from_dict = InlineObjectElement.from_dict(inline_object_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


