# GoogleCloudDiscoveryengineV1betaSearchResponseSummary

Summary of the top N search result specified by the summary spec.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**safety_attributes** | [**GoogleCloudDiscoveryengineV1betaSearchResponseSummarySafetyAttributes**](GoogleCloudDiscoveryengineV1betaSearchResponseSummarySafetyAttributes.md) |  | [optional] 
**summary_skipped_reasons** | **List[str]** | Additional summary-skipped reasons. This provides the reason for ignored cases. If nothing is skipped, this field is not set. | [optional] 
**summary_text** | **str** | The summary content. | [optional] 
**summary_with_metadata** | [**GoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadata**](GoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_search_response_summary import GoogleCloudDiscoveryengineV1betaSearchResponseSummary

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseSummary from a JSON string
google_cloud_discoveryengine_v1beta_search_response_summary_instance = GoogleCloudDiscoveryengineV1betaSearchResponseSummary.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSearchResponseSummary.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_search_response_summary_dict = google_cloud_discoveryengine_v1beta_search_response_summary_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseSummary from a dict
google_cloud_discoveryengine_v1beta_search_response_summary_from_dict = GoogleCloudDiscoveryengineV1betaSearchResponseSummary.from_dict(google_cloud_discoveryengine_v1beta_search_response_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


