# OrdersCancelTestOrderByCustomerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason for the cancellation. Acceptable values are: - \&quot;&#x60;changedMind&#x60;\&quot; - \&quot;&#x60;orderedWrongItem&#x60;\&quot; - \&quot;&#x60;other&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.orders_cancel_test_order_by_customer_request import OrdersCancelTestOrderByCustomerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCancelTestOrderByCustomerRequest from a JSON string
orders_cancel_test_order_by_customer_request_instance = OrdersCancelTestOrderByCustomerRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersCancelTestOrderByCustomerRequest.to_json())

# convert the object into a dict
orders_cancel_test_order_by_customer_request_dict = orders_cancel_test_order_by_customer_request_instance.to_dict()
# create an instance of OrdersCancelTestOrderByCustomerRequest from a dict
orders_cancel_test_order_by_customer_request_from_dict = OrdersCancelTestOrderByCustomerRequest.from_dict(orders_cancel_test_order_by_customer_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


