# GetNetworkApplianceSsids200ResponseInnerRadiusServersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The IP address of your RADIUS server. | [optional] 
**port** | **int** | The UDP port your RADIUS servers listens on for Access-requests. | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_ssids200_response_inner_radius_servers_inner import GetNetworkApplianceSsids200ResponseInnerRadiusServersInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceSsids200ResponseInnerRadiusServersInner from a JSON string
get_network_appliance_ssids200_response_inner_radius_servers_inner_instance = GetNetworkApplianceSsids200ResponseInnerRadiusServersInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceSsids200ResponseInnerRadiusServersInner.to_json())

# convert the object into a dict
get_network_appliance_ssids200_response_inner_radius_servers_inner_dict = get_network_appliance_ssids200_response_inner_radius_servers_inner_instance.to_dict()
# create an instance of GetNetworkApplianceSsids200ResponseInnerRadiusServersInner from a dict
get_network_appliance_ssids200_response_inner_radius_servers_inner_from_dict = GetNetworkApplianceSsids200ResponseInnerRadiusServersInner.from_dict(get_network_appliance_ssids200_response_inner_radius_servers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


