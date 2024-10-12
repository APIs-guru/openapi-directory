# GooglePrivacyDlpV2InspectContentResponse

Results of inspecting an item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**GooglePrivacyDlpV2InspectResult**](GooglePrivacyDlpV2InspectResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_inspect_content_response import GooglePrivacyDlpV2InspectContentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InspectContentResponse from a JSON string
google_privacy_dlp_v2_inspect_content_response_instance = GooglePrivacyDlpV2InspectContentResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InspectContentResponse.to_json())

# convert the object into a dict
google_privacy_dlp_v2_inspect_content_response_dict = google_privacy_dlp_v2_inspect_content_response_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InspectContentResponse from a dict
google_privacy_dlp_v2_inspect_content_response_from_dict = GooglePrivacyDlpV2InspectContentResponse.from_dict(google_privacy_dlp_v2_inspect_content_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


