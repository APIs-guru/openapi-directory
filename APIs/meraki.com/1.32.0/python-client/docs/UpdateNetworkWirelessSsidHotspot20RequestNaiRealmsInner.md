# UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | The format for the realm (&#39;1&#39; or &#39;0&#39;) | [optional] 
**methods** | [**List[UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInnerMethodsInner]**](UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInnerMethodsInner.md) | An array of EAP methods for the realm. | [optional] 
**realm** | **str** | The name of the realm | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_hotspot20_request_nai_realms_inner import UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInner from a JSON string
update_network_wireless_ssid_hotspot20_request_nai_realms_inner_instance = UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInner.to_json())

# convert the object into a dict
update_network_wireless_ssid_hotspot20_request_nai_realms_inner_dict = update_network_wireless_ssid_hotspot20_request_nai_realms_inner_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInner from a dict
update_network_wireless_ssid_hotspot20_request_nai_realms_inner_from_dict = UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInner.from_dict(update_network_wireless_ssid_hotspot20_request_nai_realms_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


