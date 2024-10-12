# Promotion

Promotion result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body_lines** | [**List[PromotionBodyLinesInner]**](PromotionBodyLinesInner.md) | An array of block objects for this promotion. | [optional] 
**display_link** | **str** | An abridged version of this search&#39;s result URL, e.g. www.example.com. | [optional] 
**html_title** | **str** | The title of the promotion, in HTML. | [optional] 
**image** | [**PromotionImage**](PromotionImage.md) |  | [optional] 
**link** | **str** | The URL of the promotion. | [optional] 
**title** | **str** | The title of the promotion. | [optional] 

## Example

```python
from openapi_client.models.promotion import Promotion

# TODO update the JSON string below
json = "{}"
# create an instance of Promotion from a JSON string
promotion_instance = Promotion.from_json(json)
# print the JSON string representation of the object
print(Promotion.to_json())

# convert the object into a dict
promotion_dict = promotion_instance.to_dict()
# create an instance of Promotion from a dict
promotion_from_dict = Promotion.from_dict(promotion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


