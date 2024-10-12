# HorizontalRule

A ParagraphElement representing a horizontal line.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suggested_deletion_ids** | **List[str]** | The suggested deletion IDs. If empty, then there are no suggested deletions of this content. | [optional] 
**suggested_insertion_ids** | **List[str]** | The suggested insertion IDs. A HorizontalRule may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion. | [optional] 
**suggested_text_style_changes** | [**Dict[str, SuggestedTextStyle]**](SuggestedTextStyle.md) | The suggested text style changes to this HorizontalRule, keyed by suggestion ID. | [optional] 
**text_style** | [**TextStyle**](TextStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.horizontal_rule import HorizontalRule

# TODO update the JSON string below
json = "{}"
# create an instance of HorizontalRule from a JSON string
horizontal_rule_instance = HorizontalRule.from_json(json)
# print the JSON string representation of the object
print(HorizontalRule.to_json())

# convert the object into a dict
horizontal_rule_dict = horizontal_rule_instance.to_dict()
# create an instance of HorizontalRule from a dict
horizontal_rule_from_dict = HorizontalRule.from_dict(horizontal_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


