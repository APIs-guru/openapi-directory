# UpdateNetworkWirelessAlternateManagementInterfaceRequestAccessPointsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_management_ip** | **str** | Wireless alternate management interface device IP. Provide an empty string to remove alternate management IP assignment | 
**dns1** | **str** | Primary DNS must be in IP format | [optional] 
**dns2** | **str** | Optional secondary DNS must be in IP format | [optional] 
**gateway** | **str** | Gateway must be in IP format | [optional] 
**serial** | **str** | Serial number of access point to be configured with alternate management IP | 
**subnet_mask** | **str** | Subnet mask must be in IP format | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_alternate_management_interface_request_access_points_inner import UpdateNetworkWirelessAlternateManagementInterfaceRequestAccessPointsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessAlternateManagementInterfaceRequestAccessPointsInner from a JSON string
update_network_wireless_alternate_management_interface_request_access_points_inner_instance = UpdateNetworkWirelessAlternateManagementInterfaceRequestAccessPointsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessAlternateManagementInterfaceRequestAccessPointsInner.to_json())

# convert the object into a dict
update_network_wireless_alternate_management_interface_request_access_points_inner_dict = update_network_wireless_alternate_management_interface_request_access_points_inner_instance.to_dict()
# create an instance of UpdateNetworkWirelessAlternateManagementInterfaceRequestAccessPointsInner from a dict
update_network_wireless_alternate_management_interface_request_access_points_inner_from_dict = UpdateNetworkWirelessAlternateManagementInterfaceRequestAccessPointsInner.from_dict(update_network_wireless_alternate_management_interface_request_access_points_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


