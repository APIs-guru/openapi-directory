# GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry

A single metadata entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **bytearray** | The metadata entry key. For JSON requests, the key is base64-encoded. | [optional] 
**value** | **bytearray** | The metadata entry value. For JSON requests, the value is base64-encoded. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_threat_entry_metadata_metadata_entry import GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry from a JSON string
google_security_safebrowsing_v4_threat_entry_metadata_metadata_entry_instance = GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_threat_entry_metadata_metadata_entry_dict = google_security_safebrowsing_v4_threat_entry_metadata_metadata_entry_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry from a dict
google_security_safebrowsing_v4_threat_entry_metadata_metadata_entry_from_dict = GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry.from_dict(google_security_safebrowsing_v4_threat_entry_metadata_metadata_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


