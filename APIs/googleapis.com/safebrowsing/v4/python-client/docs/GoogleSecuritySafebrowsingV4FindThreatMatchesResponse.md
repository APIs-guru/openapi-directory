# GoogleSecuritySafebrowsingV4FindThreatMatchesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matches** | [**List[GoogleSecuritySafebrowsingV4ThreatMatch]**](GoogleSecuritySafebrowsingV4ThreatMatch.md) | The threat list matches. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_find_threat_matches_response import GoogleSecuritySafebrowsingV4FindThreatMatchesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4FindThreatMatchesResponse from a JSON string
google_security_safebrowsing_v4_find_threat_matches_response_instance = GoogleSecuritySafebrowsingV4FindThreatMatchesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4FindThreatMatchesResponse.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_find_threat_matches_response_dict = google_security_safebrowsing_v4_find_threat_matches_response_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4FindThreatMatchesResponse from a dict
google_security_safebrowsing_v4_find_threat_matches_response_from_dict = GoogleSecuritySafebrowsingV4FindThreatMatchesResponse.from_dict(google_security_safebrowsing_v4_find_threat_matches_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


