# Network

Extra network settings. Only applicable in the App Engine flexible environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded_ports** | **List[str]** | List of ports, or port pairs, to forward from the virtual machine to the application container. Only applicable in the App Engine flexible environment. | [optional] 
**instance_ip_mode** | **str** | The IP mode for instances. Only applicable in the App Engine flexible environment. | [optional] 
**instance_tag** | **str** | Tag to apply to the instance during creation. Only applicable in the App Engine flexible environment. | [optional] 
**name** | **str** | Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.Defaults to default. | [optional] 
**session_affinity** | **bool** | Enable session affinity. Only applicable in the App Engine flexible environment. | [optional] 
**subnetwork_name** | **str** | Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.If a subnetwork name is specified, a network name will also be required unless it is for the default network. If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range. If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetwork_name) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network. If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetwork_name must be specified and the IP address is created from the IPCidrRange of the subnetwork.If specified, the subnetwork must exist in the same region as the App Engine flexible environment application. | [optional] 

## Example

```python
from openapi_client.models.network import Network

# TODO update the JSON string below
json = "{}"
# create an instance of Network from a JSON string
network_instance = Network.from_json(json)
# print the JSON string representation of the object
print(Network.to_json())

# convert the object into a dict
network_dict = network_instance.to_dict()
# create an instance of Network from a dict
network_from_dict = Network.from_dict(network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


