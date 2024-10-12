# GoogleSecuritySafebrowsingV4ThreatInfo

The information regarding one or more threats that a client submits when checking for matches in threat lists.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**platform_types** | **List[str]** | The platform types to be checked. | [optional] 
**threat_entries** | [**List[GoogleSecuritySafebrowsingV4ThreatEntry]**](GoogleSecuritySafebrowsingV4ThreatEntry.md) | The threat entries to be checked. | [optional] 
**threat_entry_types** | **List[str]** | The entry types to be checked. | [optional] 
**threat_types** | **List[str]** | The threat types to be checked. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_threat_info import GoogleSecuritySafebrowsingV4ThreatInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4ThreatInfo from a JSON string
google_security_safebrowsing_v4_threat_info_instance = GoogleSecuritySafebrowsingV4ThreatInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4ThreatInfo.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_threat_info_dict = google_security_safebrowsing_v4_threat_info_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4ThreatInfo from a dict
google_security_safebrowsing_v4_threat_info_from_dict = GoogleSecuritySafebrowsingV4ThreatInfo.from_dict(google_security_safebrowsing_v4_threat_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


