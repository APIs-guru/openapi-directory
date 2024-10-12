# GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPower

Power details object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ac** | [**GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPowerAc**](GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPowerAc.md) |  | [optional] 
**mode** | **str** | The PoE power mode for the AP. Can be &#39;full&#39; or &#39;low&#39; | [optional] 
**poe** | [**GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPowerPoe**](GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPowerPoe.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_wireless_devices_ethernet_statuses200_response_inner_power import GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPower

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPower from a JSON string
get_organization_wireless_devices_ethernet_statuses200_response_inner_power_instance = GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPower.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPower.to_json())

# convert the object into a dict
get_organization_wireless_devices_ethernet_statuses200_response_inner_power_dict = get_organization_wireless_devices_ethernet_statuses200_response_inner_power_instance.to_dict()
# create an instance of GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPower from a dict
get_organization_wireless_devices_ethernet_statuses200_response_inner_power_from_dict = GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPower.from_dict(get_organization_wireless_devices_ethernet_statuses200_response_inner_power_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


