# NodeTypeDescription

Describes a node type in the cluster, each node type represents sub set of nodes in the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_ports** | [**EndpointRangeDescription**](EndpointRangeDescription.md) |  | [optional] 
**capacities** | **Dict[str, str]** | The capacity tags applied to the nodes in the node type, the cluster resource manager uses these tags to understand how much resource a node has. | [optional] 
**client_connection_endpoint_port** | **int** | The TCP cluster management endpoint port. | 
**durability_level** | [**DurabilityLevel**](DurabilityLevel.md) |  | [optional] 
**ephemeral_ports** | [**EndpointRangeDescription**](EndpointRangeDescription.md) |  | [optional] 
**http_gateway_endpoint_port** | **int** | The HTTP cluster management endpoint port. | 
**is_primary** | **bool** | The node type on which system services will run. Only one node type should be marked as primary. Primary node type cannot be deleted or changed for existing clusters. | 
**name** | **str** | The name of the node type. | 
**placement_properties** | **Dict[str, str]** | The placement tags applied to nodes in the node type, which can be used to indicate where certain services (workload) should run. | [optional] 
**reverse_proxy_endpoint_port** | **int** | The endpoint used by reverse proxy. | [optional] 
**vm_instance_count** | **int** | The number of nodes in the node type. This count should match the capacity property in the corresponding VirtualMachineScaleSet resource. | 

## Example

```python
from openapi_client.models.node_type_description import NodeTypeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of NodeTypeDescription from a JSON string
node_type_description_instance = NodeTypeDescription.from_json(json)
# print the JSON string representation of the object
print(NodeTypeDescription.to_json())

# convert the object into a dict
node_type_description_dict = node_type_description_instance.to_dict()
# create an instance of NodeTypeDescription from a dict
node_type_description_from_dict = NodeTypeDescription.from_dict(node_type_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


