# OrderStatusList200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cart_order_statuses** | [**List[OrderFinancialStatusList200ResponseResultOrderFinancialStatusesInner]**](OrderFinancialStatusList200ResponseResultOrderFinancialStatusesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.order_status_list200_response_result import OrderStatusList200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of OrderStatusList200ResponseResult from a JSON string
order_status_list200_response_result_instance = OrderStatusList200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(OrderStatusList200ResponseResult.to_json())

# convert the object into a dict
order_status_list200_response_result_dict = order_status_list200_response_result_instance.to_dict()
# create an instance of OrderStatusList200ResponseResult from a dict
order_status_list200_response_result_from_dict = OrderStatusList200ResponseResult.from_dict(order_status_list200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


