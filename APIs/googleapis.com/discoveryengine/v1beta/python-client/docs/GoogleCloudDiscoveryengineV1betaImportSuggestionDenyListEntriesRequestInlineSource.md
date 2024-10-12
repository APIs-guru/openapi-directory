# GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestInlineSource

The inline source for SuggestionDenyListEntry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntry]**](GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntry.md) | Required. A list of all denylist entries to import. Max of 1000 items. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_import_suggestion_deny_list_entries_request_inline_source import GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestInlineSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestInlineSource from a JSON string
google_cloud_discoveryengine_v1beta_import_suggestion_deny_list_entries_request_inline_source_instance = GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestInlineSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestInlineSource.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_import_suggestion_deny_list_entries_request_inline_source_dict = google_cloud_discoveryengine_v1beta_import_suggestion_deny_list_entries_request_inline_source_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestInlineSource from a dict
google_cloud_discoveryengine_v1beta_import_suggestion_deny_list_entries_request_inline_source_from_dict = GoogleCloudDiscoveryengineV1betaImportSuggestionDenyListEntriesRequestInlineSource.from_dict(google_cloud_discoveryengine_v1beta_import_suggestion_deny_list_entries_request_inline_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


