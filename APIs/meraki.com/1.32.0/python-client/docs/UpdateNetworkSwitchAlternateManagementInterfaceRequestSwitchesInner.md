# UpdateNetworkSwitchAlternateManagementInterfaceRequestSwitchesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_management_ip** | **str** | Switch alternative management IP. To remove a prior IP setting, provide an empty string | 
**gateway** | **str** | Switch gateway must be in IP format. Only and must be specified for Polaris switches | [optional] 
**serial** | **str** | Switch serial number | 
**subnet_mask** | **str** | Switch subnet mask must be in IP format. Only and must be specified for Polaris switches | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_alternate_management_interface_request_switches_inner import UpdateNetworkSwitchAlternateManagementInterfaceRequestSwitchesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchAlternateManagementInterfaceRequestSwitchesInner from a JSON string
update_network_switch_alternate_management_interface_request_switches_inner_instance = UpdateNetworkSwitchAlternateManagementInterfaceRequestSwitchesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchAlternateManagementInterfaceRequestSwitchesInner.to_json())

# convert the object into a dict
update_network_switch_alternate_management_interface_request_switches_inner_dict = update_network_switch_alternate_management_interface_request_switches_inner_instance.to_dict()
# create an instance of UpdateNetworkSwitchAlternateManagementInterfaceRequestSwitchesInner from a dict
update_network_switch_alternate_management_interface_request_switches_inner_from_dict = UpdateNetworkSwitchAlternateManagementInterfaceRequestSwitchesInner.from_dict(update_network_switch_alternate_management_interface_request_switches_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


