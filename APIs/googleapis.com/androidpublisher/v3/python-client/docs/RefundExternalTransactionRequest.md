# RefundExternalTransactionRequest

A request to refund an existing external transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_refund** | **object** | A full refund of the remaining amount of a transaction. | [optional] 
**partial_refund** | [**PartialRefund**](PartialRefund.md) |  | [optional] 
**refund_time** | **str** | Required. The time that the transaction was refunded. | [optional] 

## Example

```python
from openapi_client.models.refund_external_transaction_request import RefundExternalTransactionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RefundExternalTransactionRequest from a JSON string
refund_external_transaction_request_instance = RefundExternalTransactionRequest.from_json(json)
# print the JSON string representation of the object
print(RefundExternalTransactionRequest.to_json())

# convert the object into a dict
refund_external_transaction_request_dict = refund_external_transaction_request_instance.to_dict()
# create an instance of RefundExternalTransactionRequest from a dict
refund_external_transaction_request_from_dict = RefundExternalTransactionRequest.from_dict(refund_external_transaction_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


