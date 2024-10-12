# GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerLinkNegotiation

Link negotiation details object for the port

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duplex** | **str** | The duplex mode of the port. Can be &#39;full&#39; or &#39;half&#39; | [optional] 
**speed** | **int** | The speed of the port | [optional] 

## Example

```python
from openapi_client.models.get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_link_negotiation import GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerLinkNegotiation

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerLinkNegotiation from a JSON string
get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_link_negotiation_instance = GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerLinkNegotiation.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerLinkNegotiation.to_json())

# convert the object into a dict
get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_link_negotiation_dict = get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_link_negotiation_instance.to_dict()
# create an instance of GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerLinkNegotiation from a dict
get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_link_negotiation_from_dict = GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInnerLinkNegotiation.from_dict(get_organization_wireless_devices_ethernet_statuses200_response_inner_ports_inner_link_negotiation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


