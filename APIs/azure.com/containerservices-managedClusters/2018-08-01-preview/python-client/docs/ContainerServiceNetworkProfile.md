# ContainerServiceNetworkProfile

Profile of network configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_service_ip** | **str** | An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr. | [optional] [default to '10.0.0.10']
**docker_bridge_cidr** | **str** | A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range. | [optional] [default to '172.17.0.1/16']
**network_plugin** | **str** | Network plugin used for building Kubernetes network. | [optional] [default to 'kubenet']
**network_policy** | **str** | Network policy used for building Kubernetes network. | [optional] 
**pod_cidr** | **str** | A CIDR notation IP range from which to assign pod IPs when kubenet is used. | [optional] [default to '10.244.0.0/16']
**service_cidr** | **str** | A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges. | [optional] [default to '10.0.0.0/16']

## Example

```python
from openapi_client.models.container_service_network_profile import ContainerServiceNetworkProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerServiceNetworkProfile from a JSON string
container_service_network_profile_instance = ContainerServiceNetworkProfile.from_json(json)
# print the JSON string representation of the object
print(ContainerServiceNetworkProfile.to_json())

# convert the object into a dict
container_service_network_profile_dict = container_service_network_profile_instance.to_dict()
# create an instance of ContainerServiceNetworkProfile from a dict
container_service_network_profile_from_dict = ContainerServiceNetworkProfile.from_dict(container_service_network_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


