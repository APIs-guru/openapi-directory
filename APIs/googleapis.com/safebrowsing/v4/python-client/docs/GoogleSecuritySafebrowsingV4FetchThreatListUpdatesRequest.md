# GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest

Describes a Safe Browsing API update request. Clients can request updates for multiple lists in a single request. The server may not respond to all requests, if the server has no updates for that list. NOTE: Field index 2 is unused. NEXT: 5

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client** | [**GoogleSecuritySafebrowsingV4ClientInfo**](GoogleSecuritySafebrowsingV4ClientInfo.md) |  | [optional] 
**list_update_requests** | [**List[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest]**](GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest.md) | The requested threat list updates. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_fetch_threat_list_updates_request import GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest from a JSON string
google_security_safebrowsing_v4_fetch_threat_list_updates_request_instance = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_fetch_threat_list_updates_request_dict = google_security_safebrowsing_v4_fetch_threat_list_updates_request_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest from a dict
google_security_safebrowsing_v4_fetch_threat_list_updates_request_from_dict = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest.from_dict(google_security_safebrowsing_v4_fetch_threat_list_updates_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


