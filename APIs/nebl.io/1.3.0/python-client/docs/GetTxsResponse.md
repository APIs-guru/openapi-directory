# GetTxsResponse

Object containing an array of transaction objects

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pages_total** | **float** | Number of pages of transactions | [optional] 
**txs** | [**List[GetTxResponse]**](GetTxResponse.md) | Array of transaction objects | [optional] 

## Example

```python
from openapi_client.models.get_txs_response import GetTxsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetTxsResponse from a JSON string
get_txs_response_instance = GetTxsResponse.from_json(json)
# print the JSON string representation of the object
print(GetTxsResponse.to_json())

# convert the object into a dict
get_txs_response_dict = get_txs_response_instance.to_dict()
# create an instance of GetTxsResponse from a dict
get_txs_response_from_dict = GetTxsResponse.from_dict(get_txs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


