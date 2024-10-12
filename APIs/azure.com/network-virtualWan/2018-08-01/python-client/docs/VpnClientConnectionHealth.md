# VpnClientConnectionHealth

VpnClientConnectionHealth properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated_ip_addresses** | **List[str]** | List of allocated ip addresses to the connected p2s vpn clients. | [optional] 
**total_egress_bytes_transferred** | **int** | Total of the Egress Bytes Transferred in this connection | [optional] [readonly] 
**total_ingress_bytes_transferred** | **int** | Total of the Ingress Bytes Transferred in this P2S Vpn connection | [optional] [readonly] 
**vpn_client_connections_count** | **int** | The total of p2s vpn clients connected at this time to this P2SVpnGateway. | [optional] 

## Example

```python
from openapi_client.models.vpn_client_connection_health import VpnClientConnectionHealth

# TODO update the JSON string below
json = "{}"
# create an instance of VpnClientConnectionHealth from a JSON string
vpn_client_connection_health_instance = VpnClientConnectionHealth.from_json(json)
# print the JSON string representation of the object
print(VpnClientConnectionHealth.to_json())

# convert the object into a dict
vpn_client_connection_health_dict = vpn_client_connection_health_instance.to_dict()
# create an instance of VpnClientConnectionHealth from a dict
vpn_client_connection_health_from_dict = VpnClientConnectionHealth.from_dict(vpn_client_connection_health_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


