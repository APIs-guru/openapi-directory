# GetNetworkSettings200ResponseLocalStatusPage

A hash of Local Status page(s)' authentication options applied to the Network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | [**GetNetworkSettings200ResponseLocalStatusPageAuthentication**](GetNetworkSettings200ResponseLocalStatusPageAuthentication.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_network_settings200_response_local_status_page import GetNetworkSettings200ResponseLocalStatusPage

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSettings200ResponseLocalStatusPage from a JSON string
get_network_settings200_response_local_status_page_instance = GetNetworkSettings200ResponseLocalStatusPage.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSettings200ResponseLocalStatusPage.to_json())

# convert the object into a dict
get_network_settings200_response_local_status_page_dict = get_network_settings200_response_local_status_page_instance.to_dict()
# create an instance of GetNetworkSettings200ResponseLocalStatusPage from a dict
get_network_settings200_response_local_status_page_from_dict = GetNetworkSettings200ResponseLocalStatusPage.from_dict(get_network_settings200_response_local_status_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


