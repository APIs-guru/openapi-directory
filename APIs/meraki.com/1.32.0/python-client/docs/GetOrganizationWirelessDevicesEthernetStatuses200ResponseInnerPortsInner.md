# GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link_negotiation** | [**GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerLinkNegotiation**](GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerLinkNegotiation.md) |  | [optional] 
**name** | **str** | Label of the port | [optional] 
**poe** | [**GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerPoe**](GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerPoe.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner import GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInner from a JSON string
get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_instance = GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInner.to_json())

# convert the object into a dict
get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_dict = get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_instance.to_dict()
# create an instance of GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInner from a dict
get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_from_dict = GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInner.from_dict(get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


