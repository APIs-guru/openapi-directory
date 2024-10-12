# GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesResponse

Response message for CompletionService.PurgeSuggestionDenyListEntries method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_samples** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | A sample of errors encountered while processing the request. | [optional] 
**purge_count** | **str** | Number of suggestion deny list entries purged. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_purge_suggestion_deny_list_entries_response import GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesResponse from a JSON string
google_cloud_discoveryengine_v1beta_purge_suggestion_deny_list_entries_response_instance = GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_purge_suggestion_deny_list_entries_response_dict = google_cloud_discoveryengine_v1beta_purge_suggestion_deny_list_entries_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesResponse from a dict
google_cloud_discoveryengine_v1beta_purge_suggestion_deny_list_entries_response_from_dict = GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesResponse.from_dict(google_cloud_discoveryengine_v1beta_purge_suggestion_deny_list_entries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


