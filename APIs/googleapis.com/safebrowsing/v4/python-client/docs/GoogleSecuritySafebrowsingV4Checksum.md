# GoogleSecuritySafebrowsingV4Checksum

The expected state of a client's local database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sha256** | **bytearray** | The SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_checksum import GoogleSecuritySafebrowsingV4Checksum

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4Checksum from a JSON string
google_security_safebrowsing_v4_checksum_instance = GoogleSecuritySafebrowsingV4Checksum.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4Checksum.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_checksum_dict = google_security_safebrowsing_v4_checksum_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4Checksum from a dict
google_security_safebrowsing_v4_checksum_from_dict = GoogleSecuritySafebrowsingV4Checksum.from_dict(google_security_safebrowsing_v4_checksum_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


