# GoogleSecuritySafebrowsingV4ThreatEntryMetadata

The metadata associated with a specific threat entry. The client is expected to know the metadata key/value pairs associated with each threat type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry]**](GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry.md) | The metadata entries. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_threat_entry_metadata import GoogleSecuritySafebrowsingV4ThreatEntryMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4ThreatEntryMetadata from a JSON string
google_security_safebrowsing_v4_threat_entry_metadata_instance = GoogleSecuritySafebrowsingV4ThreatEntryMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4ThreatEntryMetadata.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_threat_entry_metadata_dict = google_security_safebrowsing_v4_threat_entry_metadata_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4ThreatEntryMetadata from a dict
google_security_safebrowsing_v4_threat_entry_metadata_from_dict = GoogleSecuritySafebrowsingV4ThreatEntryMetadata.from_dict(google_security_safebrowsing_v4_threat_entry_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


