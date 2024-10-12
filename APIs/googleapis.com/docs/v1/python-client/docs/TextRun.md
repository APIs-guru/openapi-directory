# TextRun

A ParagraphElement that represents a run of text that all has the same styling.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The text of this run. Any non-text elements in the run are replaced with the Unicode character U+E907. | [optional] 
**suggested_deletion_ids** | **List[str]** | The suggested deletion IDs. If empty, then there are no suggested deletions of this content. | [optional] 
**suggested_insertion_ids** | **List[str]** | The suggested insertion IDs. A TextRun may have multiple insertion IDs if it&#39;s a nested suggested change. If empty, then this is not a suggested insertion. | [optional] 
**suggested_text_style_changes** | [**Dict[str, SuggestedTextStyle]**](SuggestedTextStyle.md) | The suggested text style changes to this run, keyed by suggestion ID. | [optional] 
**text_style** | [**TextStyle**](TextStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.text_run import TextRun

# TODO update the JSON string below
json = "{}"
# create an instance of TextRun from a JSON string
text_run_instance = TextRun.from_json(json)
# print the JSON string representation of the object
print(TextRun.to_json())

# convert the object into a dict
text_run_dict = text_run_instance.to_dict()
# create an instance of TextRun from a dict
text_run_from_dict = TextRun.from_dict(text_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


