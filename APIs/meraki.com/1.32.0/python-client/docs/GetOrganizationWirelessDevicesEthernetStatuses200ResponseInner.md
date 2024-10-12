# GetOrganizationWirelessDevicesEthernetStatuses200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | [**GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerAggregation**](GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerAggregation.md) |  | [optional] 
**name** | **str** | The name of the AP | [optional] 
**network** | [**GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerNetwork**](GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerNetwork.md) |  | [optional] 
**ports** | [**List[GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInner]**](GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPortsInner.md) | List of port details | [optional] 
**power** | [**GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPower**](GetOrganizationWirelessDevicesEthernetStatuses200ResponseInnerPower.md) |  | [optional] 
**serial** | **str** | The serial number of the AP | [optional] 

## Example

```python
from openapi_client.models.get_organization_wireless_devices_ethernet_statuses200_response_inner import GetOrganizationWirelessDevicesEthernetStatuses200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationWirelessDevicesEthernetStatuses200ResponseInner from a JSON string
get_organization_wireless_devices_ethernet_statuses200_response_inner_instance = GetOrganizationWirelessDevicesEthernetStatuses200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationWirelessDevicesEthernetStatuses200ResponseInner.to_json())

# convert the object into a dict
get_organization_wireless_devices_ethernet_statuses200_response_inner_dict = get_organization_wireless_devices_ethernet_statuses200_response_inner_instance.to_dict()
# create an instance of GetOrganizationWirelessDevicesEthernetStatuses200ResponseInner from a dict
get_organization_wireless_devices_ethernet_statuses200_response_inner_from_dict = GetOrganizationWirelessDevicesEthernetStatuses200ResponseInner.from_dict(get_organization_wireless_devices_ethernet_statuses200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


