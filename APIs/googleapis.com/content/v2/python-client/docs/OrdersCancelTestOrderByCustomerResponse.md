# OrdersCancelTestOrderByCustomerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#ordersCancelTestOrderByCustomerResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.orders_cancel_test_order_by_customer_response import OrdersCancelTestOrderByCustomerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCancelTestOrderByCustomerResponse from a JSON string
orders_cancel_test_order_by_customer_response_instance = OrdersCancelTestOrderByCustomerResponse.from_json(json)
# print the JSON string representation of the object
print(OrdersCancelTestOrderByCustomerResponse.to_json())

# convert the object into a dict
orders_cancel_test_order_by_customer_response_dict = orders_cancel_test_order_by_customer_response_instance.to_dict()
# create an instance of OrdersCancelTestOrderByCustomerResponse from a dict
orders_cancel_test_order_by_customer_response_from_dict = OrdersCancelTestOrderByCustomerResponse.from_dict(orders_cancel_test_order_by_customer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


