# NetworkPolicy

Represents a network policy resource. Network policies are regional resources. You can use a network policy to enable or disable internet access and external IP access. Network policies are associated with a VMware Engine network, which might span across regions. For a given region, a network policy applies to all private clouds in the VMware Engine network associated with the policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation time of this resource. | [optional] [readonly] 
**description** | **str** | Optional. User-provided description for this network policy. | [optional] 
**edge_services_cidr** | **str** | Required. IP address range in CIDR notation used to create internet access and external IP access. An RFC 1918 CIDR block, with a \&quot;/26\&quot; prefix, is required. The range cannot overlap with any prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network. | [optional] 
**external_ip** | [**NetworkService**](NetworkService.md) |  | [optional] 
**internet_access** | [**NetworkService**](NetworkService.md) |  | [optional] 
**name** | **str** | Output only. The resource name of this network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: &#x60;projects/my-project/locations/us-central1/networkPolicies/my-network-policy&#x60; | [optional] [readonly] 
**uid** | **str** | Output only. System-generated unique identifier for the resource. | [optional] [readonly] 
**update_time** | **str** | Output only. Last update time of this resource. | [optional] [readonly] 
**vmware_engine_network** | **str** | Optional. The relative resource name of the VMware Engine network. Specify the name in the following form: &#x60;projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}&#x60; where &#x60;{project}&#x60; can either be a project number or a project ID. | [optional] 
**vmware_engine_network_canonical** | **str** | Output only. The canonical name of the VMware Engine network in the form: &#x60;projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.network_policy import NetworkPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkPolicy from a JSON string
network_policy_instance = NetworkPolicy.from_json(json)
# print the JSON string representation of the object
print(NetworkPolicy.to_json())

# convert the object into a dict
network_policy_dict = network_policy_instance.to_dict()
# create an instance of NetworkPolicy from a dict
network_policy_from_dict = NetworkPolicy.from_dict(network_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


