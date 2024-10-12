# GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesMetadata

Metadata related to the progress of the PurgeSuggestionDenyListEntries operation. This is returned by the google.longrunning.Operation.metadata field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Operation create time. | [optional] 
**update_time** | **str** | Operation last update time. If the operation is done, this is also the finish time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_purge_suggestion_deny_list_entries_metadata import GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesMetadata from a JSON string
google_cloud_discoveryengine_v1beta_purge_suggestion_deny_list_entries_metadata_instance = GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesMetadata.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_purge_suggestion_deny_list_entries_metadata_dict = google_cloud_discoveryengine_v1beta_purge_suggestion_deny_list_entries_metadata_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesMetadata from a dict
google_cloud_discoveryengine_v1beta_purge_suggestion_deny_list_entries_metadata_from_dict = GoogleCloudDiscoveryengineV1betaPurgeSuggestionDenyListEntriesMetadata.from_dict(google_cloud_discoveryengine_v1beta_purge_suggestion_deny_list_entries_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


