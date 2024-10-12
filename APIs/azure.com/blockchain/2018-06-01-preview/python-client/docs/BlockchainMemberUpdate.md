# BlockchainMemberUpdate

Update the payload of the blockchain member which is exposed in the request/response of the resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BlockchainMemberPropertiesUpdate**](BlockchainMemberPropertiesUpdate.md) |  | [optional] 
**tags** | **Dict[str, str]** | Tags of the service which is a list of key value pairs that describes the resource. | [optional] 

## Example

```python
from openapi_client.models.blockchain_member_update import BlockchainMemberUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of BlockchainMemberUpdate from a JSON string
blockchain_member_update_instance = BlockchainMemberUpdate.from_json(json)
# print the JSON string representation of the object
print(BlockchainMemberUpdate.to_json())

# convert the object into a dict
blockchain_member_update_dict = blockchain_member_update_instance.to_dict()
# create an instance of BlockchainMemberUpdate from a dict
blockchain_member_update_from_dict = BlockchainMemberUpdate.from_dict(blockchain_member_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


