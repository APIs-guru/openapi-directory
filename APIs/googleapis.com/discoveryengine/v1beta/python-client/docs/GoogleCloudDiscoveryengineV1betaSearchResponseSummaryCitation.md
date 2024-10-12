# GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitation

Citation info for a segment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **str** | End of the attributed segment, exclusive. | [optional] 
**sources** | [**List[GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationSource]**](GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitationSource.md) | Citation sources for the attributed segment. | [optional] 
**start_index** | **str** | Index indicates the start of the segment, measured in bytes/unicode. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_search_response_summary_citation import GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitation from a JSON string
google_cloud_discoveryengine_v1beta_search_response_summary_citation_instance = GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitation.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_search_response_summary_citation_dict = google_cloud_discoveryengine_v1beta_search_response_summary_citation_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitation from a dict
google_cloud_discoveryengine_v1beta_search_response_summary_citation_from_dict = GoogleCloudDiscoveryengineV1betaSearchResponseSummaryCitation.from_dict(google_cloud_discoveryengine_v1beta_search_response_summary_citation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


