# BlockchainMember

Payload of the blockchain member which is exposed in the request/response of the resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BlockchainMemberProperties**](BlockchainMemberProperties.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**location** | **str** | The GEO location of the blockchain service. | [optional] 
**tags** | **Dict[str, str]** | Tags of the service which is a list of key value pairs that describes the resource. | [optional] 
**id** | **str** | Fully qualified resource Id of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the service - e.g. \&quot;Microsoft.Blockchain\&quot; | [optional] [readonly] 

## Example

```python
from openapi_client.models.blockchain_member import BlockchainMember

# TODO update the JSON string below
json = "{}"
# create an instance of BlockchainMember from a JSON string
blockchain_member_instance = BlockchainMember.from_json(json)
# print the JSON string representation of the object
print(BlockchainMember.to_json())

# convert the object into a dict
blockchain_member_dict = blockchain_member_instance.to_dict()
# create an instance of BlockchainMember from a dict
blockchain_member_from_dict = BlockchainMember.from_dict(blockchain_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


