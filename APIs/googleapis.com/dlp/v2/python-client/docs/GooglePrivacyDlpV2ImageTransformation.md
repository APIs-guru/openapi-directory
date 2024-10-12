# GooglePrivacyDlpV2ImageTransformation

Configuration for determining how redaction of images should occur.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_info_types** | **object** | Apply transformation to all findings. | [optional] 
**all_text** | **object** | Apply to all text. | [optional] 
**redaction_color** | [**GooglePrivacyDlpV2Color**](GooglePrivacyDlpV2Color.md) |  | [optional] 
**selected_info_types** | [**GooglePrivacyDlpV2SelectedInfoTypes**](GooglePrivacyDlpV2SelectedInfoTypes.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_image_transformation import GooglePrivacyDlpV2ImageTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ImageTransformation from a JSON string
google_privacy_dlp_v2_image_transformation_instance = GooglePrivacyDlpV2ImageTransformation.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ImageTransformation.to_json())

# convert the object into a dict
google_privacy_dlp_v2_image_transformation_dict = google_privacy_dlp_v2_image_transformation_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ImageTransformation from a dict
google_privacy_dlp_v2_image_transformation_from_dict = GooglePrivacyDlpV2ImageTransformation.from_dict(google_privacy_dlp_v2_image_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


