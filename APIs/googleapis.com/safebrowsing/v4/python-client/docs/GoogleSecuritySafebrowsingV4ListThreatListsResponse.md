# GoogleSecuritySafebrowsingV4ListThreatListsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**threat_lists** | [**List[GoogleSecuritySafebrowsingV4ThreatListDescriptor]**](GoogleSecuritySafebrowsingV4ThreatListDescriptor.md) | The lists available for download by the client. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_list_threat_lists_response import GoogleSecuritySafebrowsingV4ListThreatListsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4ListThreatListsResponse from a JSON string
google_security_safebrowsing_v4_list_threat_lists_response_instance = GoogleSecuritySafebrowsingV4ListThreatListsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4ListThreatListsResponse.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_list_threat_lists_response_dict = google_security_safebrowsing_v4_list_threat_lists_response_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4ListThreatListsResponse from a dict
google_security_safebrowsing_v4_list_threat_lists_response_from_dict = GoogleSecuritySafebrowsingV4ListThreatListsResponse.from_dict(google_security_safebrowsing_v4_list_threat_lists_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


