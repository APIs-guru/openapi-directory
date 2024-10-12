# Node

A TPU instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_type** | **str** | Required. The type of hardware accelerators associated with this node. | [optional] 
**api_version** | **str** | Output only. The API version that created this Node. | [optional] [readonly] 
**cidr_block** | **str** | The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user&#39;s provided network, or the provided network is peered with another network that is using that CIDR block. | [optional] 
**create_time** | **str** | Output only. The time when the node was created. | [optional] [readonly] 
**description** | **str** | The user-supplied description of the TPU. Maximum of 512 characters. | [optional] 
**health** | **str** | The health status of the TPU node. | [optional] 
**health_description** | **str** | Output only. If this field is populated, it contains a description of why the TPU Node is unhealthy. | [optional] [readonly] 
**ip_address** | **str** | Output only. DEPRECATED! Use network_endpoints instead. The network address for the TPU Node as visible to Compute Engine instances. | [optional] 
**labels** | **Dict[str, str]** | Resource labels to represent user-provided metadata. | [optional] 
**name** | **str** | Output only. Immutable. The name of the TPU | [optional] [readonly] 
**network** | **str** | The name of a network they wish to peer the TPU node to. It must be a preexisting Compute Engine network inside of the project on which this API has been activated. If none is provided, \&quot;default\&quot; will be used. | [optional] 
**network_endpoints** | [**List[NetworkEndpoint]**](NetworkEndpoint.md) | Output only. The network endpoints where TPU workers can be accessed and sent work. It is recommended that Tensorflow clients of the node reach out to the 0th entry in this map first. | [optional] [readonly] 
**port** | **str** | Output only. DEPRECATED! Use network_endpoints instead. The network port for the TPU Node as visible to Compute Engine instances. | [optional] 
**scheduling_config** | [**SchedulingConfig**](SchedulingConfig.md) |  | [optional] 
**service_account** | **str** | Output only. The service account used to run the tensor flow services within the node. To share resources, including Google Cloud Storage data, with the Tensorflow job running in the Node, this account must have permissions to that data. | [optional] [readonly] 
**state** | **str** | Output only. The current state for the TPU Node. | [optional] [readonly] 
**symptoms** | [**List[Symptom]**](Symptom.md) | Output only. The Symptoms that have occurred to the TPU Node. | [optional] [readonly] 
**tensorflow_version** | **str** | Required. The version of Tensorflow running in the Node. | [optional] 
**use_service_networking** | **bool** | Whether the VPC peering for the node is set up through Service Networking API. The VPC Peering should be set up before provisioning the node. If this field is set, cidr_block field should not be specified. If the network, that you want to peer the TPU Node to, is Shared VPC networks, the node must be created with this this field enabled. | [optional] 

## Example

```python
from openapi_client.models.node import Node

# TODO update the JSON string below
json = "{}"
# create an instance of Node from a JSON string
node_instance = Node.from_json(json)
# print the JSON string representation of the object
print(Node.to_json())

# convert the object into a dict
node_dict = node_instance.to_dict()
# create an instance of Node from a dict
node_from_dict = Node.from_dict(node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


