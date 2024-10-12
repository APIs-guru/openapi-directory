# GoogleCloudWebriskV1ThreatEntryAdditions

Contains the set of entries to add to a local database. May contain a combination of compressed and raw data in a single response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**raw_hashes** | [**List[GoogleCloudWebriskV1RawHashes]**](GoogleCloudWebriskV1RawHashes.md) | The raw SHA256-formatted entries. Repeated to allow returning sets of hashes with different prefix sizes. | [optional] 
**rice_hashes** | [**GoogleCloudWebriskV1RiceDeltaEncoding**](GoogleCloudWebriskV1RiceDeltaEncoding.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_webrisk_v1_threat_entry_additions import GoogleCloudWebriskV1ThreatEntryAdditions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudWebriskV1ThreatEntryAdditions from a JSON string
google_cloud_webrisk_v1_threat_entry_additions_instance = GoogleCloudWebriskV1ThreatEntryAdditions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudWebriskV1ThreatEntryAdditions.to_json())

# convert the object into a dict
google_cloud_webrisk_v1_threat_entry_additions_dict = google_cloud_webrisk_v1_threat_entry_additions_instance.to_dict()
# create an instance of GoogleCloudWebriskV1ThreatEntryAdditions from a dict
google_cloud_webrisk_v1_threat_entry_additions_from_dict = GoogleCloudWebriskV1ThreatEntryAdditions.from_dict(google_cloud_webrisk_v1_threat_entry_additions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


