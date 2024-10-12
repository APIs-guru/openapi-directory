# OrderreturnsRefundOperation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_refund** | **bool** | If true, the item will be fully refunded. Allowed only when payment_type is FOP. Merchant can choose this refund option to indicate the full remaining amount of corresponding object to be refunded to the customer through FOP. | [optional] 
**partial_refund** | [**OrderreturnsPartialRefund**](OrderreturnsPartialRefund.md) |  | [optional] 
**payment_type** | **str** | The payment way of issuing refund. Default value is ORIGINAL_FOP if not set. | [optional] 
**reason_text** | **str** | The explanation of the reason. | [optional] 
**return_refund_reason** | **str** | Code of the refund reason. | [optional] 

## Example

```python
from openapi_client.models.orderreturns_refund_operation import OrderreturnsRefundOperation

# TODO update the JSON string below
json = "{}"
# create an instance of OrderreturnsRefundOperation from a JSON string
orderreturns_refund_operation_instance = OrderreturnsRefundOperation.from_json(json)
# print the JSON string representation of the object
print(OrderreturnsRefundOperation.to_json())

# convert the object into a dict
orderreturns_refund_operation_dict = orderreturns_refund_operation_instance.to_dict()
# create an instance of OrderreturnsRefundOperation from a dict
orderreturns_refund_operation_from_dict = OrderreturnsRefundOperation.from_dict(orderreturns_refund_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


