# GoogleCloudDiscoveryengineV1betaSearchResponseSearchResult

Represents the search results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**GoogleCloudDiscoveryengineV1betaDocument**](GoogleCloudDiscoveryengineV1betaDocument.md) |  | [optional] 
**id** | **str** | Document.id of the searched Document. | [optional] 
**model_scores** | [**Dict[str, GoogleCloudDiscoveryengineV1betaDoubleList]**](GoogleCloudDiscoveryengineV1betaDoubleList.md) | Google provided available scores. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_search_response_search_result import GoogleCloudDiscoveryengineV1betaSearchResponseSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseSearchResult from a JSON string
google_cloud_discoveryengine_v1beta_search_response_search_result_instance = GoogleCloudDiscoveryengineV1betaSearchResponseSearchResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSearchResponseSearchResult.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_search_response_search_result_dict = google_cloud_discoveryengine_v1beta_search_response_search_result_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSearchResponseSearchResult from a dict
google_cloud_discoveryengine_v1beta_search_response_search_result_from_dict = GoogleCloudDiscoveryengineV1betaSearchResponseSearchResult.from_dict(google_cloud_discoveryengine_v1beta_search_response_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


