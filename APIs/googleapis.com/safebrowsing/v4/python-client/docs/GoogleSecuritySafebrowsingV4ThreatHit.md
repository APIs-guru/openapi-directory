# GoogleSecuritySafebrowsingV4ThreatHit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_info** | [**GoogleSecuritySafebrowsingV4ClientInfo**](GoogleSecuritySafebrowsingV4ClientInfo.md) |  | [optional] 
**entry** | [**GoogleSecuritySafebrowsingV4ThreatEntry**](GoogleSecuritySafebrowsingV4ThreatEntry.md) |  | [optional] 
**platform_type** | **str** | The platform type reported. | [optional] 
**resources** | [**List[GoogleSecuritySafebrowsingV4ThreatHitThreatSource]**](GoogleSecuritySafebrowsingV4ThreatHitThreatSource.md) | The resources related to the threat hit. | [optional] 
**threat_type** | **str** | The threat type reported. | [optional] 
**user_info** | [**GoogleSecuritySafebrowsingV4ThreatHitUserInfo**](GoogleSecuritySafebrowsingV4ThreatHitUserInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_threat_hit import GoogleSecuritySafebrowsingV4ThreatHit

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4ThreatHit from a JSON string
google_security_safebrowsing_v4_threat_hit_instance = GoogleSecuritySafebrowsingV4ThreatHit.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4ThreatHit.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_threat_hit_dict = google_security_safebrowsing_v4_threat_hit_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4ThreatHit from a dict
google_security_safebrowsing_v4_threat_hit_from_dict = GoogleSecuritySafebrowsingV4ThreatHit.from_dict(google_security_safebrowsing_v4_threat_hit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


