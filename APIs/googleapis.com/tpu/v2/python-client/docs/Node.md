# Node

A TPU instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accelerator_config** | [**AcceleratorConfig**](AcceleratorConfig.md) |  | [optional] 
**accelerator_type** | **str** | Optional. The type of hardware accelerators associated with this node. | [optional] 
**api_version** | **str** | Output only. The API version that created this Node. | [optional] [readonly] 
**cidr_block** | **str** | The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger block would be wasteful (a node can only consume one IP address). Errors will occur if the CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts with any subnetworks in the user&#39;s provided network, or the provided network is peered with another network that is using that CIDR block. | [optional] 
**create_time** | **str** | Output only. The time when the node was created. | [optional] [readonly] 
**data_disks** | [**List[AttachedDisk]**](AttachedDisk.md) | The additional data disks for the Node. | [optional] 
**description** | **str** | The user-supplied description of the TPU. Maximum of 512 characters. | [optional] 
**health** | **str** | The health status of the TPU node. | [optional] 
**health_description** | **str** | Output only. If this field is populated, it contains a description of why the TPU Node is unhealthy. | [optional] [readonly] 
**id** | **str** | Output only. The unique identifier for the TPU Node. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Resource labels to represent user-provided metadata. | [optional] 
**metadata** | **Dict[str, str]** | Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script | [optional] 
**multislice_node** | **bool** | Output only. Whether the Node belongs to a Multislice group. | [optional] [readonly] 
**name** | **str** | Output only. Immutable. The name of the TPU. | [optional] [readonly] 
**network_config** | [**NetworkConfig**](NetworkConfig.md) |  | [optional] 
**network_endpoints** | [**List[NetworkEndpoint]**](NetworkEndpoint.md) | Output only. The network endpoints where TPU workers can be accessed and sent work. It is recommended that runtime clients of the node reach out to the 0th entry in this map first. | [optional] [readonly] 
**queued_resource** | **str** | Output only. The qualified name of the QueuedResource that requested this Node. | [optional] [readonly] 
**runtime_version** | **str** | Required. The runtime version running in the Node. | [optional] 
**scheduling_config** | [**SchedulingConfig**](SchedulingConfig.md) |  | [optional] 
**service_account** | [**ServiceAccount**](ServiceAccount.md) |  | [optional] 
**shielded_instance_config** | [**ShieldedInstanceConfig**](ShieldedInstanceConfig.md) |  | [optional] 
**state** | **str** | Output only. The current state for the TPU Node. | [optional] [readonly] 
**symptoms** | [**List[Symptom]**](Symptom.md) | Output only. The Symptoms that have occurred to the TPU Node. | [optional] [readonly] 
**tags** | **List[str]** | Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls. | [optional] 

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


