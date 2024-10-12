# GetBlockResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bits** | **str** | Block bits | [optional] 
**confirmations** | **float** | Number of confirmations block has | [optional] 
**difficulty** | **float** | Block difficulty | [optional] 
**hash** | **str** | Block hash | [optional] 
**height** | **float** | Block height | [optional] 
**merkleroot** | **str** | Merkleroot of block | [optional] 
**nextblockhash** | **str** | Hash of the next block on the chain | [optional] 
**nonce** | **float** | Block nonce | [optional] 
**previousblockhash** | **str** | Hash of the previous block on the chain | [optional] 
**reward** | **float** | Number of NEBL awarded in this block | [optional] 
**size** | **float** | Block size in bytes | [optional] 
**time** | **float** | Block time relative to epoch | [optional] 
**tx** | **List[str]** | Array of tx ids in the block | [optional] 
**version** | **float** | Block version | [optional] 

## Example

```python
from openapi_client.models.get_block_response import GetBlockResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetBlockResponse from a JSON string
get_block_response_instance = GetBlockResponse.from_json(json)
# print the JSON string representation of the object
print(GetBlockResponse.to_json())

# convert the object into a dict
get_block_response_dict = get_block_response_instance.to_dict()
# create an instance of GetBlockResponse from a dict
get_block_response_from_dict = GetBlockResponse.from_dict(get_block_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


