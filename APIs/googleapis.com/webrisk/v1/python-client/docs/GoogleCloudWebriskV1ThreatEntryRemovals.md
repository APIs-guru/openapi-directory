# GoogleCloudWebriskV1ThreatEntryRemovals

Contains the set of entries to remove from a local database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**raw_indices** | [**GoogleCloudWebriskV1RawIndices**](GoogleCloudWebriskV1RawIndices.md) |  | [optional] 
**rice_indices** | [**GoogleCloudWebriskV1RiceDeltaEncoding**](GoogleCloudWebriskV1RiceDeltaEncoding.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_webrisk_v1_threat_entry_removals import GoogleCloudWebriskV1ThreatEntryRemovals

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudWebriskV1ThreatEntryRemovals from a JSON string
google_cloud_webrisk_v1_threat_entry_removals_instance = GoogleCloudWebriskV1ThreatEntryRemovals.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudWebriskV1ThreatEntryRemovals.to_json())

# convert the object into a dict
google_cloud_webrisk_v1_threat_entry_removals_dict = google_cloud_webrisk_v1_threat_entry_removals_instance.to_dict()
# create an instance of GoogleCloudWebriskV1ThreatEntryRemovals from a dict
google_cloud_webrisk_v1_threat_entry_removals_from_dict = GoogleCloudWebriskV1ThreatEntryRemovals.from_dict(google_cloud_webrisk_v1_threat_entry_removals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


