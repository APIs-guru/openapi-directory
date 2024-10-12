# GoogleSecuritySafebrowsingV5FullHash

The full hash identified with one or more matches.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_hash** | **bytearray** | The matching full hash. This is the SHA256 hash. The length will be exactly 32 bytes. | [optional] 
**full_hash_details** | [**List[GoogleSecuritySafebrowsingV5FullHashFullHashDetail]**](GoogleSecuritySafebrowsingV5FullHashFullHashDetail.md) | Unordered list. A repeated field identifying the details relevant to this full hash. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v5_full_hash import GoogleSecuritySafebrowsingV5FullHash

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV5FullHash from a JSON string
google_security_safebrowsing_v5_full_hash_instance = GoogleSecuritySafebrowsingV5FullHash.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV5FullHash.to_json())

# convert the object into a dict
google_security_safebrowsing_v5_full_hash_dict = google_security_safebrowsing_v5_full_hash_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV5FullHash from a dict
google_security_safebrowsing_v5_full_hash_from_dict = GoogleSecuritySafebrowsingV5FullHash.from_dict(google_security_safebrowsing_v5_full_hash_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


