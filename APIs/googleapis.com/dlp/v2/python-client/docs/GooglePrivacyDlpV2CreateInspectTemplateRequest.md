# GooglePrivacyDlpV2CreateInspectTemplateRequest

Request message for CreateInspectTemplate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inspect_template** | [**GooglePrivacyDlpV2InspectTemplate**](GooglePrivacyDlpV2InspectTemplate.md) |  | [optional] 
**location_id** | **str** | Deprecated. This field has no effect. | [optional] 
**template_id** | **str** | The template id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: &#x60;[a-zA-Z\\d-_]+&#x60;. The maximum length is 100 characters. Can be empty to allow the system to generate one. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_create_inspect_template_request import GooglePrivacyDlpV2CreateInspectTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CreateInspectTemplateRequest from a JSON string
google_privacy_dlp_v2_create_inspect_template_request_instance = GooglePrivacyDlpV2CreateInspectTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CreateInspectTemplateRequest.to_json())

# convert the object into a dict
google_privacy_dlp_v2_create_inspect_template_request_dict = google_privacy_dlp_v2_create_inspect_template_request_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CreateInspectTemplateRequest from a dict
google_privacy_dlp_v2_create_inspect_template_request_from_dict = GooglePrivacyDlpV2CreateInspectTemplateRequest.from_dict(google_privacy_dlp_v2_create_inspect_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


