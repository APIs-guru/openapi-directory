# GoogleSecuritySafebrowsingV4ThreatListDescriptor

Describes an individual threat list. A list is defined by three parameters: the type of threat posed, the type of platform targeted by the threat, and the type of entries in the list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**platform_type** | **str** | The platform type targeted by the list&#39;s entries. | [optional] 
**threat_entry_type** | **str** | The entry types contained in the list. | [optional] 
**threat_type** | **str** | The threat type posed by the list&#39;s entries. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_threat_list_descriptor import GoogleSecuritySafebrowsingV4ThreatListDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4ThreatListDescriptor from a JSON string
google_security_safebrowsing_v4_threat_list_descriptor_instance = GoogleSecuritySafebrowsingV4ThreatListDescriptor.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4ThreatListDescriptor.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_threat_list_descriptor_dict = google_security_safebrowsing_v4_threat_list_descriptor_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4ThreatListDescriptor from a dict
google_security_safebrowsing_v4_threat_list_descriptor_from_dict = GoogleSecuritySafebrowsingV4ThreatListDescriptor.from_dict(google_security_safebrowsing_v4_threat_list_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


