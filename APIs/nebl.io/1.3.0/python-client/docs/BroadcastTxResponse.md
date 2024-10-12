# BroadcastTxResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**txid** | **str** | Txid of successfully broadcasted transaction | [optional] 

## Example

```python
from openapi_client.models.broadcast_tx_response import BroadcastTxResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BroadcastTxResponse from a JSON string
broadcast_tx_response_instance = BroadcastTxResponse.from_json(json)
# print the JSON string representation of the object
print(BroadcastTxResponse.to_json())

# convert the object into a dict
broadcast_tx_response_dict = broadcast_tx_response_instance.to_dict()
# create an instance of BroadcastTxResponse from a dict
broadcast_tx_response_from_dict = BroadcastTxResponse.from_dict(broadcast_tx_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


