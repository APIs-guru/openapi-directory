# NetworkConfig

NetworkConfig reports the relative names of network & subnetwork.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datapath_provider** | **str** | The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation. | [optional] 
**default_snat_status** | [**DefaultSnatStatus**](DefaultSnatStatus.md) |  | [optional] 
**dns_config** | [**DNSConfig**](DNSConfig.md) |  | [optional] 
**enable_fqdn_network_policy** | **bool** | Whether FQDN Network Policy is enabled on this cluster. | [optional] 
**enable_intra_node_visibility** | **bool** | Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network. | [optional] 
**enable_l4ilb_subsetting** | **bool** | Whether L4ILB Subsetting is enabled for this cluster. | [optional] 
**enable_multi_networking** | **bool** | Whether multi-networking is enabled for this cluster. | [optional] 
**gateway_api_config** | [**GatewayAPIConfig**](GatewayAPIConfig.md) |  | [optional] 
**in_transit_encryption_config** | **str** | Specify the details of in-transit encryption. | [optional] 
**network** | **str** | Output only. The relative name of the Google Compute Engine network(https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. Example: projects/my-project/global/networks/my-network | [optional] 
**network_performance_config** | [**ClusterNetworkPerformanceConfig**](ClusterNetworkPerformanceConfig.md) |  | [optional] 
**private_ipv6_google_access** | **str** | The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4) | [optional] 
**service_external_ips_config** | [**ServiceExternalIPsConfig**](ServiceExternalIPsConfig.md) |  | [optional] 
**subnetwork** | **str** | Output only. The relative name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/vpc) to which the cluster is connected. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet | [optional] 

## Example

```python
from openapi_client.models.network_config import NetworkConfig

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkConfig from a JSON string
network_config_instance = NetworkConfig.from_json(json)
# print the JSON string representation of the object
print(NetworkConfig.to_json())

# convert the object into a dict
network_config_dict = network_config_instance.to_dict()
# create an instance of NetworkConfig from a dict
network_config_from_dict = NetworkConfig.from_dict(network_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


