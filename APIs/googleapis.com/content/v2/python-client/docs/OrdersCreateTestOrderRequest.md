# OrdersCreateTestOrderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The CLDR territory code of the country of the test order to create. Affects the currency and addresses of orders created via &#x60;template_name&#x60;, or the addresses of orders created via &#x60;test_order&#x60;. Acceptable values are: - \&quot;&#x60;US&#x60;\&quot; - \&quot;&#x60;FR&#x60;\&quot; Defaults to &#x60;US&#x60;. | [optional] 
**template_name** | **str** | The test order template to use. Specify as an alternative to &#x60;testOrder&#x60; as a shortcut for retrieving a template and then creating an order using that template. Acceptable values are: - \&quot;&#x60;template1&#x60;\&quot; - \&quot;&#x60;template1a&#x60;\&quot; - \&quot;&#x60;template1b&#x60;\&quot; - \&quot;&#x60;template2&#x60;\&quot; - \&quot;&#x60;template3&#x60;\&quot;  | [optional] 
**test_order** | [**TestOrder**](TestOrder.md) |  | [optional] 

## Example

```python
from openapi_client.models.orders_create_test_order_request import OrdersCreateTestOrderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCreateTestOrderRequest from a JSON string
orders_create_test_order_request_instance = OrdersCreateTestOrderRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersCreateTestOrderRequest.to_json())

# convert the object into a dict
orders_create_test_order_request_dict = orders_create_test_order_request_instance.to_dict()
# create an instance of OrdersCreateTestOrderRequest from a dict
orders_create_test_order_request_from_dict = OrdersCreateTestOrderRequest.from_dict(orders_create_test_order_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


