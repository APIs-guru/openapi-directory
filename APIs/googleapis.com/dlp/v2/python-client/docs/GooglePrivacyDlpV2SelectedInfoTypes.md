# GooglePrivacyDlpV2SelectedInfoTypes

Apply transformation to the selected info_types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info_types** | [**List[GooglePrivacyDlpV2InfoType]**](GooglePrivacyDlpV2InfoType.md) | Required. InfoTypes to apply the transformation to. Required. Provided InfoType must be unique within the ImageTransformations message. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_selected_info_types import GooglePrivacyDlpV2SelectedInfoTypes

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2SelectedInfoTypes from a JSON string
google_privacy_dlp_v2_selected_info_types_instance = GooglePrivacyDlpV2SelectedInfoTypes.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2SelectedInfoTypes.to_json())

# convert the object into a dict
google_privacy_dlp_v2_selected_info_types_dict = google_privacy_dlp_v2_selected_info_types_instance.to_dict()
# create an instance of GooglePrivacyDlpV2SelectedInfoTypes from a dict
google_privacy_dlp_v2_selected_info_types_from_dict = GooglePrivacyDlpV2SelectedInfoTypes.from_dict(google_privacy_dlp_v2_selected_info_types_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


