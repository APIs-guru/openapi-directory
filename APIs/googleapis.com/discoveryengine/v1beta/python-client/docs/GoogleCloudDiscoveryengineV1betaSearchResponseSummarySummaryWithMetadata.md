# GoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadata

Summary with metadata information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**citation_metadata** | [**GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationMetadata**](GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationMetadata.md) |  | [optional] 
**references** | [**List[GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReference]**](GoogleCloudDiscoveryengineV1betaSearchResponseSummaryReference.md) | Document References. | [optional] 
**summary** | **str** | Summary text with no citation information. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_search_response_summary_summary_with_metadata import GoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadata from a JSON string
google_cloud_discoveryengine_v1beta_search_response_summary_summary_with_metadata_instance = GoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadata.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_search_response_summary_summary_with_metadata_dict = google_cloud_discoveryengine_v1beta_search_response_summary_summary_with_metadata_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadata from a dict
google_cloud_discoveryengine_v1beta_search_response_summary_summary_with_metadata_from_dict = GoogleCloudDiscoveryengineV1betaSearchResponseSummarySummaryWithMetadata.from_dict(google_cloud_discoveryengine_v1beta_search_response_summary_summary_with_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


