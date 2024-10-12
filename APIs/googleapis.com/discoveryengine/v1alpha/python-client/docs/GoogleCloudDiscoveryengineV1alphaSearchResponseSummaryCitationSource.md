# GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryCitationSource

Citation source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reference_index** | **str** | Document reference index from SummaryWithMetadata.references. It is 0-indexed and the value will be zero if the reference_index is not set explicitly. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_search_response_summary_citation_source import GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryCitationSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryCitationSource from a JSON string
google_cloud_discoveryengine_v1alpha_search_response_summary_citation_source_instance = GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryCitationSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryCitationSource.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_search_response_summary_citation_source_dict = google_cloud_discoveryengine_v1alpha_search_response_summary_citation_source_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryCitationSource from a dict
google_cloud_discoveryengine_v1alpha_search_response_summary_citation_source_from_dict = GoogleCloudDiscoveryengineV1alphaSearchResponseSummaryCitationSource.from_dict(google_cloud_discoveryengine_v1alpha_search_response_summary_citation_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


