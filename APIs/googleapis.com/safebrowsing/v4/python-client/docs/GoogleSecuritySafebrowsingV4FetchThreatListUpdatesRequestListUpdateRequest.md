# GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest

A single list update request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraints** | [**GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints**](GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints.md) |  | [optional] 
**platform_type** | **str** | The type of platform at risk by entries present in the list. | [optional] 
**state** | **bytearray** | The current state of the client for the requested list (the encrypted client state that was received from the last successful list update). | [optional] 
**threat_entry_type** | **str** | The types of entries present in the list. | [optional] 
**threat_type** | **str** | The type of threat posed by entries present in the list. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_fetch_threat_list_updates_request_list_update_request import GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest from a JSON string
google_security_safebrowsing_v4_fetch_threat_list_updates_request_list_update_request_instance = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_fetch_threat_list_updates_request_list_update_request_dict = google_security_safebrowsing_v4_fetch_threat_list_updates_request_list_update_request_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest from a dict
google_security_safebrowsing_v4_fetch_threat_list_updates_request_list_update_request_from_dict = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest.from_dict(google_security_safebrowsing_v4_fetch_threat_list_updates_request_list_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


