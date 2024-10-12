# GoogleCloudWebriskV1SearchHashesResponseThreatHash

Contains threat information on a matching hash.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_time** | **str** | The cache lifetime for the returned match. Clients must not cache this response past this timestamp to avoid false positives. | [optional] 
**hash** | **bytearray** | A 32 byte SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded. | [optional] 
**threat_types** | **List[str]** | The ThreatList this threat belongs to. This must contain at least one entry. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_webrisk_v1_search_hashes_response_threat_hash import GoogleCloudWebriskV1SearchHashesResponseThreatHash

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudWebriskV1SearchHashesResponseThreatHash from a JSON string
google_cloud_webrisk_v1_search_hashes_response_threat_hash_instance = GoogleCloudWebriskV1SearchHashesResponseThreatHash.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudWebriskV1SearchHashesResponseThreatHash.to_json())

# convert the object into a dict
google_cloud_webrisk_v1_search_hashes_response_threat_hash_dict = google_cloud_webrisk_v1_search_hashes_response_threat_hash_instance.to_dict()
# create an instance of GoogleCloudWebriskV1SearchHashesResponseThreatHash from a dict
google_cloud_webrisk_v1_search_hashes_response_threat_hash_from_dict = GoogleCloudWebriskV1SearchHashesResponseThreatHash.from_dict(google_cloud_webrisk_v1_search_hashes_response_threat_hash_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


