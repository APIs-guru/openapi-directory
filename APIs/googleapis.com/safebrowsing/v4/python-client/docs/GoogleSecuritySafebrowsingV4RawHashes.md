# GoogleSecuritySafebrowsingV4RawHashes

The uncompressed threat entries in hash format of a particular prefix length. Hashes can be anywhere from 4 to 32 bytes in size. A large majority are 4 bytes, but some hashes are lengthened if they collide with the hash of a popular URL. Used for sending ThreatEntrySet to clients that do not support compression, or when sending non-4-byte hashes to clients that do support compression.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prefix_size** | **int** | The number of bytes for each prefix encoded below. This field can be anywhere from 4 (shortest prefix) to 32 (full SHA256 hash). | [optional] 
**raw_hashes** | **bytearray** | The hashes, in binary format, concatenated into one long string. Hashes are sorted in lexicographic order. For JSON API users, hashes are base64-encoded. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_raw_hashes import GoogleSecuritySafebrowsingV4RawHashes

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4RawHashes from a JSON string
google_security_safebrowsing_v4_raw_hashes_instance = GoogleSecuritySafebrowsingV4RawHashes.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4RawHashes.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_raw_hashes_dict = google_security_safebrowsing_v4_raw_hashes_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4RawHashes from a dict
google_security_safebrowsing_v4_raw_hashes_from_dict = GoogleSecuritySafebrowsingV4RawHashes.from_dict(google_security_safebrowsing_v4_raw_hashes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


