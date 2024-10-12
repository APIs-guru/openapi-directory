# GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse

The response for the configured insight.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_config** | [**GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig**](GoogleCloudBeyondcorpSaasplatformInsightsV1alphaAppliedConfig.md) |  | [optional] 
**next_page_token** | **str** | Output only. Next page token to be fetched. Set to empty or NULL if there are no more pages available. | [optional] [readonly] 
**rows** | [**List[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow]**](GoogleCloudBeyondcorpSaasplatformInsightsV1alphaRow.md) | Output only. Result rows returned containing the required value(s) for configured insight. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_saasplatform_insights_v1alpha_configured_insight_response import GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse from a JSON string
google_cloud_beyondcorp_saasplatform_insights_v1alpha_configured_insight_response_instance = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse.to_json())

# convert the object into a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_configured_insight_response_dict = google_cloud_beyondcorp_saasplatform_insights_v1alpha_configured_insight_response_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse from a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_configured_insight_response_from_dict = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaConfiguredInsightResponse.from_dict(google_cloud_beyondcorp_saasplatform_insights_v1alpha_configured_insight_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


