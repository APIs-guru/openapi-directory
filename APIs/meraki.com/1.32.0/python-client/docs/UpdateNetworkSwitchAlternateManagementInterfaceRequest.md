# UpdateNetworkSwitchAlternateManagementInterfaceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Boolean value to enable or disable AMI configuration. If enabled, VLAN and protocols must be set | [optional] 
**protocols** | **List[str]** | Can be one or more of the following values: &#39;radius&#39;, &#39;snmp&#39; or &#39;syslog&#39; | [optional] 
**switches** | [**List[UpdateNetworkSwitchAlternateManagementInterfaceRequestSwitchesInner]**](UpdateNetworkSwitchAlternateManagementInterfaceRequestSwitchesInner.md) | Array of switch serial number and IP assignment. If parameter is present, it cannot have empty body. Note: switches parameter is not applicable for template networks, in other words, do not put &#39;switches&#39; in the body when updating template networks. Also, an empty &#39;switches&#39; array will remove all previous assignments | [optional] 
**vlan_id** | **int** | Alternate management VLAN, must be between 1 and 4094 | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_alternate_management_interface_request import UpdateNetworkSwitchAlternateManagementInterfaceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchAlternateManagementInterfaceRequest from a JSON string
update_network_switch_alternate_management_interface_request_instance = UpdateNetworkSwitchAlternateManagementInterfaceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchAlternateManagementInterfaceRequest.to_json())

# convert the object into a dict
update_network_switch_alternate_management_interface_request_dict = update_network_switch_alternate_management_interface_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchAlternateManagementInterfaceRequest from a dict
update_network_switch_alternate_management_interface_request_from_dict = UpdateNetworkSwitchAlternateManagementInterfaceRequest.from_dict(update_network_switch_alternate_management_interface_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


