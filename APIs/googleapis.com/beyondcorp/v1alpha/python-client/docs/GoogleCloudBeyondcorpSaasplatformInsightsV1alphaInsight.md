# GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight

The Insight object with configuration that was returned and actual list of records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_config** | [**GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig**](GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig.md) |  | [optional] 
**metadata** | [**GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata**](GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsightMetadata.md) |  | [optional] 
**name** | **str** | Output only. The insight resource name. e.g. &#x60;organizations/{organization_id}/locations/{location_id}/insights/{insight_id}&#x60; OR &#x60;projects/{project_id}/locations/{location_id}/insights/{insight_id}&#x60;. | [optional] [readonly] 
**rows** | [**List[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow]**](GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow.md) | Output only. Result rows returned containing the required value(s). | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight import GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight from a JSON string
google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_instance = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight.to_json())

# convert the object into a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_dict = google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight from a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_from_dict = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight.from_dict(google_cloud_beyondcorp_saasplatform_insights_v1alpha_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


