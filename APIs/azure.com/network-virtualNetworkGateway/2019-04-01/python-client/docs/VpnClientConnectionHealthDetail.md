# VpnClientConnectionHealthDetail

VPN client connection health detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**egress_bytes_transferred** | **int** | The egress bytes per second. | [optional] [readonly] 
**egress_packets_transferred** | **int** | The egress packets per second. | [optional] [readonly] 
**ingress_bytes_transferred** | **int** | The ingress bytes per second. | [optional] [readonly] 
**ingress_packets_transferred** | **int** | The ingress packets per second. | [optional] [readonly] 
**max_bandwidth** | **int** | The max band width. | [optional] [readonly] 
**max_packets_per_second** | **int** | The max packets transferred per second. | [optional] [readonly] 
**private_ip_address** | **str** | The assigned private Ip of a connected vpn client. | [optional] [readonly] 
**public_ip_address** | **str** | The public Ip of a connected vpn client. | [optional] [readonly] 
**vpn_connection_duration** | **int** | The duration time of a connected vpn client. | [optional] [readonly] 
**vpn_connection_id** | **str** | The vpn client Id. | [optional] [readonly] 
**vpn_connection_time** | **str** | The start time of a connected vpn client. | [optional] [readonly] 
**vpn_user_name** | **str** | The user name of a connected vpn client. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vpn_client_connection_health_detail import VpnClientConnectionHealthDetail

# TODO update the JSON string below
json = "{}"
# create an instance of VpnClientConnectionHealthDetail from a JSON string
vpn_client_connection_health_detail_instance = VpnClientConnectionHealthDetail.from_json(json)
# print the JSON string representation of the object
print(VpnClientConnectionHealthDetail.to_json())

# convert the object into a dict
vpn_client_connection_health_detail_dict = vpn_client_connection_health_detail_instance.to_dict()
# create an instance of VpnClientConnectionHealthDetail from a dict
vpn_client_connection_health_detail_from_dict = VpnClientConnectionHealthDetail.from_dict(vpn_client_connection_health_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


