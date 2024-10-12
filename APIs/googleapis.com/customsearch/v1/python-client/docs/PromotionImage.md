# PromotionImage

Image belonging to a promotion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | Image height in pixels. | [optional] 
**source** | **str** | URL of the image for this promotion link. | [optional] 
**width** | **int** | Image width in pixels. | [optional] 

## Example

```python
from openapi_client.models.promotion_image import PromotionImage

# TODO update the JSON string below
json = "{}"
# create an instance of PromotionImage from a JSON string
promotion_image_instance = PromotionImage.from_json(json)
# print the JSON string representation of the object
print(PromotionImage.to_json())

# convert the object into a dict
promotion_image_dict = promotion_image_instance.to_dict()
# create an instance of PromotionImage from a dict
promotion_image_from_dict = PromotionImage.from_dict(promotion_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


