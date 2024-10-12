# AutoText

A ParagraphElement representing a spot in the text that's dynamically replaced with content that can change over time, like a page number.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suggested_deletion_ids** | **List[str]** | The suggested deletion IDs. If empty, then there are no suggested deletions of this content. | [optional] 
**suggested_insertion_ids** | **List[str]** | The suggested insertion IDs. An AutoText may have multiple insertion IDs if it&#39;s a nested suggested change. If empty, then this is not a suggested insertion. | [optional] 
**suggested_text_style_changes** | [**Dict[str, SuggestedTextStyle]**](SuggestedTextStyle.md) | The suggested text style changes to this AutoText, keyed by suggestion ID. | [optional] 
**text_style** | [**TextStyle**](TextStyle.md) |  | [optional] 
**type** | **str** | The type of this auto text. | [optional] 

## Example

```python
from openapi_client.models.auto_text import AutoText

# TODO update the JSON string below
json = "{}"
# create an instance of AutoText from a JSON string
auto_text_instance = AutoText.from_json(json)
# print the JSON string representation of the object
print(AutoText.to_json())

# convert the object into a dict
auto_text_dict = auto_text_instance.to_dict()
# create an instance of AutoText from a dict
auto_text_from_dict = AutoText.from_dict(auto_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


