# UpdateNetworkWirelessAlternateManagementInterfaceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_points** | [**List[UpdateNetworkWirelessAlternateManagementInterfaceRequestAccessPointsInner]**](UpdateNetworkWirelessAlternateManagementInterfaceRequestAccessPointsInner.md) | Array of access point serial number and IP assignment. Note: accessPoints IP assignment is not applicable for template networks, in other words, do not put &#39;accessPoints&#39; in the body when updating template networks. Also, an empty &#39;accessPoints&#39; array will remove all previous static IP assignments | [optional] 
**enabled** | **bool** | Boolean value to enable or disable alternate management interface | [optional] 
**protocols** | **List[str]** | Can be one or more of the following values: &#39;radius&#39;, &#39;snmp&#39;, &#39;syslog&#39; or &#39;ldap&#39; | [optional] 
**vlan_id** | **int** | Alternate management interface VLAN, must be between 1 and 4094 | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_alternate_management_interface_request import UpdateNetworkWirelessAlternateManagementInterfaceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessAlternateManagementInterfaceRequest from a JSON string
update_network_wireless_alternate_management_interface_request_instance = UpdateNetworkWirelessAlternateManagementInterfaceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessAlternateManagementInterfaceRequest.to_json())

# convert the object into a dict
update_network_wireless_alternate_management_interface_request_dict = update_network_wireless_alternate_management_interface_request_instance.to_dict()
# create an instance of UpdateNetworkWirelessAlternateManagementInterfaceRequest from a dict
update_network_wireless_alternate_management_interface_request_from_dict = UpdateNetworkWirelessAlternateManagementInterfaceRequest.from_dict(update_network_wireless_alternate_management_interface_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


