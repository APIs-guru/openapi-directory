# GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequestInlineSource

The inline source for SuggestionDenyListEntry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[GoogleCloudDiscoveryengineV1alphaSuggestionDenyListEntry]**](GoogleCloudDiscoveryengineV1alphaSuggestionDenyListEntry.md) | Required. A list of all denylist entries to import. Max of 1000 items. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_import_suggestion_deny_list_entries_request_inline_source import GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequestInlineSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequestInlineSource from a JSON string
google_cloud_discoveryengine_v1alpha_import_suggestion_deny_list_entries_request_inline_source_instance = GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequestInlineSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequestInlineSource.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_import_suggestion_deny_list_entries_request_inline_source_dict = google_cloud_discoveryengine_v1alpha_import_suggestion_deny_list_entries_request_inline_source_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequestInlineSource from a dict
google_cloud_discoveryengine_v1alpha_import_suggestion_deny_list_entries_request_inline_source_from_dict = GoogleCloudDiscoveryengineV1alphaImportSuggestionDenyListEntriesRequestInlineSource.from_dict(google_cloud_discoveryengine_v1alpha_import_suggestion_deny_list_entries_request_inline_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


