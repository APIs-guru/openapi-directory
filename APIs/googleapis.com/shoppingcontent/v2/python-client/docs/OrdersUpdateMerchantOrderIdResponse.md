# OrdersUpdateMerchantOrderIdResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_status** | **str** | The status of the execution. Acceptable values are: - \&quot;&#x60;duplicate&#x60;\&quot; - \&quot;&#x60;executed&#x60;\&quot;  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#ordersUpdateMerchantOrderIdResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.orders_update_merchant_order_id_response import OrdersUpdateMerchantOrderIdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersUpdateMerchantOrderIdResponse from a JSON string
orders_update_merchant_order_id_response_instance = OrdersUpdateMerchantOrderIdResponse.from_json(json)
# print the JSON string representation of the object
print(OrdersUpdateMerchantOrderIdResponse.to_json())

# convert the object into a dict
orders_update_merchant_order_id_response_dict = orders_update_merchant_order_id_response_instance.to_dict()
# create an instance of OrdersUpdateMerchantOrderIdResponse from a dict
orders_update_merchant_order_id_response_from_dict = OrdersUpdateMerchantOrderIdResponse.from_dict(orders_update_merchant_order_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


