# GooglePrivacyDlpV2ImageRedactionConfig

Configuration for determining how redaction of images should occur.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info_type** | [**GooglePrivacyDlpV2InfoType**](GooglePrivacyDlpV2InfoType.md) |  | [optional] 
**redact_all_text** | **bool** | If true, all text found in the image, regardless whether it matches an info_type, is redacted. Only one should be provided. | [optional] 
**redaction_color** | [**GooglePrivacyDlpV2Color**](GooglePrivacyDlpV2Color.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_image_redaction_config import GooglePrivacyDlpV2ImageRedactionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ImageRedactionConfig from a JSON string
google_privacy_dlp_v2_image_redaction_config_instance = GooglePrivacyDlpV2ImageRedactionConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ImageRedactionConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_image_redaction_config_dict = google_privacy_dlp_v2_image_redaction_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ImageRedactionConfig from a dict
google_privacy_dlp_v2_image_redaction_config_from_dict = GooglePrivacyDlpV2ImageRedactionConfig.from_dict(google_privacy_dlp_v2_image_redaction_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


