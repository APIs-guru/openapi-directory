# GoogleCloudDiscoveryengineV1alphaSearchResponseSummary

Summary of the top N search result specified by the summary spec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**safety_attributes** | [**GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySafetyAttributes**](GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySafetyAttributes.md) |  | [optional] 
**summary_skipped_reasons** | **List[str]** | Additional summary-skipped reasons. This provides the reason for ignored cases. If nothing is skipped, this field is not set. | [optional] 
**summary_text** | **str** | The summary content. | [optional] 
**summary_with_metadata** | [**GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySummaryWithMetadata**](GoogleCloudDiscoveryengineV1alphaSearchResponseSummarySummaryWithMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_search_response_summary import GoogleCloudDiscoveryengineV1alphaSearchResponseSummary

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchResponseSummary from a JSON string
google_cloud_discoveryengine_v1alpha_search_response_summary_instance = GoogleCloudDiscoveryengineV1alphaSearchResponseSummary.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSearchResponseSummary.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_search_response_summary_dict = google_cloud_discoveryengine_v1alpha_search_response_summary_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchResponseSummary from a dict
google_cloud_discoveryengine_v1alpha_search_response_summary_from_dict = GoogleCloudDiscoveryengineV1alphaSearchResponseSummary.from_dict(google_cloud_discoveryengine_v1alpha_search_response_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


