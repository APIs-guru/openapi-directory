# OrdersGetTestOrderTemplateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#ordersGetTestOrderTemplateResponse&#x60;\&quot;. | [optional] 
**template** | [**TestOrder**](TestOrder.md) |  | [optional] 

## Example

```python
from openapi_client.models.orders_get_test_order_template_response import OrdersGetTestOrderTemplateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersGetTestOrderTemplateResponse from a JSON string
orders_get_test_order_template_response_instance = OrdersGetTestOrderTemplateResponse.from_json(json)
# print the JSON string representation of the object
print(OrdersGetTestOrderTemplateResponse.to_json())

# convert the object into a dict
orders_get_test_order_template_response_dict = orders_get_test_order_template_response_instance.to_dict()
# create an instance of OrdersGetTestOrderTemplateResponse from a dict
orders_get_test_order_template_response_from_dict = OrdersGetTestOrderTemplateResponse.from_dict(orders_get_test_order_template_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


