# GooglePrivacyDlpV2ReidentifyContentResponse

Results of re-identifying an item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item** | [**GooglePrivacyDlpV2ContentItem**](GooglePrivacyDlpV2ContentItem.md) |  | [optional] 
**overview** | [**GooglePrivacyDlpV2TransformationOverview**](GooglePrivacyDlpV2TransformationOverview.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_reidentify_content_response import GooglePrivacyDlpV2ReidentifyContentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ReidentifyContentResponse from a JSON string
google_privacy_dlp_v2_reidentify_content_response_instance = GooglePrivacyDlpV2ReidentifyContentResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ReidentifyContentResponse.to_json())

# convert the object into a dict
google_privacy_dlp_v2_reidentify_content_response_dict = google_privacy_dlp_v2_reidentify_content_response_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ReidentifyContentResponse from a dict
google_privacy_dlp_v2_reidentify_content_response_from_dict = GooglePrivacyDlpV2ReidentifyContentResponse.from_dict(google_privacy_dlp_v2_reidentify_content_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


