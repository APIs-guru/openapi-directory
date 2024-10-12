# IPAllocationPolicy

Configuration for controlling how IPs are allocated in the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_pod_ranges_config** | [**AdditionalPodRangesConfig**](AdditionalPodRangesConfig.md) |  | [optional] 
**cluster_ipv4_cidr** | **str** | This field is deprecated, use cluster_ipv4_cidr_block. | [optional] 
**cluster_ipv4_cidr_block** | **str** | The IP address range for the cluster pod IPs. If this field is set, then &#x60;cluster.cluster_ipv4_cidr&#x60; must be left blank. This field is only applicable when &#x60;use_ip_aliases&#x60; is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. &#x60;/14&#x60;) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. &#x60;10.96.0.0/14&#x60;) from the RFC-1918 private networks (e.g. &#x60;10.0.0.0/8&#x60;, &#x60;172.16.0.0/12&#x60;, &#x60;192.168.0.0/16&#x60;) to pick a specific range to use. | [optional] 
**cluster_secondary_range_name** | **str** | The name of the secondary range to be used for the cluster CIDR block. The secondary range will be used for pod IP addresses. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases is true and create_subnetwork is false. | [optional] 
**create_subnetwork** | **bool** | Whether a new subnetwork will be created automatically for the cluster. This field is only applicable when &#x60;use_ip_aliases&#x60; is true. | [optional] 
**default_pod_ipv4_range_utilization** | **float** | Output only. [Output only] The utilization of the cluster default IPv4 range for the pod. The ratio is Usage/[Total number of IPs in the secondary range], Usage&#x3D;numNodes*numZones*podIPsPerNode. | [optional] [readonly] 
**ipv6_access_type** | **str** | The ipv6 access type (internal or external) when create_subnetwork is true | [optional] 
**node_ipv4_cidr** | **str** | This field is deprecated, use node_ipv4_cidr_block. | [optional] 
**node_ipv4_cidr_block** | **str** | The IP address range of the instance IPs in this cluster. This is applicable only if &#x60;create_subnetwork&#x60; is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. &#x60;/14&#x60;) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. &#x60;10.96.0.0/14&#x60;) from the RFC-1918 private networks (e.g. &#x60;10.0.0.0/8&#x60;, &#x60;172.16.0.0/12&#x60;, &#x60;192.168.0.0/16&#x60;) to pick a specific range to use. | [optional] 
**pod_cidr_overprovision_config** | [**PodCIDROverprovisionConfig**](PodCIDROverprovisionConfig.md) |  | [optional] 
**services_ipv4_cidr** | **str** | This field is deprecated, use services_ipv4_cidr_block. | [optional] 
**services_ipv4_cidr_block** | **str** | The IP address range of the services IPs in this cluster. If blank, a range will be automatically chosen with the default size. This field is only applicable when &#x60;use_ip_aliases&#x60; is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. &#x60;/14&#x60;) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. &#x60;10.96.0.0/14&#x60;) from the RFC-1918 private networks (e.g. &#x60;10.0.0.0/8&#x60;, &#x60;172.16.0.0/12&#x60;, &#x60;192.168.0.0/16&#x60;) to pick a specific range to use. | [optional] 
**services_ipv6_cidr_block** | **str** | Output only. [Output only] The services IPv6 CIDR block for the cluster. | [optional] [readonly] 
**services_secondary_range_name** | **str** | The name of the secondary range to be used as for the services CIDR block. The secondary range will be used for service ClusterIPs. This must be an existing secondary range associated with the cluster subnetwork. This field is only applicable with use_ip_aliases is true and create_subnetwork is false. | [optional] 
**stack_type** | **str** | The IP stack type of the cluster | [optional] 
**subnet_ipv6_cidr_block** | **str** | Output only. [Output only] The subnet&#39;s IPv6 CIDR block used by nodes and pods. | [optional] [readonly] 
**subnetwork_name** | **str** | A custom subnetwork name to be used if &#x60;create_subnetwork&#x60; is true. If this field is empty, then an automatic name will be chosen for the new subnetwork. | [optional] 
**tpu_ipv4_cidr_block** | **str** | The IP address range of the Cloud TPUs in this cluster. If unspecified, a range will be automatically chosen with the default size. This field is only applicable when &#x60;use_ip_aliases&#x60; is true. If unspecified, the range will use the default size. Set to /netmask (e.g. &#x60;/14&#x60;) to have a range chosen with a specific netmask. Set to a [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. &#x60;10.96.0.0/14&#x60;) from the RFC-1918 private networks (e.g. &#x60;10.0.0.0/8&#x60;, &#x60;172.16.0.0/12&#x60;, &#x60;192.168.0.0/16&#x60;) to pick a specific range to use. | [optional] 
**use_ip_aliases** | **bool** | Whether alias IPs will be used for pod IPs in the cluster. This is used in conjunction with use_routes. It cannot be true if use_routes is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode | [optional] 
**use_routes** | **bool** | Whether routes will be used for pod IPs in the cluster. This is used in conjunction with use_ip_aliases. It cannot be true if use_ip_aliases is true. If both use_ip_aliases and use_routes are false, then the server picks the default IP allocation mode | [optional] 

## Example

```python
from openapi_client.models.ip_allocation_policy import IPAllocationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of IPAllocationPolicy from a JSON string
ip_allocation_policy_instance = IPAllocationPolicy.from_json(json)
# print the JSON string representation of the object
print(IPAllocationPolicy.to_json())

# convert the object into a dict
ip_allocation_policy_dict = ip_allocation_policy_instance.to_dict()
# create an instance of IPAllocationPolicy from a dict
ip_allocation_policy_from_dict = IPAllocationPolicy.from_dict(ip_allocation_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


