# GoogleSecuritySafebrowsingV4ThreatEntrySet

A set of threats that should be added or removed from a client's local database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compression_type** | **str** | The compression type for the entries in this set. | [optional] 
**raw_hashes** | [**GoogleSecuritySafebrowsingV4RawHashes**](GoogleSecuritySafebrowsingV4RawHashes.md) |  | [optional] 
**raw_indices** | [**GoogleSecuritySafebrowsingV4RawIndices**](GoogleSecuritySafebrowsingV4RawIndices.md) |  | [optional] 
**rice_hashes** | [**GoogleSecuritySafebrowsingV4RiceDeltaEncoding**](GoogleSecuritySafebrowsingV4RiceDeltaEncoding.md) |  | [optional] 
**rice_indices** | [**GoogleSecuritySafebrowsingV4RiceDeltaEncoding**](GoogleSecuritySafebrowsingV4RiceDeltaEncoding.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_threat_entry_set import GoogleSecuritySafebrowsingV4ThreatEntrySet

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4ThreatEntrySet from a JSON string
google_security_safebrowsing_v4_threat_entry_set_instance = GoogleSecuritySafebrowsingV4ThreatEntrySet.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4ThreatEntrySet.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_threat_entry_set_dict = google_security_safebrowsing_v4_threat_entry_set_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4ThreatEntrySet from a dict
google_security_safebrowsing_v4_threat_entry_set_from_dict = GoogleSecuritySafebrowsingV4ThreatEntrySet.from_dict(google_security_safebrowsing_v4_threat_entry_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


