# GoogleSecuritySafebrowsingV4ThreatHitUserInfo

Details about the user that encountered the threat.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**region_code** | **str** | The UN M.49 region code associated with the user&#39;s location. | [optional] 
**user_id** | **bytearray** | Unique user identifier defined by the client. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_threat_hit_user_info import GoogleSecuritySafebrowsingV4ThreatHitUserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4ThreatHitUserInfo from a JSON string
google_security_safebrowsing_v4_threat_hit_user_info_instance = GoogleSecuritySafebrowsingV4ThreatHitUserInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4ThreatHitUserInfo.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_threat_hit_user_info_dict = google_security_safebrowsing_v4_threat_hit_user_info_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4ThreatHitUserInfo from a dict
google_security_safebrowsing_v4_threat_hit_user_info_from_dict = GoogleSecuritySafebrowsingV4ThreatHitUserInfo.from_dict(google_security_safebrowsing_v4_threat_hit_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


