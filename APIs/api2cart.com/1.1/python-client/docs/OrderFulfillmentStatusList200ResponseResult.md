# OrderFulfillmentStatusList200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_fulfillment_statuses** | [**List[OrderFinancialStatusList200ResponseResultOrderFinancialStatusesInner]**](OrderFinancialStatusList200ResponseResultOrderFinancialStatusesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.order_fulfillment_status_list200_response_result import OrderFulfillmentStatusList200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFulfillmentStatusList200ResponseResult from a JSON string
order_fulfillment_status_list200_response_result_instance = OrderFulfillmentStatusList200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(OrderFulfillmentStatusList200ResponseResult.to_json())

# convert the object into a dict
order_fulfillment_status_list200_response_result_dict = order_fulfillment_status_list200_response_result_instance.to_dict()
# create an instance of OrderFulfillmentStatusList200ResponseResult from a dict
order_fulfillment_status_list200_response_result_from_dict = OrderFulfillmentStatusList200ResponseResult.from_dict(order_fulfillment_status_list200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


