# OrdersAdvanceTestOrderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#ordersAdvanceTestOrderResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.orders_advance_test_order_response import OrdersAdvanceTestOrderResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersAdvanceTestOrderResponse from a JSON string
orders_advance_test_order_response_instance = OrdersAdvanceTestOrderResponse.from_json(json)
# print the JSON string representation of the object
print(OrdersAdvanceTestOrderResponse.to_json())

# convert the object into a dict
orders_advance_test_order_response_dict = orders_advance_test_order_response_instance.to_dict()
# create an instance of OrdersAdvanceTestOrderResponse from a dict
orders_advance_test_order_response_from_dict = OrdersAdvanceTestOrderResponse.from_dict(orders_advance_test_order_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


