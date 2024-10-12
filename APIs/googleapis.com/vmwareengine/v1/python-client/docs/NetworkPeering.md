# NetworkPeering

Details of a network peering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Creation time of this resource. | [optional] [readonly] 
**description** | **str** | Optional. User-provided description for this network peering. | [optional] 
**exchange_subnet_routes** | **bool** | Optional. True if full mesh connectivity is created and managed automatically between peered networks; false otherwise. Currently this field is always true because Google Compute Engine automatically creates and manages subnetwork routes between two VPC networks when peering state is &#39;ACTIVE&#39;. | [optional] 
**export_custom_routes** | **bool** | Optional. True if custom routes are exported to the peered network; false otherwise. The default value is true. | [optional] 
**export_custom_routes_with_public_ip** | **bool** | Optional. True if all subnet routes with a public IP address range are exported; false otherwise. The default value is true. IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always exported to peers and are not controlled by this field. | [optional] 
**import_custom_routes** | **bool** | Optional. True if custom routes are imported from the peered network; false otherwise. The default value is true. | [optional] 
**import_custom_routes_with_public_ip** | **bool** | Optional. True if all subnet routes with public IP address range are imported; false otherwise. The default value is true. IPv4 special-use ranges (https://en.wikipedia.org/wiki/IPv4#Special_addresses) are always imported to peers and are not controlled by this field. | [optional] 
**name** | **str** | Output only. The resource name of the network peering. NetworkPeering is a global resource and location can only be global. Resource names are scheme-less URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: &#x60;projects/my-project/locations/global/networkPeerings/my-peering&#x60; | [optional] [readonly] 
**peer_mtu** | **int** | Optional. Maximum transmission unit (MTU) in bytes. The default value is &#x60;1500&#x60;. If a value of &#x60;0&#x60; is provided for this field, VMware Engine uses the default value instead. | [optional] 
**peer_network** | **str** | Required. The relative resource name of the network to peer with a standard VMware Engine network. The provided network can be a consumer VPC network or another standard VMware Engine network. If the &#x60;peer_network_type&#x60; is VMWARE_ENGINE_NETWORK, specify the name in the form: &#x60;projects/{project}/locations/global/vmwareEngineNetworks/{vmware_engine_network_id}&#x60;. Otherwise specify the name in the form: &#x60;projects/{project}/global/networks/{network_id}&#x60;, where &#x60;{project}&#x60; can either be a project number or a project ID. | [optional] 
**peer_network_type** | **str** | Required. The type of the network to peer with the VMware Engine network. | [optional] 
**state** | **str** | Output only. State of the network peering. This field has a value of &#39;ACTIVE&#39; when there&#39;s a matching configuration in the peer network. New values may be added to this enum when appropriate. | [optional] [readonly] 
**state_details** | **str** | Output only. Output Only. Details about the current state of the network peering. | [optional] [readonly] 
**uid** | **str** | Output only. System-generated unique identifier for the resource. | [optional] [readonly] 
**update_time** | **str** | Output only. Last update time of this resource. | [optional] [readonly] 
**vmware_engine_network** | **str** | Required. The relative resource name of the VMware Engine network. Specify the name in the following form: &#x60;projects/{project}/locations/{location}/vmwareEngineNetworks/{vmware_engine_network_id}&#x60; where &#x60;{project}&#x60; can either be a project number or a project ID. | [optional] 

## Example

```python
from openapi_client.models.network_peering import NetworkPeering

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkPeering from a JSON string
network_peering_instance = NetworkPeering.from_json(json)
# print the JSON string representation of the object
print(NetworkPeering.to_json())

# convert the object into a dict
network_peering_dict = network_peering_instance.to_dict()
# create an instance of NetworkPeering from a dict
network_peering_from_dict = NetworkPeering.from_dict(network_peering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


