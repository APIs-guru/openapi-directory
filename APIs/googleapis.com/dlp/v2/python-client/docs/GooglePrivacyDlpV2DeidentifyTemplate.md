# GooglePrivacyDlpV2DeidentifyTemplate

DeidentifyTemplates contains instructions on how to de-identify content. See https://cloud.google.com/sensitive-data-protection/docs/concepts-templates to learn more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The creation timestamp of an inspectTemplate. | [optional] [readonly] 
**deidentify_config** | [**GooglePrivacyDlpV2DeidentifyConfig**](GooglePrivacyDlpV2DeidentifyConfig.md) |  | [optional] 
**description** | **str** | Short description (max 256 chars). | [optional] 
**display_name** | **str** | Display name (max 256 chars). | [optional] 
**name** | **str** | Output only. The template name. The template will have one of the following formats: &#x60;projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID&#x60; OR &#x60;organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID&#x60; | [optional] [readonly] 
**update_time** | **str** | Output only. The last update timestamp of an inspectTemplate. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_deidentify_template import GooglePrivacyDlpV2DeidentifyTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DeidentifyTemplate from a JSON string
google_privacy_dlp_v2_deidentify_template_instance = GooglePrivacyDlpV2DeidentifyTemplate.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DeidentifyTemplate.to_json())

# convert the object into a dict
google_privacy_dlp_v2_deidentify_template_dict = google_privacy_dlp_v2_deidentify_template_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DeidentifyTemplate from a dict
google_privacy_dlp_v2_deidentify_template_from_dict = GooglePrivacyDlpV2DeidentifyTemplate.from_dict(google_privacy_dlp_v2_deidentify_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


