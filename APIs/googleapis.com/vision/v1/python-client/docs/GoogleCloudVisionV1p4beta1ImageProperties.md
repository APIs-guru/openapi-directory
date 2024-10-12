# GoogleCloudVisionV1p4beta1ImageProperties

Stores image properties, such as dominant colors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dominant_colors** | [**GoogleCloudVisionV1p4beta1DominantColorsAnnotation**](GoogleCloudVisionV1p4beta1DominantColorsAnnotation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p4beta1_image_properties import GoogleCloudVisionV1p4beta1ImageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p4beta1ImageProperties from a JSON string
google_cloud_vision_v1p4beta1_image_properties_instance = GoogleCloudVisionV1p4beta1ImageProperties.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p4beta1ImageProperties.to_json())

# convert the object into a dict
google_cloud_vision_v1p4beta1_image_properties_dict = google_cloud_vision_v1p4beta1_image_properties_instance.to_dict()
# create an instance of GoogleCloudVisionV1p4beta1ImageProperties from a dict
google_cloud_vision_v1p4beta1_image_properties_from_dict = GoogleCloudVisionV1p4beta1ImageProperties.from_dict(google_cloud_vision_v1p4beta1_image_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


