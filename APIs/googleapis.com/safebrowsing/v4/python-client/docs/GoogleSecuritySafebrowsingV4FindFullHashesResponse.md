# GoogleSecuritySafebrowsingV4FindFullHashesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matches** | [**List[GoogleSecuritySafebrowsingV4ThreatMatch]**](GoogleSecuritySafebrowsingV4ThreatMatch.md) | The full hashes that matched the requested prefixes. | [optional] 
**minimum_wait_duration** | **str** | The minimum duration the client must wait before issuing any find hashes request. If this field is not set, clients can issue a request as soon as they want. | [optional] 
**negative_cache_duration** | **str** | For requested entities that did not match the threat list, how long to cache the response. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_find_full_hashes_response import GoogleSecuritySafebrowsingV4FindFullHashesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4FindFullHashesResponse from a JSON string
google_security_safebrowsing_v4_find_full_hashes_response_instance = GoogleSecuritySafebrowsingV4FindFullHashesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4FindFullHashesResponse.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_find_full_hashes_response_dict = google_security_safebrowsing_v4_find_full_hashes_response_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4FindFullHashesResponse from a dict
google_security_safebrowsing_v4_find_full_hashes_response_from_dict = GoogleSecuritySafebrowsingV4FindFullHashesResponse.from_dict(google_security_safebrowsing_v4_find_full_hashes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


