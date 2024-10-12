# GoogleCloudDiscoveryengineV1betaCompleteQueryResponse

Response message for CompletionService.CompleteQuery method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_suggestions** | [**List[GoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestion]**](GoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestion.md) | Results of the matched query suggestions. The result list is ordered and the first result is a top suggestion. | [optional] 
**tail_match_triggered** | **bool** | True if the returned suggestions are all tail suggestions. For tail matching to be triggered, include_tail_suggestions in the request must be true and there must be no suggestions that match the full query. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_complete_query_response import GoogleCloudDiscoveryengineV1betaCompleteQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaCompleteQueryResponse from a JSON string
google_cloud_discoveryengine_v1beta_complete_query_response_instance = GoogleCloudDiscoveryengineV1betaCompleteQueryResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaCompleteQueryResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_complete_query_response_dict = google_cloud_discoveryengine_v1beta_complete_query_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaCompleteQueryResponse from a dict
google_cloud_discoveryengine_v1beta_complete_query_response_from_dict = GoogleCloudDiscoveryengineV1betaCompleteQueryResponse.from_dict(google_cloud_discoveryengine_v1beta_complete_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


