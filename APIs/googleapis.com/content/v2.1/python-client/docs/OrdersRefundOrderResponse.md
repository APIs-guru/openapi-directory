# OrdersRefundOrderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_status** | **str** | The status of the execution. Acceptable values are: - \&quot;&#x60;duplicate&#x60;\&quot; - \&quot;&#x60;executed&#x60;\&quot;  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#ordersRefundOrderResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.orders_refund_order_response import OrdersRefundOrderResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersRefundOrderResponse from a JSON string
orders_refund_order_response_instance = OrdersRefundOrderResponse.from_json(json)
# print the JSON string representation of the object
print(OrdersRefundOrderResponse.to_json())

# convert the object into a dict
orders_refund_order_response_dict = orders_refund_order_response_instance.to_dict()
# create an instance of OrdersRefundOrderResponse from a dict
orders_refund_order_response_from_dict = OrdersRefundOrderResponse.from_dict(orders_refund_order_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


