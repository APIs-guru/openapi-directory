# GooglePrivacyDlpV2ListDeidentifyTemplatesResponse

Response message for ListDeidentifyTemplates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deidentify_templates** | [**List[GooglePrivacyDlpV2DeidentifyTemplate]**](GooglePrivacyDlpV2DeidentifyTemplate.md) | List of deidentify templates, up to page_size in ListDeidentifyTemplatesRequest. | [optional] 
**next_page_token** | **str** | If the next page is available then the next page token to be used in the following ListDeidentifyTemplates request. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_list_deidentify_templates_response import GooglePrivacyDlpV2ListDeidentifyTemplatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ListDeidentifyTemplatesResponse from a JSON string
google_privacy_dlp_v2_list_deidentify_templates_response_instance = GooglePrivacyDlpV2ListDeidentifyTemplatesResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ListDeidentifyTemplatesResponse.to_json())

# convert the object into a dict
google_privacy_dlp_v2_list_deidentify_templates_response_dict = google_privacy_dlp_v2_list_deidentify_templates_response_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ListDeidentifyTemplatesResponse from a dict
google_privacy_dlp_v2_list_deidentify_templates_response_from_dict = GooglePrivacyDlpV2ListDeidentifyTemplatesResponse.from_dict(google_privacy_dlp_v2_list_deidentify_templates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


