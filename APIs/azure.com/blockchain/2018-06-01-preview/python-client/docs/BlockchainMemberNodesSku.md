# BlockchainMemberNodesSku

Payload of the blockchain member nodes Sku for a blockchain member.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | Gets or sets the nodes capacity. | [optional] 

## Example

```python
from openapi_client.models.blockchain_member_nodes_sku import BlockchainMemberNodesSku

# TODO update the JSON string below
json = "{}"
# create an instance of BlockchainMemberNodesSku from a JSON string
blockchain_member_nodes_sku_instance = BlockchainMemberNodesSku.from_json(json)
# print the JSON string representation of the object
print(BlockchainMemberNodesSku.to_json())

# convert the object into a dict
blockchain_member_nodes_sku_dict = blockchain_member_nodes_sku_instance.to_dict()
# create an instance of BlockchainMemberNodesSku from a dict
blockchain_member_nodes_sku_from_dict = BlockchainMemberNodesSku.from_dict(blockchain_member_nodes_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


