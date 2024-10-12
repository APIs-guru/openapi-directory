# OrdersCreateTestOrderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#ordersCreateTestOrderResponse&#x60;\&quot;. | [optional] 
**order_id** | **str** | The ID of the newly created test order. | [optional] 

## Example

```python
from openapi_client.models.orders_create_test_order_response import OrdersCreateTestOrderResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCreateTestOrderResponse from a JSON string
orders_create_test_order_response_instance = OrdersCreateTestOrderResponse.from_json(json)
# print the JSON string representation of the object
print(OrdersCreateTestOrderResponse.to_json())

# convert the object into a dict
orders_create_test_order_response_dict = orders_create_test_order_response_instance.to_dict()
# create an instance of OrdersCreateTestOrderResponse from a dict
orders_create_test_order_response_from_dict = OrdersCreateTestOrderResponse.from_dict(orders_create_test_order_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


