# GoogleCloudRecommendationengineV1beta1Image

Catalog item thumbnail/detail image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | Optional. Height of the image in number of pixels. | [optional] 
**uri** | **str** | Required. URL of the image with a length limit of 5 KiB. | [optional] 
**width** | **int** | Optional. Width of the image in number of pixels. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_image import GoogleCloudRecommendationengineV1beta1Image

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1Image from a JSON string
google_cloud_recommendationengine_v1beta1_image_instance = GoogleCloudRecommendationengineV1beta1Image.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1Image.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_image_dict = google_cloud_recommendationengine_v1beta1_image_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1Image from a dict
google_cloud_recommendationengine_v1beta1_image_from_dict = GoogleCloudRecommendationengineV1beta1Image.from_dict(google_cloud_recommendationengine_v1beta1_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


