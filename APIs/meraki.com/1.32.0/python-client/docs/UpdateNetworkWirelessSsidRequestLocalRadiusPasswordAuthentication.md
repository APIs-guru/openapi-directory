# UpdateNetworkWirelessSsidRequestLocalRadiusPasswordAuthentication

The current setting for password-based authentication.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether or not to use EAP-TTLS/PAP or PEAP-GTC password-based authentication via LDAP lookup. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_local_radius_password_authentication import UpdateNetworkWirelessSsidRequestLocalRadiusPasswordAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestLocalRadiusPasswordAuthentication from a JSON string
update_network_wireless_ssid_request_local_radius_password_authentication_instance = UpdateNetworkWirelessSsidRequestLocalRadiusPasswordAuthentication.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestLocalRadiusPasswordAuthentication.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_local_radius_password_authentication_dict = update_network_wireless_ssid_request_local_radius_password_authentication_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestLocalRadiusPasswordAuthentication from a dict
update_network_wireless_ssid_request_local_radius_password_authentication_from_dict = UpdateNetworkWirelessSsidRequestLocalRadiusPasswordAuthentication.from_dict(update_network_wireless_ssid_request_local_radius_password_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


