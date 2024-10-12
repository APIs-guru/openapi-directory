# AksNetworkingConfiguration

Advance configuration for AKS networking

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_service_ip** | **str** | An IP address assigned to the Kubernetes DNS service. It must be within the Kubernetes service address range specified in serviceCidr. | [optional] 
**docker_bridge_cidr** | **str** | A CIDR notation IP range assigned to the Docker bridge network. It must not overlap with any Subnet IP ranges or the Kubernetes service address range. | [optional] 
**service_cidr** | **str** | A CIDR notation IP range from which to assign service cluster IPs. It must not overlap with any Subnet IP ranges. | [optional] 
**subnet_id** | **str** | Virtual network subnet resource ID the compute nodes belong to | [optional] 

## Example

```python
from openapi_client.models.aks_networking_configuration import AksNetworkingConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AksNetworkingConfiguration from a JSON string
aks_networking_configuration_instance = AksNetworkingConfiguration.from_json(json)
# print the JSON string representation of the object
print(AksNetworkingConfiguration.to_json())

# convert the object into a dict
aks_networking_configuration_dict = aks_networking_configuration_instance.to_dict()
# create an instance of AksNetworkingConfiguration from a dict
aks_networking_configuration_from_dict = AksNetworkingConfiguration.from_dict(aks_networking_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


