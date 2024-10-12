# GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField

Field metadata. Commonly understandable name and description for the field. Multiple such fields constitute the Insight.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Output only. Description of the field. | [optional] [readonly] 
**display_name** | **str** | Output only. Name of the field. | [optional] [readonly] 
**filter_alias** | **str** | Output only. Field name to be used in filter while requesting configured insight filtered on this field. | [optional] [readonly] 
**filterable** | **bool** | Output only. Indicates whether the field can be used for filtering. | [optional] [readonly] 
**groupable** | **bool** | Output only. Indicates whether the field can be used for grouping in custom grouping request. | [optional] [readonly] 
**id** | **str** | Output only. Field id for which this is the metadata. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_metadata_field import GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField from a JSON string
google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_metadata_field_instance = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField.to_json())

# convert the object into a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_metadata_field_dict = google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_metadata_field_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField from a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_metadata_field_from_dict = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField.from_dict(google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_metadata_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


