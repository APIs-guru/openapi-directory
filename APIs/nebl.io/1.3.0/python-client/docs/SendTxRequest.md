# SendTxRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rawtx** | **str** | Signed raw tx hex to broadcast | 

## Example

```python
from openapi_client.models.send_tx_request import SendTxRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendTxRequest from a JSON string
send_tx_request_instance = SendTxRequest.from_json(json)
# print the JSON string representation of the object
print(SendTxRequest.to_json())

# convert the object into a dict
send_tx_request_dict = send_tx_request_instance.to_dict()
# create an instance of SendTxRequest from a dict
send_tx_request_from_dict = SendTxRequest.from_dict(send_tx_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


