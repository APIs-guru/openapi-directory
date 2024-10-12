# GetNetworkHealthAlerts200ResponseInnerScopeDevicesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clients** | [**List[GetNetworkHealthAlerts200ResponseInnerScopeDevicesInnerClientsInner]**](GetNetworkHealthAlerts200ResponseInnerScopeDevicesInnerClientsInner.md) | Clients related to the device | [optional] 
**lldp** | [**GetNetworkHealthAlerts200ResponseInnerScopeDevicesInnerLldp**](GetNetworkHealthAlerts200ResponseInnerScopeDevicesInnerLldp.md) |  | [optional] 
**mac** | **str** | The mac address of the device | [optional] 
**name** | **str** | Name of the device | [optional] 
**product_type** | **str** | Product type of the device | [optional] 
**serial** | **str** | Serial number of the device | [optional] 
**url** | **str** | URL to the device | [optional] 

## Example

```python
from openapi_client.models.get_network_health_alerts200_response_inner_scope_devices_inner import GetNetworkHealthAlerts200ResponseInnerScopeDevicesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkHealthAlerts200ResponseInnerScopeDevicesInner from a JSON string
get_network_health_alerts200_response_inner_scope_devices_inner_instance = GetNetworkHealthAlerts200ResponseInnerScopeDevicesInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkHealthAlerts200ResponseInnerScopeDevicesInner.to_json())

# convert the object into a dict
get_network_health_alerts200_response_inner_scope_devices_inner_dict = get_network_health_alerts200_response_inner_scope_devices_inner_instance.to_dict()
# create an instance of GetNetworkHealthAlerts200ResponseInnerScopeDevicesInner from a dict
get_network_health_alerts200_response_inner_scope_devices_inner_from_dict = GetNetworkHealthAlerts200ResponseInnerScopeDevicesInner.from_dict(get_network_health_alerts200_response_inner_scope_devices_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


