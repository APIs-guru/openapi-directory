# GoogleCloudContactcenterinsightsV1alpha1RedactionConfig

DLP resources used for redaction while ingesting conversations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deidentify_template** | **str** | The fully-qualified DLP deidentify template resource name. Format: &#x60;projects/{project}/deidentifyTemplates/{template}&#x60; | [optional] 
**inspect_template** | **str** | The fully-qualified DLP inspect template resource name. Format: &#x60;projects/{project}/locations/{location}/inspectTemplates/{template}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_redaction_config import GoogleCloudContactcenterinsightsV1alpha1RedactionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1RedactionConfig from a JSON string
google_cloud_contactcenterinsights_v1alpha1_redaction_config_instance = GoogleCloudContactcenterinsightsV1alpha1RedactionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1RedactionConfig.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_redaction_config_dict = google_cloud_contactcenterinsights_v1alpha1_redaction_config_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1RedactionConfig from a dict
google_cloud_contactcenterinsights_v1alpha1_redaction_config_from_dict = GoogleCloudContactcenterinsightsV1alpha1RedactionConfig.from_dict(google_cloud_contactcenterinsights_v1alpha1_redaction_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


