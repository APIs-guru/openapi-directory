# GetNetworkWirelessConnectionStats200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assoc** | **int** | The number of failed association attempts | [optional] 
**auth** | **int** | The number of failed authentication attempts | [optional] 
**dhcp** | **int** | The number of failed DHCP attempts | [optional] 
**dns** | **int** | The number of failed DNS attempts | [optional] 
**success** | **int** | The number of successful connection attempts | [optional] 

## Example

```python
from openapi_client.models.get_network_wireless_connection_stats200_response import GetNetworkWirelessConnectionStats200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkWirelessConnectionStats200Response from a JSON string
get_network_wireless_connection_stats200_response_instance = GetNetworkWirelessConnectionStats200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkWirelessConnectionStats200Response.to_json())

# convert the object into a dict
get_network_wireless_connection_stats200_response_dict = get_network_wireless_connection_stats200_response_instance.to_dict()
# create an instance of GetNetworkWirelessConnectionStats200Response from a dict
get_network_wireless_connection_stats200_response_from_dict = GetNetworkWirelessConnectionStats200Response.from_dict(get_network_wireless_connection_stats200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


