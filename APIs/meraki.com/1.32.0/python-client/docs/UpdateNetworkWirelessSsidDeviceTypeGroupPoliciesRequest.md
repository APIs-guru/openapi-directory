# UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_type_policies** | [**List[UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestDeviceTypePoliciesInner]**](UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestDeviceTypePoliciesInner.md) | List of device type policies. | [optional] 
**enabled** | **bool** | If true, the SSID device type group policies are enabled. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_device_type_group_policies_request import UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest from a JSON string
update_network_wireless_ssid_device_type_group_policies_request_instance = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest.to_json())

# convert the object into a dict
update_network_wireless_ssid_device_type_group_policies_request_dict = update_network_wireless_ssid_device_type_group_policies_request_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest from a dict
update_network_wireless_ssid_device_type_group_policies_request_from_dict = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequest.from_dict(update_network_wireless_ssid_device_type_group_policies_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


