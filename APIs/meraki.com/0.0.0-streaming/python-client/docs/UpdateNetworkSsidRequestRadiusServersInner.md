# UpdateNetworkSsidRequestRadiusServersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | IP address of your RADIUS server | 
**port** | **int** | UDP port the RADIUS server listens on for Access-requests | [optional] 
**secret** | **str** | RADIUS client shared secret | [optional] 

## Example

```python
from openapi_client.models.update_network_ssid_request_radius_servers_inner import UpdateNetworkSsidRequestRadiusServersInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSsidRequestRadiusServersInner from a JSON string
update_network_ssid_request_radius_servers_inner_instance = UpdateNetworkSsidRequestRadiusServersInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSsidRequestRadiusServersInner.to_json())

# convert the object into a dict
update_network_ssid_request_radius_servers_inner_dict = update_network_ssid_request_radius_servers_inner_instance.to_dict()
# create an instance of UpdateNetworkSsidRequestRadiusServersInner from a dict
update_network_ssid_request_radius_servers_inner_from_dict = UpdateNetworkSsidRequestRadiusServersInner.from_dict(update_network_ssid_request_radius_servers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


