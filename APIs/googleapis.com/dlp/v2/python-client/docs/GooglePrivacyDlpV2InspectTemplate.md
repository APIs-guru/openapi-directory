# GooglePrivacyDlpV2InspectTemplate

The inspectTemplate contains a configuration (set of types of sensitive data to be detected) to be used anywhere you otherwise would normally specify InspectConfig. See https://cloud.google.com/sensitive-data-protection/docs/concepts-templates to learn more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The creation timestamp of an inspectTemplate. | [optional] [readonly] 
**description** | **str** | Short description (max 256 chars). | [optional] 
**display_name** | **str** | Display name (max 256 chars). | [optional] 
**inspect_config** | [**GooglePrivacyDlpV2InspectConfig**](GooglePrivacyDlpV2InspectConfig.md) |  | [optional] 
**name** | **str** | Output only. The template name. The template will have one of the following formats: &#x60;projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID&#x60; OR &#x60;organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID&#x60;; | [optional] [readonly] 
**update_time** | **str** | Output only. The last update timestamp of an inspectTemplate. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_inspect_template import GooglePrivacyDlpV2InspectTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InspectTemplate from a JSON string
google_privacy_dlp_v2_inspect_template_instance = GooglePrivacyDlpV2InspectTemplate.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InspectTemplate.to_json())

# convert the object into a dict
google_privacy_dlp_v2_inspect_template_dict = google_privacy_dlp_v2_inspect_template_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InspectTemplate from a dict
google_privacy_dlp_v2_inspect_template_from_dict = GooglePrivacyDlpV2InspectTemplate.from_dict(google_privacy_dlp_v2_inspect_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


