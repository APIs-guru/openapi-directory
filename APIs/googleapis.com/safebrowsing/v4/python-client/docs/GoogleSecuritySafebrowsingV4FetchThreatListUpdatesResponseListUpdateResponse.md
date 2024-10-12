# GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse

An update to an individual list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additions** | [**List[GoogleSecuritySafebrowsingV4ThreatEntrySet]**](GoogleSecuritySafebrowsingV4ThreatEntrySet.md) | A set of entries to add to a local threat type&#39;s list. Repeated to allow for a combination of compressed and raw data to be sent in a single response. | [optional] 
**checksum** | [**GoogleSecuritySafebrowsingV4Checksum**](GoogleSecuritySafebrowsingV4Checksum.md) |  | [optional] 
**new_client_state** | **bytearray** | The new client state, in encrypted format. Opaque to clients. | [optional] 
**platform_type** | **str** | The platform type for which data is returned. | [optional] 
**removals** | [**List[GoogleSecuritySafebrowsingV4ThreatEntrySet]**](GoogleSecuritySafebrowsingV4ThreatEntrySet.md) | A set of entries to remove from a local threat type&#39;s list. In practice, this field is empty or contains exactly one ThreatEntrySet. | [optional] 
**response_type** | **str** | The type of response. This may indicate that an action is required by the client when the response is received. | [optional] 
**threat_entry_type** | **str** | The format of the threats. | [optional] 
**threat_type** | **str** | The threat type for which data is returned. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_fetch_threat_list_updates_response_list_update_response import GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse from a JSON string
google_security_safebrowsing_v4_fetch_threat_list_updates_response_list_update_response_instance = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_fetch_threat_list_updates_response_list_update_response_dict = google_security_safebrowsing_v4_fetch_threat_list_updates_response_list_update_response_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse from a dict
google_security_safebrowsing_v4_fetch_threat_list_updates_response_list_update_response_from_dict = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse.from_dict(google_security_safebrowsing_v4_fetch_threat_list_updates_response_list_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


