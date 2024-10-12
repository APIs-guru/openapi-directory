# OrdersGetByMerchantOrderIdResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#ordersGetByMerchantOrderIdResponse\&quot;. | [optional] 
**order** | [**Order**](Order.md) |  | [optional] 

## Example

```python
from openapi_client.models.orders_get_by_merchant_order_id_response import OrdersGetByMerchantOrderIdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersGetByMerchantOrderIdResponse from a JSON string
orders_get_by_merchant_order_id_response_instance = OrdersGetByMerchantOrderIdResponse.from_json(json)
# print the JSON string representation of the object
print(OrdersGetByMerchantOrderIdResponse.to_json())

# convert the object into a dict
orders_get_by_merchant_order_id_response_dict = orders_get_by_merchant_order_id_response_instance.to_dict()
# create an instance of OrdersGetByMerchantOrderIdResponse from a dict
orders_get_by_merchant_order_id_response_from_dict = OrdersGetByMerchantOrderIdResponse.from_dict(orders_get_by_merchant_order_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


