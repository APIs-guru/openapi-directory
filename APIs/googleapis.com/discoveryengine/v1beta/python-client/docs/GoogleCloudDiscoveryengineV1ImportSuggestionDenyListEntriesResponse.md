# GoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesResponse

Response message for CompletionService.ImportSuggestionDenyListEntries method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_samples** | [**List[GoogleRpcStatus]**](GoogleRpcStatus.md) | A sample of errors encountered while processing the request. | [optional] 
**failed_entries_count** | **str** | Count of deny list entries that failed to be imported. | [optional] 
**imported_entries_count** | **str** | Count of deny list entries successfully imported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1_import_suggestion_deny_list_entries_response import GoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesResponse from a JSON string
google_cloud_discoveryengine_v1_import_suggestion_deny_list_entries_response_instance = GoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1_import_suggestion_deny_list_entries_response_dict = google_cloud_discoveryengine_v1_import_suggestion_deny_list_entries_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesResponse from a dict
google_cloud_discoveryengine_v1_import_suggestion_deny_list_entries_response_from_dict = GoogleCloudDiscoveryengineV1ImportSuggestionDenyListEntriesResponse.from_dict(google_cloud_discoveryengine_v1_import_suggestion_deny_list_entries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


