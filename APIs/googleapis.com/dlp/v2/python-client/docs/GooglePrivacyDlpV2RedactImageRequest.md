# GooglePrivacyDlpV2RedactImageRequest

Request to search for potentially sensitive info in an image and redact it by covering it with a colored rectangle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**byte_item** | [**GooglePrivacyDlpV2ByteContentItem**](GooglePrivacyDlpV2ByteContentItem.md) |  | [optional] 
**image_redaction_configs** | [**List[GooglePrivacyDlpV2ImageRedactionConfig]**](GooglePrivacyDlpV2ImageRedactionConfig.md) | The configuration for specifying what content to redact from images. | [optional] 
**include_findings** | **bool** | Whether the response should include findings along with the redacted image. | [optional] 
**inspect_config** | [**GooglePrivacyDlpV2InspectConfig**](GooglePrivacyDlpV2InspectConfig.md) |  | [optional] 
**location_id** | **str** | Deprecated. This field has no effect. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_redact_image_request import GooglePrivacyDlpV2RedactImageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2RedactImageRequest from a JSON string
google_privacy_dlp_v2_redact_image_request_instance = GooglePrivacyDlpV2RedactImageRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2RedactImageRequest.to_json())

# convert the object into a dict
google_privacy_dlp_v2_redact_image_request_dict = google_privacy_dlp_v2_redact_image_request_instance.to_dict()
# create an instance of GooglePrivacyDlpV2RedactImageRequest from a dict
google_privacy_dlp_v2_redact_image_request_from_dict = GooglePrivacyDlpV2RedactImageRequest.from_dict(google_privacy_dlp_v2_redact_image_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


