# OrdersCreateTestReturnResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#ordersCreateTestReturnResponse\&quot;. | [optional] 
**return_id** | **str** | The ID of the newly created test order return. | [optional] 

## Example

```python
from openapi_client.models.orders_create_test_return_response import OrdersCreateTestReturnResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCreateTestReturnResponse from a JSON string
orders_create_test_return_response_instance = OrdersCreateTestReturnResponse.from_json(json)
# print the JSON string representation of the object
print(OrdersCreateTestReturnResponse.to_json())

# convert the object into a dict
orders_create_test_return_response_dict = orders_create_test_return_response_instance.to_dict()
# create an instance of OrdersCreateTestReturnResponse from a dict
orders_create_test_return_response_from_dict = OrdersCreateTestReturnResponse.from_dict(orders_create_test_return_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


