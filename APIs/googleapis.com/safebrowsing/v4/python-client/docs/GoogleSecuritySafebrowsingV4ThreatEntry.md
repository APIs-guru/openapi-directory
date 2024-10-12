# GoogleSecuritySafebrowsingV4ThreatEntry

An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **bytearray** | The digest of an executable in SHA256 format. The API supports both binary and hex digests. For JSON requests, digests are base64-encoded. | [optional] 
**hash** | **bytearray** | A hash prefix, consisting of the most significant 4-32 bytes of a SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded. | [optional] 
**url** | **str** | A URL. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_threat_entry import GoogleSecuritySafebrowsingV4ThreatEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4ThreatEntry from a JSON string
google_security_safebrowsing_v4_threat_entry_instance = GoogleSecuritySafebrowsingV4ThreatEntry.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4ThreatEntry.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_threat_entry_dict = google_security_safebrowsing_v4_threat_entry_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4ThreatEntry from a dict
google_security_safebrowsing_v4_threat_entry_from_dict = GoogleSecuritySafebrowsingV4ThreatEntry.from_dict(google_security_safebrowsing_v4_threat_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


