# GoogleSecuritySafebrowsingV4FindThreatMatchesRequest

Request to check entries against lists.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client** | [**GoogleSecuritySafebrowsingV4ClientInfo**](GoogleSecuritySafebrowsingV4ClientInfo.md) |  | [optional] 
**threat_info** | [**GoogleSecuritySafebrowsingV4ThreatInfo**](GoogleSecuritySafebrowsingV4ThreatInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_find_threat_matches_request import GoogleSecuritySafebrowsingV4FindThreatMatchesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4FindThreatMatchesRequest from a JSON string
google_security_safebrowsing_v4_find_threat_matches_request_instance = GoogleSecuritySafebrowsingV4FindThreatMatchesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4FindThreatMatchesRequest.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_find_threat_matches_request_dict = google_security_safebrowsing_v4_find_threat_matches_request_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4FindThreatMatchesRequest from a dict
google_security_safebrowsing_v4_find_threat_matches_request_from_dict = GoogleSecuritySafebrowsingV4FindThreatMatchesRequest.from_dict(google_security_safebrowsing_v4_find_threat_matches_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


