# GoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestion

Suggestions as search queries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completable_field_paths** | **List[str]** | The unique document field paths that serve as the source of this suggestion if it was generated from completable fields. This field is only populated for the document-completable model. | [optional] 
**suggestion** | **str** | The suggestion for the query. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_complete_query_response_query_suggestion import GoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestion from a JSON string
google_cloud_discoveryengine_v1beta_complete_query_response_query_suggestion_instance = GoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestion.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestion.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_complete_query_response_query_suggestion_dict = google_cloud_discoveryengine_v1beta_complete_query_response_query_suggestion_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestion from a dict
google_cloud_discoveryengine_v1beta_complete_query_response_query_suggestion_from_dict = GoogleCloudDiscoveryengineV1betaCompleteQueryResponseQuerySuggestion.from_dict(google_cloud_discoveryengine_v1beta_complete_query_response_query_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


