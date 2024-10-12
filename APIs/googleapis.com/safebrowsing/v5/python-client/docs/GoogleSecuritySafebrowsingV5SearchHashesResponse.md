# GoogleSecuritySafebrowsingV5SearchHashesResponse

The response returned after searching threat hashes. If nothing is found, the server will return an OK status (HTTP status code 200) with the `full_hashes` field empty, rather than returning a NOT_FOUND status (HTTP status code 404). **What's new in V5**: There is a separation between FullHash and FullHashDetail. In the case when a hash represents a site having multiple threats (e.g. both MALWARE and SOCIAL_ENGINEERING), the full hash does not need to be sent twice as in V4. Furthermore, the cache duration has been simplified into a single `cache_duration` field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_duration** | **str** | The client-side cache duration. The client MUST add this duration to the current time to determine the expiration time. The expiration time then applies to every hash prefix queried by the client in the request, regardless of how many full hashes are returned in the response. Even if the server returns no full hashes for a particular hash prefix, this fact MUST also be cached by the client. Important: the client MUST NOT assume that the server will return the same cache duration for all responses. The server MAY choose different cache durations for different responses depending on the situation. | [optional] 
**full_hashes** | [**List[GoogleSecuritySafebrowsingV5FullHash]**](GoogleSecuritySafebrowsingV5FullHash.md) | Unordered list. The unordered list of full hashes found. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v5_search_hashes_response import GoogleSecuritySafebrowsingV5SearchHashesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV5SearchHashesResponse from a JSON string
google_security_safebrowsing_v5_search_hashes_response_instance = GoogleSecuritySafebrowsingV5SearchHashesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV5SearchHashesResponse.to_json())

# convert the object into a dict
google_security_safebrowsing_v5_search_hashes_response_dict = google_security_safebrowsing_v5_search_hashes_response_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV5SearchHashesResponse from a dict
google_security_safebrowsing_v5_search_hashes_response_from_dict = GoogleSecuritySafebrowsingV5SearchHashesResponse.from_dict(google_security_safebrowsing_v5_search_hashes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


