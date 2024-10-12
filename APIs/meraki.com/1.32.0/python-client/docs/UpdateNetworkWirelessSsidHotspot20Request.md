# UpdateNetworkWirelessSsidHotspot20Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domains** | **List[str]** | An array of domain names | [optional] 
**enabled** | **bool** | Whether or not Hotspot 2.0 for this SSID is enabled | [optional] 
**mcc_mncs** | [**List[UpdateNetworkWirelessSsidHotspot20RequestMccMncsInner]**](UpdateNetworkWirelessSsidHotspot20RequestMccMncsInner.md) | An array of MCC/MNC pairs | [optional] 
**nai_realms** | [**List[UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInner]**](UpdateNetworkWirelessSsidHotspot20RequestNaiRealmsInner.md) | An array of NAI realms | [optional] 
**network_access_type** | **str** | The network type of this SSID (&#39;Private network&#39;, &#39;Private network with guest access&#39;, &#39;Chargeable public network&#39;, &#39;Free public network&#39;, &#39;Personal device network&#39;, &#39;Emergency services only network&#39;, &#39;Test or experimental&#39;, &#39;Wildcard&#39;) | [optional] 
**operator** | [**UpdateNetworkWirelessSsidHotspot20RequestOperator**](UpdateNetworkWirelessSsidHotspot20RequestOperator.md) |  | [optional] 
**roam_consort_ois** | **List[str]** | An array of roaming consortium OIs (hexadecimal number 3-5 octets in length) | [optional] 
**venue** | [**UpdateNetworkWirelessSsidHotspot20RequestVenue**](UpdateNetworkWirelessSsidHotspot20RequestVenue.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_hotspot20_request import UpdateNetworkWirelessSsidHotspot20Request

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidHotspot20Request from a JSON string
update_network_wireless_ssid_hotspot20_request_instance = UpdateNetworkWirelessSsidHotspot20Request.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidHotspot20Request.to_json())

# convert the object into a dict
update_network_wireless_ssid_hotspot20_request_dict = update_network_wireless_ssid_hotspot20_request_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidHotspot20Request from a dict
update_network_wireless_ssid_hotspot20_request_from_dict = UpdateNetworkWirelessSsidHotspot20Request.from_dict(update_network_wireless_ssid_hotspot20_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


