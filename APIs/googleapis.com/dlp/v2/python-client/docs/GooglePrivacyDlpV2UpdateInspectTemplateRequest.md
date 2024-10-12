# GooglePrivacyDlpV2UpdateInspectTemplateRequest

Request message for UpdateInspectTemplate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inspect_template** | [**GooglePrivacyDlpV2InspectTemplate**](GooglePrivacyDlpV2InspectTemplate.md) |  | [optional] 
**update_mask** | **str** | Mask to control which fields get updated. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_update_inspect_template_request import GooglePrivacyDlpV2UpdateInspectTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2UpdateInspectTemplateRequest from a JSON string
google_privacy_dlp_v2_update_inspect_template_request_instance = GooglePrivacyDlpV2UpdateInspectTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2UpdateInspectTemplateRequest.to_json())

# convert the object into a dict
google_privacy_dlp_v2_update_inspect_template_request_dict = google_privacy_dlp_v2_update_inspect_template_request_instance.to_dict()
# create an instance of GooglePrivacyDlpV2UpdateInspectTemplateRequest from a dict
google_privacy_dlp_v2_update_inspect_template_request_from_dict = GooglePrivacyDlpV2UpdateInspectTemplateRequest.from_dict(google_privacy_dlp_v2_update_inspect_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


