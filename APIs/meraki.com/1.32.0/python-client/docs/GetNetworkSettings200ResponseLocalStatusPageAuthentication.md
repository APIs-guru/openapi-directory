# GetNetworkSettings200ResponseLocalStatusPageAuthentication

A hash of Local Status page(s)' authentication options applied to the Network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enables / disables the authentication on Local Status page(s). | [optional] 
**username** | **str** | The username used for Local Status Page(s). | [optional] 

## Example

```python
from openapi_client.models.get_network_settings200_response_local_status_page_authentication import GetNetworkSettings200ResponseLocalStatusPageAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSettings200ResponseLocalStatusPageAuthentication from a JSON string
get_network_settings200_response_local_status_page_authentication_instance = GetNetworkSettings200ResponseLocalStatusPageAuthentication.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSettings200ResponseLocalStatusPageAuthentication.to_json())

# convert the object into a dict
get_network_settings200_response_local_status_page_authentication_dict = get_network_settings200_response_local_status_page_authentication_instance.to_dict()
# create an instance of GetNetworkSettings200ResponseLocalStatusPageAuthentication from a dict
get_network_settings200_response_local_status_page_authentication_from_dict = GetNetworkSettings200ResponseLocalStatusPageAuthentication.from_dict(get_network_settings200_response_local_status_page_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


