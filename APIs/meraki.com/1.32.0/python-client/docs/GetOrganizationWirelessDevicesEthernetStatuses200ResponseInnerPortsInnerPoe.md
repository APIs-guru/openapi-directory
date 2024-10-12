# GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerPoe

PoE details object for the port

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**standard** | **str** | The PoE Standard for the port. Can be &#39;802.3at&#39;, &#39;802.3af&#39;, &#39;802.3bt&#39;, or null | [optional] 

## Example

```python
from openapi_client.models.get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_poe import GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerPoe

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerPoe from a JSON string
get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_poe_instance = GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerPoe.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerPoe.to_json())

# convert the object into a dict
get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_poe_dict = get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_poe_instance.to_dict()
# create an instance of GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerPoe from a dict
get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_poe_from_dict = GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerPoe.from_dict(get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_poe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


