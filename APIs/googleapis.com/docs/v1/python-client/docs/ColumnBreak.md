# ColumnBreak

A ParagraphElement representing a column break. A column break makes the subsequent text start at the top of the next column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suggested_deletion_ids** | **List[str]** | The suggested deletion IDs. If empty, then there are no suggested deletions of this content. | [optional] 
**suggested_insertion_ids** | **List[str]** | The suggested insertion IDs. A ColumnBreak may have multiple insertion IDs if it&#39;s a nested suggested change. If empty, then this is not a suggested insertion. | [optional] 
**suggested_text_style_changes** | [**Dict[str, SuggestedTextStyle]**](SuggestedTextStyle.md) | The suggested text style changes to this ColumnBreak, keyed by suggestion ID. | [optional] 
**text_style** | [**TextStyle**](TextStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.column_break import ColumnBreak

# TODO update the JSON string below
json = "{}"
# create an instance of ColumnBreak from a JSON string
column_break_instance = ColumnBreak.from_json(json)
# print the JSON string representation of the object
print(ColumnBreak.to_json())

# convert the object into a dict
column_break_dict = column_break_instance.to_dict()
# create an instance of ColumnBreak from a dict
column_break_from_dict = ColumnBreak.from_dict(column_break_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


