# GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints

The constraints for this update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_location** | **str** | A client&#39;s physical location, expressed as a ISO 31166-1 alpha-2 region code. | [optional] 
**language** | **str** | Requests the lists for a specific language. Expects ISO 639 alpha-2 format. | [optional] 
**max_database_entries** | **int** | Sets the maximum number of entries that the client is willing to have in the local database for the specified list. This should be a power of 2 between 2**10 and 2**20. If zero, no database size limit is set. | [optional] 
**max_update_entries** | **int** | The maximum size in number of entries. The update will not contain more entries than this value. This should be a power of 2 between 2**10 and 2**20. If zero, no update size limit is set. | [optional] 
**region** | **str** | Requests the list for a specific geographic location. If not set the server may pick that value based on the user&#39;s IP address. Expects ISO 3166-1 alpha-2 format. | [optional] 
**supported_compressions** | **List[str]** | The compression types supported by the client. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_fetch_threat_list_updates_request_list_update_request_constraints import GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints from a JSON string
google_security_safebrowsing_v4_fetch_threat_list_updates_request_list_update_request_constraints_instance = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_fetch_threat_list_updates_request_list_update_request_constraints_dict = google_security_safebrowsing_v4_fetch_threat_list_updates_request_list_update_request_constraints_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints from a dict
google_security_safebrowsing_v4_fetch_threat_list_updates_request_list_update_request_constraints_from_dict = GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints.from_dict(google_security_safebrowsing_v4_fetch_threat_list_updates_request_list_update_request_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


