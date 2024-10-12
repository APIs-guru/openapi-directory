# BlockchainMemberCollection

Collection of the blockchain member payload which is exposed in the request/response of the resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the URL, that the client should use to fetch the next page (per server side paging).  It&#39;s null for now, added for future use. | [optional] 
**value** | [**List[BlockchainMember]**](BlockchainMember.md) | Gets or sets the collection of blockchain members. | [optional] 

## Example

```python
from openapi_client.models.blockchain_member_collection import BlockchainMemberCollection

# TODO update the JSON string below
json = "{}"
# create an instance of BlockchainMemberCollection from a JSON string
blockchain_member_collection_instance = BlockchainMemberCollection.from_json(json)
# print the JSON string representation of the object
print(BlockchainMemberCollection.to_json())

# convert the object into a dict
blockchain_member_collection_dict = blockchain_member_collection_instance.to_dict()
# create an instance of BlockchainMemberCollection from a dict
blockchain_member_collection_from_dict = BlockchainMemberCollection.from_dict(blockchain_member_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


