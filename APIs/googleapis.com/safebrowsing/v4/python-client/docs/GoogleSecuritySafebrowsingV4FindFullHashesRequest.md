# GoogleSecuritySafebrowsingV4FindFullHashesRequest

Request to return full hashes matched by the provided hash prefixes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_client** | [**GoogleSecuritySafebrowsingV4ClientInfo**](GoogleSecuritySafebrowsingV4ClientInfo.md) |  | [optional] 
**client** | [**GoogleSecuritySafebrowsingV4ClientInfo**](GoogleSecuritySafebrowsingV4ClientInfo.md) |  | [optional] 
**client_states** | **List[bytearray]** | The current client states for each of the client&#39;s local threat lists. | [optional] 
**threat_info** | [**GoogleSecuritySafebrowsingV4ThreatInfo**](GoogleSecuritySafebrowsingV4ThreatInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_find_full_hashes_request import GoogleSecuritySafebrowsingV4FindFullHashesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4FindFullHashesRequest from a JSON string
google_security_safebrowsing_v4_find_full_hashes_request_instance = GoogleSecuritySafebrowsingV4FindFullHashesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4FindFullHashesRequest.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_find_full_hashes_request_dict = google_security_safebrowsing_v4_find_full_hashes_request_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4FindFullHashesRequest from a dict
google_security_safebrowsing_v4_find_full_hashes_request_from_dict = GoogleSecuritySafebrowsingV4FindFullHashesRequest.from_dict(google_security_safebrowsing_v4_find_full_hashes_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


