# GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum

The expected state of a client's local database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sha256** | **bytearray** | The SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_webrisk_v1_compute_threat_list_diff_response_checksum import GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum from a JSON string
google_cloud_webrisk_v1_compute_threat_list_diff_response_checksum_instance = GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum.to_json())

# convert the object into a dict
google_cloud_webrisk_v1_compute_threat_list_diff_response_checksum_dict = google_cloud_webrisk_v1_compute_threat_list_diff_response_checksum_instance.to_dict()
# create an instance of GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum from a dict
google_cloud_webrisk_v1_compute_threat_list_diff_response_checksum_from_dict = GoogleCloudWebriskV1ComputeThreatListDiffResponseChecksum.from_dict(google_cloud_webrisk_v1_compute_threat_list_diff_response_checksum_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


