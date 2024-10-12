# GoogleSecuritySafebrowsingV4ThreatHitThreatSource

A single resource related to a threat hit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**referrer** | **str** | Referrer of the resource. Only set if the referrer is available. | [optional] 
**remote_ip** | **str** | The remote IP of the resource in ASCII format. Either IPv4 or IPv6. | [optional] 
**type** | **str** | The type of source reported. | [optional] 
**url** | **str** | The URL of the resource. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_threat_hit_threat_source import GoogleSecuritySafebrowsingV4ThreatHitThreatSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4ThreatHitThreatSource from a JSON string
google_security_safebrowsing_v4_threat_hit_threat_source_instance = GoogleSecuritySafebrowsingV4ThreatHitThreatSource.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4ThreatHitThreatSource.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_threat_hit_threat_source_dict = google_security_safebrowsing_v4_threat_hit_threat_source_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4ThreatHitThreatSource from a dict
google_security_safebrowsing_v4_threat_hit_threat_source_from_dict = GoogleSecuritySafebrowsingV4ThreatHitThreatSource.from_dict(google_security_safebrowsing_v4_threat_hit_threat_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


