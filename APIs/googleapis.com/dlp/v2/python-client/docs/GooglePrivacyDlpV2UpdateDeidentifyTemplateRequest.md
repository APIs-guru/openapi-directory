# GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest

Request message for UpdateDeidentifyTemplate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deidentify_template** | [**GooglePrivacyDlpV2DeidentifyTemplate**](GooglePrivacyDlpV2DeidentifyTemplate.md) |  | [optional] 
**update_mask** | **str** | Mask to control which fields get updated. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_update_deidentify_template_request import GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest from a JSON string
google_privacy_dlp_v2_update_deidentify_template_request_instance = GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest.to_json())

# convert the object into a dict
google_privacy_dlp_v2_update_deidentify_template_request_dict = google_privacy_dlp_v2_update_deidentify_template_request_instance.to_dict()
# create an instance of GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest from a dict
google_privacy_dlp_v2_update_deidentify_template_request_from_dict = GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest.from_dict(google_privacy_dlp_v2_update_deidentify_template_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


