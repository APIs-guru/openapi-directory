# BlockchainNode

A representation of a blockchain node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockchain_type** | **str** | Immutable. The blockchain type of the node. | [optional] 
**connection_info** | [**ConnectionInfo**](ConnectionInfo.md) |  | [optional] 
**create_time** | **str** | Output only. The timestamp at which the blockchain node was first created. | [optional] [readonly] 
**ethereum_details** | [**EthereumDetails**](EthereumDetails.md) |  | [optional] 
**labels** | **Dict[str, str]** | User-provided key-value pairs. | [optional] 
**name** | **str** | Output only. The fully qualified name of the blockchain node. e.g. &#x60;projects/my-project/locations/us-central1/blockchainNodes/my-node&#x60;. | [optional] [readonly] 
**private_service_connect_enabled** | **bool** | Optional. When true, the node is only accessible via Private Service Connect; no public endpoints are exposed. Otherwise, the node is only accessible via public endpoints. Warning: Private Service Connect enabled nodes may require a manual migration effort to remain compatible with future versions of the product. If this feature is enabled, you will be notified of these changes along with any required action to avoid disruption. See https://cloud.google.com/vpc/docs/private-service-connect. | [optional] 
**state** | **str** | Output only. A status representing the state of the node. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp at which the blockchain node was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.blockchain_node import BlockchainNode

# TODO update the JSON string below
json = "{}"
# create an instance of BlockchainNode from a JSON string
blockchain_node_instance = BlockchainNode.from_json(json)
# print the JSON string representation of the object
print(BlockchainNode.to_json())

# convert the object into a dict
blockchain_node_dict = blockchain_node_instance.to_dict()
# create an instance of BlockchainNode from a dict
blockchain_node_from_dict = BlockchainNode.from_dict(blockchain_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


