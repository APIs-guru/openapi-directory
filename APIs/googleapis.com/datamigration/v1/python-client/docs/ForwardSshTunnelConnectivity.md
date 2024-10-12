# ForwardSshTunnelConnectivity

Forward SSH Tunnel connectivity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostname** | **str** | Required. Hostname for the SSH tunnel. | [optional] 
**password** | **str** | Input only. SSH password. | [optional] 
**port** | **int** | Port for the SSH tunnel, default value is 22. | [optional] 
**private_key** | **str** | Input only. SSH private key. | [optional] 
**username** | **str** | Required. Username for the SSH tunnel. | [optional] 

## Example

```python
from openapi_client.models.forward_ssh_tunnel_connectivity import ForwardSshTunnelConnectivity

# TODO update the JSON string below
json = "{}"
# create an instance of ForwardSshTunnelConnectivity from a JSON string
forward_ssh_tunnel_connectivity_instance = ForwardSshTunnelConnectivity.from_json(json)
# print the JSON string representation of the object
print(ForwardSshTunnelConnectivity.to_json())

# convert the object into a dict
forward_ssh_tunnel_connectivity_dict = forward_ssh_tunnel_connectivity_instance.to_dict()
# create an instance of ForwardSshTunnelConnectivity from a dict
forward_ssh_tunnel_connectivity_from_dict = ForwardSshTunnelConnectivity.from_dict(forward_ssh_tunnel_connectivity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


