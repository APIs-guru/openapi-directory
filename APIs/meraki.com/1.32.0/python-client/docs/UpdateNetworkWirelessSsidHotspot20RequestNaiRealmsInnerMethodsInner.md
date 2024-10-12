# UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInnerMethodsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_types** | **object** | The authentication types for the method. These should be formatted as an object with the EAP method category in camelcase as the key and the list of types as the value (nonEapInnerAuthentication: Reserved, PAP, CHAP, MSCHAP, MSCHAPV2; eapInnerAuthentication: EAP-TLS, EAP-SIM, EAP-AKA, EAP-TTLS with MSCHAPv2; credentials: SIM, USIM, NFC Secure Element, Hardware Token, Softoken, Certificate, username/password, none, Reserved, Vendor Specific; tunneledEapMethodCredentials: SIM, USIM, NFC Secure Element, Hardware Token, Softoken, Certificate, username/password, Reserved, Anonymous, Vendor Specific) | [optional] 
**id** | **str** | ID of method | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_hotspot20_request_nai_realms_inner_methods_inner import UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInnerMethodsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInnerMethodsInner from a JSON string
update_network_wireless_ssid_hotspot20_request_nai_realms_inner_methods_inner_instance = UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInnerMethodsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInnerMethodsInner.to_json())

# convert the object into a dict
update_network_wireless_ssid_hotspot20_request_nai_realms_inner_methods_inner_dict = update_network_wireless_ssid_hotspot20_request_nai_realms_inner_methods_inner_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInnerMethodsInner from a dict
update_network_wireless_ssid_hotspot20_request_nai_realms_inner_methods_inner_from_dict = UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInnerMethodsInner.from_dict(update_network_wireless_ssid_hotspot20_request_nai_realms_inner_methods_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


