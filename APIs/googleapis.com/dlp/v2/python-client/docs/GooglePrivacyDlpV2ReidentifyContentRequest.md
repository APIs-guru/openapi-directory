# GooglePrivacyDlpV2ReidentifyContentRequest

Request to re-identify an item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inspect_config** | [**GooglePrivacyDlpV2InspectConfig**](GooglePrivacyDlpV2InspectConfig.md) |  | [optional] 
**inspect_template_name** | **str** | Template to use. Any configuration directly specified in &#x60;inspect_config&#x60; will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. | [optional] 
**item** | [**GooglePrivacyDlpV2ContentItem**](GooglePrivacyDlpV2ContentItem.md) |  | [optional] 
**location_id** | **str** | Deprecated. This field has no effect. | [optional] 
**reidentify_config** | [**GooglePrivacyDlpV2DeidentifyConfig**](GooglePrivacyDlpV2DeidentifyConfig.md) |  | [optional] 
**reidentify_template_name** | **str** | Template to use. References an instance of &#x60;DeidentifyTemplate&#x60;. Any configuration directly specified in &#x60;reidentify_config&#x60; or &#x60;inspect_config&#x60; will override those set in the template. The &#x60;DeidentifyTemplate&#x60; used must include only reversible transformations. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_reidentify_content_request import GooglePrivacyDlpV2ReidentifyContentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ReidentifyContentRequest from a JSON string
google_privacy_dlp_v2_reidentify_content_request_instance = GooglePrivacyDlpV2ReidentifyContentRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ReidentifyContentRequest.to_json())

# convert the object into a dict
google_privacy_dlp_v2_reidentify_content_request_dict = google_privacy_dlp_v2_reidentify_content_request_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ReidentifyContentRequest from a dict
google_privacy_dlp_v2_reidentify_content_request_from_dict = GooglePrivacyDlpV2ReidentifyContentRequest.from_dict(google_privacy_dlp_v2_reidentify_content_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


