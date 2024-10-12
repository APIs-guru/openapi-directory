# UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestDeviceTypePoliciesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_policy** | **str** | The device policy. Can be one of &#39;Allowed&#39;, &#39;Blocked&#39; or &#39;Group policy&#39; | 
**device_type** | **str** | The device type. Can be one of &#39;Android&#39;, &#39;BlackBerry&#39;, &#39;Chrome OS&#39;, &#39;iPad&#39;, &#39;iPhone&#39;, &#39;iPod&#39;, &#39;Mac OS X&#39;, &#39;Windows&#39;, &#39;Windows Phone&#39;, &#39;B&amp;N Nook&#39; or &#39;Other OS&#39; | 
**group_policy_id** | **int** | ID of the group policy object. | [optional] 

## Example

```python
from openapi_client.models.update_network_wireless_ssid_device_type_group_policies_request_device_type_policies_inner import UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestDeviceTypePoliciesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestDeviceTypePoliciesInner from a JSON string
update_network_wireless_ssid_device_type_group_policies_request_device_type_policies_inner_instance = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestDeviceTypePoliciesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestDeviceTypePoliciesInner.to_json())

# convert the object into a dict
update_network_wireless_ssid_device_type_group_policies_request_device_type_policies_inner_dict = update_network_wireless_ssid_device_type_group_policies_request_device_type_policies_inner_instance.to_dict()
# create an instance of UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestDeviceTypePoliciesInner from a dict
update_network_wireless_ssid_device_type_group_policies_request_device_type_policies_inner_from_dict = UpdateNetworkWirelessSsidDeviceTypeGroupPoliciesRequestDeviceTypePoliciesInner.from_dict(update_network_wireless_ssid_device_type_group_policies_request_device_type_policies_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


