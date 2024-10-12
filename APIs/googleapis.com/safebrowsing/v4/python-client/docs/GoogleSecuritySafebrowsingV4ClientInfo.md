# GoogleSecuritySafebrowsingV4ClientInfo

The client metadata associated with Safe Browsing API requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API. | [optional] 
**client_version** | **str** | The version of the client implementation. | [optional] 

## Example

```python
from openapi_client.models.google_security_safebrowsing_v4_client_info import GoogleSecuritySafebrowsingV4ClientInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleSecuritySafebrowsingV4ClientInfo from a JSON string
google_security_safebrowsing_v4_client_info_instance = GoogleSecuritySafebrowsingV4ClientInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleSecuritySafebrowsingV4ClientInfo.to_json())

# convert the object into a dict
google_security_safebrowsing_v4_client_info_dict = google_security_safebrowsing_v4_client_info_instance.to_dict()
# create an instance of GoogleSecuritySafebrowsingV4ClientInfo from a dict
google_security_safebrowsing_v4_client_info_from_dict = GoogleSecuritySafebrowsingV4ClientInfo.from_dict(google_security_safebrowsing_v4_client_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


