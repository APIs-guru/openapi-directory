# OrdersUpdateMerchantOrderIdRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_order_id** | **str** | The merchant order id to be assigned to the order. Must be unique per merchant. | [optional] 
**operation_id** | **str** | The ID of the operation. Unique across all operations for a given order. | [optional] 

## Example

```python
from openapi_client.models.orders_update_merchant_order_id_request import OrdersUpdateMerchantOrderIdRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersUpdateMerchantOrderIdRequest from a JSON string
orders_update_merchant_order_id_request_instance = OrdersUpdateMerchantOrderIdRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersUpdateMerchantOrderIdRequest.to_json())

# convert the object into a dict
orders_update_merchant_order_id_request_dict = orders_update_merchant_order_id_request_instance.to_dict()
# create an instance of OrdersUpdateMerchantOrderIdRequest from a dict
orders_update_merchant_order_id_request_from_dict = OrdersUpdateMerchantOrderIdRequest.from_dict(orders_update_merchant_order_id_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


