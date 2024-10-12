# OrderreturnsPartialRefund


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price_amount** | [**Price**](Price.md) |  | [optional] 
**tax_amount** | [**Price**](Price.md) |  | [optional] 

## Example

```python
from openapi_client.models.orderreturns_partial_refund import OrderreturnsPartialRefund

# TODO update the JSON string below
json = "{}"
# create an instance of OrderreturnsPartialRefund from a JSON string
orderreturns_partial_refund_instance = OrderreturnsPartialRefund.from_json(json)
# print the JSON string representation of the object
print(OrderreturnsPartialRefund.to_json())

# convert the object into a dict
orderreturns_partial_refund_dict = orderreturns_partial_refund_instance.to_dict()
# create an instance of OrderreturnsPartialRefund from a dict
orderreturns_partial_refund_from_dict = OrderreturnsPartialRefund.from_dict(orderreturns_partial_refund_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


