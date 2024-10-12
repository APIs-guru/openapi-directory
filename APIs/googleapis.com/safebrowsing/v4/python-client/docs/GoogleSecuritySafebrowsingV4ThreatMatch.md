# GoogleSecuritySafebrowsingV4ThreatMatch

A match when checking a threat entry in the Safe Browsing threat lists.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_duration** | **str** | The cache lifetime for the returned match. Clients must not cache this response for more than this duration to avoid false positives. | [optional] 
**platform_type** | **str** | The platform type matching this threat. | [optional] 
**threat** | [**GoogleSecuritySafebrowsingV4ThreatEntry**](GoogleSecuritySafebrowsingV4ThreatEntry.md) |  | [optional] 
**threat_entry_metadata** | [**GoogleSecuritySafebrowsingV4ThreatEntryMetadata**](GoogleSecuritySafebrowsingV4ThreatEntryMetadata.md) |  | [optional] 
**threat_entry_type** | **str** | The threat entry type matching this threat. | [optional] 
**threat_type** | **str** | The threat type matching this threat. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_threat_match import GoogleSecuritySafebrowsingV4ThreatMatch

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4ThreatMatch from a JSON string
google_security_safebrowsing_v4_threat_match_instance = GoogleSecuritySafebrowsingV4ThreatMatch.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4ThreatMatch.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_threat_match_dict = google_security_safebrowsing_v4_threat_match_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4ThreatMatch from a dict
google_security_safebrowsing_v4_threat_match_from_dict = GoogleSecuritySafebrowsingV4ThreatMatch.from_dict(google_security_safebrowsing_v4_threat_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


