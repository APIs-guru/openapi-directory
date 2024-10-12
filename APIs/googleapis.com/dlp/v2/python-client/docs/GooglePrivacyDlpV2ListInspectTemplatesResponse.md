# GooglePrivacyDlpV2ListInspectTemplatesResponse

Response message for ListInspectTemplates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inspect_templates** | [**List[GooglePrivacyDlpV2InspectTemplate]**](GooglePrivacyDlpV2InspectTemplate.md) | List of inspectTemplates, up to page_size in ListInspectTemplatesRequest. | [optional] 
**next_page_token** | **str** | If the next page is available then the next page token to be used in the following ListInspectTemplates request. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_list_inspect_templates_response import GooglePrivacyDlpV2ListInspectTemplatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ListInspectTemplatesResponse from a JSON string
google_privacy_dlp_v2_list_inspect_templates_response_instance = GooglePrivacyDlpV2ListInspectTemplatesResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ListInspectTemplatesResponse.to_json())

# convert the object into a dict
google_privacy_dlp_v2_list_inspect_templates_response_dict = google_privacy_dlp_v2_list_inspect_templates_response_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ListInspectTemplatesResponse from a dict
google_privacy_dlp_v2_list_inspect_templates_response_from_dict = GooglePrivacyDlpV2ListInspectTemplatesResponse.from_dict(google_privacy_dlp_v2_list_inspect_templates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


