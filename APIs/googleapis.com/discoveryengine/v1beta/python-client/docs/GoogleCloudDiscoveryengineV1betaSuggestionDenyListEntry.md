# GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntry

Suggestion deny list entry identifying the phrase to block from suggestions and the applied operation for the phrase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**block_phrase** | **str** | Required. Phrase to block from suggestions served. Can be maximum 125 characters. | [optional] 
**match_operator** | **str** | Required. The match operator to apply for this phrase. Whether to block the exact phrase, or block any suggestions containing this phrase. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_suggestion_deny_list_entry import GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntry from a JSON string
google_cloud_discoveryengine_v1beta_suggestion_deny_list_entry_instance = GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntry.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntry.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_suggestion_deny_list_entry_dict = google_cloud_discoveryengine_v1beta_suggestion_deny_list_entry_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntry from a dict
google_cloud_discoveryengine_v1beta_suggestion_deny_list_entry_from_dict = GoogleCloudDiscoveryengineV1betaSuggestionDenyListEntry.from_dict(google_cloud_discoveryengine_v1beta_suggestion_deny_list_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


