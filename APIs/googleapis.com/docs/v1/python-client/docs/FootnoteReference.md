# FootnoteReference

A ParagraphElement representing a footnote reference. A footnote reference is the inline content rendered with a number and is used to identify the footnote.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**footnote_id** | **str** | The ID of the footnote that contains the content of this footnote reference. | [optional] 
**footnote_number** | **str** | The rendered number of this footnote. | [optional] 
**suggested_deletion_ids** | **List[str]** | The suggested deletion IDs. If empty, then there are no suggested deletions of this content. | [optional] 
**suggested_insertion_ids** | **List[str]** | The suggested insertion IDs. A FootnoteReference may have multiple insertion IDs if it&#39;s a nested suggested change. If empty, then this is not a suggested insertion. | [optional] 
**suggested_text_style_changes** | [**Dict[str, SuggestedTextStyle]**](SuggestedTextStyle.md) | The suggested text style changes to this FootnoteReference, keyed by suggestion ID. | [optional] 
**text_style** | [**TextStyle**](TextStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.footnote_reference import FootnoteReference

# TODO update the JSON string below
json = "{}"
# create an instance of FootnoteReference from a JSON string
footnote_reference_instance = FootnoteReference.from_json(json)
# print the JSON string representation of the object
print(FootnoteReference.to_json())

# convert the object into a dict
footnote_reference_dict = footnote_reference_instance.to_dict()
# create an instance of FootnoteReference from a dict
footnote_reference_from_dict = FootnoteReference.from_dict(footnote_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


