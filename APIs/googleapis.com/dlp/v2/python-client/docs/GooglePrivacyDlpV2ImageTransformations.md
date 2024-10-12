# GooglePrivacyDlpV2ImageTransformations

A type of transformation that is applied over images.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transforms** | [**List[GooglePrivacyDlpV2ImageTransformation]**](GooglePrivacyDlpV2ImageTransformation.md) | List of transforms to make. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_image_transformations import GooglePrivacyDlpV2ImageTransformations

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ImageTransformations from a JSON string
google_privacy_dlp_v2_image_transformations_instance = GooglePrivacyDlpV2ImageTransformations.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ImageTransformations.to_json())

# convert the object into a dict
google_privacy_dlp_v2_image_transformations_dict = google_privacy_dlp_v2_image_transformations_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ImageTransformations from a dict
google_privacy_dlp_v2_image_transformations_from_dict = GooglePrivacyDlpV2ImageTransformations.from_dict(google_privacy_dlp_v2_image_transformations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


