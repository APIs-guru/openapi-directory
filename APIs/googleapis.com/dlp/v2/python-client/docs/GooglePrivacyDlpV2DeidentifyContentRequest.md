# GooglePrivacyDlpV2DeidentifyContentRequest

Request to de-identify a ContentItem.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deidentify_config** | [**GooglePrivacyDlpV2DeidentifyConfig**](GooglePrivacyDlpV2DeidentifyConfig.md) |  | [optional] 
**deidentify_template_name** | **str** | Template to use. Any configuration directly specified in deidentify_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. | [optional] 
**inspect_config** | [**GooglePrivacyDlpV2InspectConfig**](GooglePrivacyDlpV2InspectConfig.md) |  | [optional] 
**inspect_template_name** | **str** | Template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. | [optional] 
**item** | [**GooglePrivacyDlpV2ContentItem**](GooglePrivacyDlpV2ContentItem.md) |  | [optional] 
**location_id** | **str** | Deprecated. This field has no effect. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_deidentify_content_request import GooglePrivacyDlpV2DeidentifyContentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DeidentifyContentRequest from a JSON string
google_privacy_dlp_v2_deidentify_content_request_instance = GooglePrivacyDlpV2DeidentifyContentRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DeidentifyContentRequest.to_json())

# convert the object into a dict
google_privacy_dlp_v2_deidentify_content_request_dict = google_privacy_dlp_v2_deidentify_content_request_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DeidentifyContentRequest from a dict
google_privacy_dlp_v2_deidentify_content_request_from_dict = GooglePrivacyDlpV2DeidentifyContentRequest.from_dict(google_privacy_dlp_v2_deidentify_content_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


