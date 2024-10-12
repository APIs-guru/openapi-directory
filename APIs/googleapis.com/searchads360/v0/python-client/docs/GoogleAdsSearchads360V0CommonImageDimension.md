# GoogleAdsSearchads360V0CommonImageDimension

Metadata for an image at a certain size, either original or resized.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height_pixels** | **str** | Height of the image. | [optional] 
**url** | **str** | A URL that returns the image with this height and width. | [optional] 
**width_pixels** | **str** | Width of the image. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_image_dimension import GoogleAdsSearchads360V0CommonImageDimension

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonImageDimension from a JSON string
google_ads_searchads360_v0_common_image_dimension_instance = GoogleAdsSearchads360V0CommonImageDimension.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonImageDimension.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_image_dimension_dict = google_ads_searchads360_v0_common_image_dimension_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonImageDimension from a dict
google_ads_searchads360_v0_common_image_dimension_from_dict = GoogleAdsSearchads360V0CommonImageDimension.from_dict(google_ads_searchads360_v0_common_image_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


