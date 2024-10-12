# UpdateNetworkAppliancePortRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_policy** | **str** | The name of the policy. Only applicable to Access ports. Valid values are: &#39;open&#39;, &#39;8021x-radius&#39;, &#39;mac-radius&#39;, &#39;hybris-radius&#39; for MX64 or Z3 or any MX supporting the per port authentication feature. Otherwise, &#39;open&#39; is the only valid value and &#39;open&#39; is the default value if the field is missing. | [optional] 
**allowed_vlans** | **str** | Comma-delimited list of the VLAN ID&#39;s allowed on the port, or &#39;all&#39; to permit all VLAN&#39;s on the port. | [optional] 
**drop_untagged_traffic** | **bool** | Trunk port can Drop all Untagged traffic. When true, no VLAN is required. Access ports cannot have dropUntaggedTraffic set to true. | [optional] 
**enabled** | **bool** | The status of the port | [optional] 
**type** | **str** | The type of the port: &#39;access&#39; or &#39;trunk&#39;. | [optional] 
**vlan** | **int** | Native VLAN when the port is in Trunk mode. Access VLAN when the port is in Access mode. | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_port_request import UpdateNetworkAppliancePortRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkAppliancePortRequest from a JSON string
update_network_appliance_port_request_instance = UpdateNetworkAppliancePortRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkAppliancePortRequest.to_json())

# convert the object into a dict
update_network_appliance_port_request_dict = update_network_appliance_port_request_instance.to_dict()
# create an instance of UpdateNetworkAppliancePortRequest from a dict
update_network_appliance_port_request_from_dict = UpdateNetworkAppliancePortRequest.from_dict(update_network_appliance_port_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


