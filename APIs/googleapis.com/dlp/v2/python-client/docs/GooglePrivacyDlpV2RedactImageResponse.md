# GooglePrivacyDlpV2RedactImageResponse

Results of redacting an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extracted_text** | **str** | If an image was being inspected and the InspectConfig&#39;s include_quote was set to true, then this field will include all text, if any, that was found in the image. | [optional] 
**inspect_result** | [**GooglePrivacyDlpV2InspectResult**](GooglePrivacyDlpV2InspectResult.md) |  | [optional] 
**redacted_image** | **bytearray** | The redacted image. The type will be the same as the original image. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_redact_image_response import GooglePrivacyDlpV2RedactImageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2RedactImageResponse from a JSON string
google_privacy_dlp_v2_redact_image_response_instance = GooglePrivacyDlpV2RedactImageResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2RedactImageResponse.to_json())

# convert the object into a dict
google_privacy_dlp_v2_redact_image_response_dict = google_privacy_dlp_v2_redact_image_response_instance.to_dict()
# create an instance of GooglePrivacyDlpV2RedactImageResponse from a dict
google_privacy_dlp_v2_redact_image_response_from_dict = GooglePrivacyDlpV2RedactImageResponse.from_dict(google_privacy_dlp_v2_redact_image_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


