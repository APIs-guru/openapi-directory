# GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata

Insight filters, groupings and aggregations that can be applied for the insight. Examples: aggregations, groups, field filters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregations** | **List[str]** | Output only. List of aggregation types available for insight. | [optional] [readonly] 
**category** | **str** | Output only. Category of the insight. | [optional] [readonly] 
**display_name** | **str** | Output only. Common name of the insight. | [optional] [readonly] 
**fields** | [**List[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField]**](GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadataField.md) | Output only. List of fields available for insight. | [optional] [readonly] 
**groups** | **List[str]** | Output only. List of groupings available for insight. | [optional] [readonly] 
**sub_category** | **str** | Output only. Sub-Category of the insight. | [optional] [readonly] 
**type** | **str** | Output only. Type of the insight. It is metadata describing whether the insight is a metric (e.g. count) or a report (e.g. list, status). | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_metadata import GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata from a JSON string
google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_metadata_instance = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata.to_json())

# convert the object into a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_metadata_dict = google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_metadata_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata from a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_metadata_from_dict = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata.from_dict(google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


