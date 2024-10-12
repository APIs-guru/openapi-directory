# GetNetworkHealthAlerts200ResponseInnerScope

The scope of the alert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applications** | [**List[GetNetworkHealthAlerts200ResponseInnerScopeApplicationsInner]**](GetNetworkHealthAlerts200ResponseInnerScopeApplicationsInner.md) | Applications related to the alert | [optional] 
**devices** | [**List[GetNetworkHealthAlerts200ResponseInnerScopeDevicesInner]**](GetNetworkHealthAlerts200ResponseInnerScopeDevicesInner.md) | Devices related to the alert | [optional] 
**peers** | [**List[GetNetworkHealthAlerts200ResponseInnerScopePeersInner]**](GetNetworkHealthAlerts200ResponseInnerScopePeersInner.md) | Peers related to the alert | [optional] 

## Example

```python
from openapi_client.models.get_network_health_alerts200_response_inner_scope import GetNetworkHealthAlerts200ResponseInnerScope

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkHealthAlerts200ResponseInnerScope from a JSON string
get_network_health_alerts200_response_inner_scope_instance = GetNetworkHealthAlerts200ResponseInnerScope.from_json(json)
# print the JSON string representation of the object
print(GetNetworkHealthAlerts200ResponseInnerScope.to_json())

# convert the object into a dict
get_network_health_alerts200_response_inner_scope_dict = get_network_health_alerts200_response_inner_scope_instance.to_dict()
# create an instance of GetNetworkHealthAlerts200ResponseInnerScope from a dict
get_network_health_alerts200_response_inner_scope_from_dict = GetNetworkHealthAlerts200ResponseInnerScope.from_dict(get_network_health_alerts200_response_inner_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


