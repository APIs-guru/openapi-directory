# OrdersListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#ordersListResponse\&quot;. | [optional] 
**next_page_token** | **str** | The token for the retrieval of the next page of orders. | [optional] 
**resources** | [**List[Order]**](Order.md) |  | [optional] 

## Example

```python
from openapi_client.models.orders_list_response import OrdersListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersListResponse from a JSON string
orders_list_response_instance = OrdersListResponse.from_json(json)
# print the JSON string representation of the object
print(OrdersListResponse.to_json())

# convert the object into a dict
orders_list_response_dict = orders_list_response_instance.to_dict()
# create an instance of OrdersListResponse from a dict
orders_list_response_from_dict = OrdersListResponse.from_dict(orders_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


