# UpdateNetworkWirelessSsidRequestGre

Ethernet over GRE settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concentrator** | [**UpdateNetworkWirelessSsidRequestGreConcentrator**](UpdateNetworkWirelessSsidRequestGreConcentrator.md) |  | [optional] 
**key** | **int** | Optional numerical identifier that will add the GRE key field to the GRE header. Used to identify an individual traffic flow within a tunnel. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_gre import UpdateNetworkWirelessSsidRequestGre

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestGre from a JSON string
update_network_wireless_ssid_request_gre_instance = UpdateNetworkWirelessSsidRequestGre.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestGre.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_gre_dict = update_network_wireless_ssid_request_gre_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestGre from a dict
update_network_wireless_ssid_request_gre_from_dict = UpdateNetworkWirelessSsidRequestGre.from_dict(update_network_wireless_ssid_request_gre_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


