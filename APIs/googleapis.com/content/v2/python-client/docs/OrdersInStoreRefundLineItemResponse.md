# OrdersInStoreRefundLineItemResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_status** | **str** | The status of the execution. Acceptable values are: - \&quot;&#x60;duplicate&#x60;\&quot; - \&quot;&#x60;executed&#x60;\&quot;  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#ordersInStoreRefundLineItemResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.orders_in_store_refund_line_item_response import OrdersInStoreRefundLineItemResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersInStoreRefundLineItemResponse from a JSON string
orders_in_store_refund_line_item_response_instance = OrdersInStoreRefundLineItemResponse.from_json(json)
# print the JSON string representation of the object
print(OrdersInStoreRefundLineItemResponse.to_json())

# convert the object into a dict
orders_in_store_refund_line_item_response_dict = orders_in_store_refund_line_item_response_instance.to_dict()
# create an instance of OrdersInStoreRefundLineItemResponse from a dict
orders_in_store_refund_line_item_response_from_dict = OrdersInStoreRefundLineItemResponse.from_dict(orders_in_store_refund_line_item_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


