# GooglePrivacyDlpV2Key

A unique identifier for a Datastore entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | [**GooglePrivacyDlpV2PartitionId**](GooglePrivacyDlpV2PartitionId.md) |  | [optional] 
**path** | [**List[GooglePrivacyDlpV2PathElement]**](GooglePrivacyDlpV2PathElement.md) | The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a _root entity_, the second element identifies a _child_ of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element&#39;s _ancestors_. A path can never be empty, and a path can have at most 100 elements. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_key import GooglePrivacyDlpV2Key

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Key from a JSON string
google_privacy_dlp_v2_key_instance = GooglePrivacyDlpV2Key.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Key.to_json())

# convert the object into a dict
google_privacy_dlp_v2_key_dict = google_privacy_dlp_v2_key_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Key from a dict
google_privacy_dlp_v2_key_from_dict = GooglePrivacyDlpV2Key.from_dict(google_privacy_dlp_v2_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


