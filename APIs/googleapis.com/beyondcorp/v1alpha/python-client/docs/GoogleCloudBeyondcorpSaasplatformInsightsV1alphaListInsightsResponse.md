# GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse

The response for the list of insights.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insights** | [**List[GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight]**](GoogleCloudBeyondcorpSaasplatformInsightsV1alphaInsight.md) | Output only. List of all insights. | [optional] [readonly] 
**next_page_token** | **str** | Output only. Next page token to be fetched. Set to empty or NULL if there are no more pages available. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_saasplatform_insights_v1alpha_list_insights_response import GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse from a JSON string
google_cloud_beyondcorp_saasplatform_insights_v1alpha_list_insights_response_instance = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse.to_json())

# convert the object into a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_list_insights_response_dict = google_cloud_beyondcorp_saasplatform_insights_v1alpha_list_insights_response_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse from a dict
google_cloud_beyondcorp_saasplatform_insights_v1alpha_list_insights_response_from_dict = GoogleCloudBeyondcorpSaasplatformInsightsV1alphaListInsightsResponse.from_dict(google_cloud_beyondcorp_saasplatform_insights_v1alpha_list_insights_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


