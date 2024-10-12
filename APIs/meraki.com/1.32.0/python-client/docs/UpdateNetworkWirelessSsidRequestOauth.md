# UpdateNetworkWirelessSsidRequestOauth

The OAuth settings of this SSID. Only valid if splashPage is 'Google OAuth'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_domains** | **List[str]** | (Optional) The list of domains allowed access to the network. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_oauth import UpdateNetworkWirelessSsidRequestOauth

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestOauth from a JSON string
update_network_wireless_ssid_request_oauth_instance = UpdateNetworkWirelessSsidRequestOauth.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestOauth.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_oauth_dict = update_network_wireless_ssid_request_oauth_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestOauth from a dict
update_network_wireless_ssid_request_oauth_from_dict = UpdateNetworkWirelessSsidRequestOauth.from_dict(update_network_wireless_ssid_request_oauth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


