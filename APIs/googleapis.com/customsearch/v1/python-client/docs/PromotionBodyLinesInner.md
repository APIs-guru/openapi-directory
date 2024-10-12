# PromotionBodyLinesInner

Block object belonging to a promotion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**html_title** | **str** | The block object&#39;s text in HTML, if it has text. | [optional] 
**link** | **str** | The anchor text of the block object&#39;s link, if it has a link. | [optional] 
**title** | **str** | The block object&#39;s text, if it has text. | [optional] 
**url** | **str** | The URL of the block object&#39;s link, if it has one. | [optional] 

## Example

```python
from openapi_client.models.promotion_body_lines_inner import PromotionBodyLinesInner

# TODO update the JSON string below
json = "{}"
# create an instance of PromotionBodyLinesInner from a JSON string
promotion_body_lines_inner_instance = PromotionBodyLinesInner.from_json(json)
# print the JSON string representation of the object
print(PromotionBodyLinesInner.to_json())

# convert the object into a dict
promotion_body_lines_inner_dict = promotion_body_lines_inner_instance.to_dict()
# create an instance of PromotionBodyLinesInner from a dict
promotion_body_lines_inner_from_dict = PromotionBodyLinesInner.from_dict(promotion_body_lines_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


