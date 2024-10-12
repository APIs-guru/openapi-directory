# BroadcastTxRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tx_hex** | **str** | Signed raw tx hex to broadcast | 

## Example

```python
from openapi_client.models.broadcast_tx_request import BroadcastTxRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BroadcastTxRequest from a JSON string
broadcast_tx_request_instance = BroadcastTxRequest.from_json(json)
# print the JSON string representation of the object
print(BroadcastTxRequest.to_json())

# convert the object into a dict
broadcast_tx_request_dict = broadcast_tx_request_instance.to_dict()
# create an instance of BroadcastTxRequest from a dict
broadcast_tx_request_from_dict = BroadcastTxRequest.from_dict(broadcast_tx_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


