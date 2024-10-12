# TunnelConnectionHealth

VirtualNetworkGatewayConnection properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_status** | [**VirtualNetworkGatewayConnectionStatus**](VirtualNetworkGatewayConnectionStatus.md) |  | [optional] 
**egress_bytes_transferred** | **int** | The Egress Bytes Transferred in this connection | [optional] [readonly] 
**ingress_bytes_transferred** | **int** | The Ingress Bytes Transferred in this connection | [optional] [readonly] 
**last_connection_established_utc_time** | **str** | The time at which connection was established in Utc format. | [optional] [readonly] 
**tunnel** | **str** | Tunnel name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.tunnel_connection_health import TunnelConnectionHealth

# TODO update the JSON string below
json = "{}"
# create an instance of TunnelConnectionHealth from a JSON string
tunnel_connection_health_instance = TunnelConnectionHealth.from_json(json)
# print the JSON string representation of the object
print(TunnelConnectionHealth.to_json())

# convert the object into a dict
tunnel_connection_health_dict = tunnel_connection_health_instance.to_dict()
# create an instance of TunnelConnectionHealth from a dict
tunnel_connection_health_from_dict = TunnelConnectionHealth.from_dict(tunnel_connection_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


