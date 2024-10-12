# UpdateNetworkApplianceSsidRequestRadiusServersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The IP address of your RADIUS server. | [optional] 
**port** | **int** | The UDP port your RADIUS servers listens on for Access-requests. | [optional] 
**secret** | **str** | The RADIUS client shared secret. | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_ssid_request_radius_servers_inner import UpdateNetworkApplianceSsidRequestRadiusServersInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceSsidRequestRadiusServersInner from a JSON string
update_network_appliance_ssid_request_radius_servers_inner_instance = UpdateNetworkApplianceSsidRequestRadiusServersInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceSsidRequestRadiusServersInner.to_json())

# convert the object into a dict
update_network_appliance_ssid_request_radius_servers_inner_dict = update_network_appliance_ssid_request_radius_servers_inner_instance.to_dict()
# create an instance of UpdateNetworkApplianceSsidRequestRadiusServersInner from a dict
update_network_appliance_ssid_request_radius_servers_inner_from_dict = UpdateNetworkApplianceSsidRequestRadiusServersInner.from_dict(update_network_appliance_ssid_request_radius_servers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


