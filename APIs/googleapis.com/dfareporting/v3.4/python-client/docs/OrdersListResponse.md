# OrdersListResponse

Order List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#ordersListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 
**orders** | [**List[Order]**](Order.md) | Order collection. | [optional] 

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


