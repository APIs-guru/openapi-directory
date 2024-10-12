# GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequest

Request message for CompletionService.ImportSuggestionDenyListEntries method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**GoogleCloudDiscoveryengineV1alphaGcsSource**](GoogleCloudDiscoveryengineV1alphaGcsSource.md) |  | [optional] 
**inline_source** | [**GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequestInlineSource**](GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequestInlineSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_import_suggestion_deny_list_entries_request import GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequest from a JSON string
google_cloud_discoveryengine_v1alpha_import_suggestion_deny_list_entries_request_instance = GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_import_suggestion_deny_list_entries_request_dict = google_cloud_discoveryengine_v1alpha_import_suggestion_deny_list_entries_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequest from a dict
google_cloud_discoveryengine_v1alpha_import_suggestion_deny_list_entries_request_from_dict = GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequest.from_dict(google_cloud_discoveryengine_v1alpha_import_suggestion_deny_list_entries_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


