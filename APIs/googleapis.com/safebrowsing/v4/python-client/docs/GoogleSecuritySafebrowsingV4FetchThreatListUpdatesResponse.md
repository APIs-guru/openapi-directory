# GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_update_responses** | [**List[GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse]**](GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse.md) | The list updates requested by the clients. The number of responses here may be less than the number of requests sent by clients. This is the case, for example, if the server has no updates for a particular list. | [optional] 
**minimum_wait_duration** | **str** | The minimum duration the client must wait before issuing any update request. If this field is not set clients may update as soon as they want. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_fetch_threat_list_updates_response import GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse from a JSON string
google_security_safebrowsing_v4_fetch_threat_list_updates_response_instance = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_fetch_threat_list_updates_response_dict = google_security_safebrowsing_v4_fetch_threat_list_updates_response_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse from a dict
google_security_safebrowsing_v4_fetch_threat_list_updates_response_from_dict = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse.from_dict(google_security_safebrowsing_v4_fetch_threat_list_updates_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


