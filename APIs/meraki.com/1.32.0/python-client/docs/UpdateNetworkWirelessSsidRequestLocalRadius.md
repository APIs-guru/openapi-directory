# UpdateNetworkWirelessSsidRequestLocalRadius

The current setting for Local Authentication, a built-in RADIUS server on the access point. Only valid if authMode is '8021x-localradius'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_timeout** | **int** | The duration (in seconds) for which LDAP and OCSP lookups are cached. | [optional] 
**certificate_authentication** | [**UpdateNetworkWirelessSsidRequestLocalRadiusCertificateAuthentication**](UpdateNetworkWirelessSsidRequestLocalRadiusCertificateAuthentication.md) |  | [optional] 
**password_authentication** | [**UpdateNetworkWirelessSsidRequestLocalRadiusPasswordAuthentication**](UpdateNetworkWirelessSsidRequestLocalRadiusPasswordAuthentication.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_request_local_radius import UpdateNetworkWirelessSsidRequestLocalRadius

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidRequestLocalRadius from a JSON string
update_network_wireless_ssid_request_local_radius_instance = UpdateNetworkWirelessSsidRequestLocalRadius.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidRequestLocalRadius.to_json())

# convert the object into a dict
update_network_wireless_ssid_request_local_radius_dict = update_network_wireless_ssid_request_local_radius_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidRequestLocalRadius from a dict
update_network_wireless_ssid_request_local_radius_from_dict = UpdateNetworkWirelessSsidRequestLocalRadius.from_dict(update_network_wireless_ssid_request_local_radius_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


