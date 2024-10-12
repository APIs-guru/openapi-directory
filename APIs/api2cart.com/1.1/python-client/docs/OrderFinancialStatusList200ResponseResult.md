# OrderFinancialStatusList200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order_financial_statuses** | [**List[OrderFinancialStatusList200ResponseResultOrderFinancialStatusesInner]**](OrderFinancialStatusList200ResponseResultOrderFinancialStatusesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.order_financial_status_list200_response_result import OrderFinancialStatusList200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFinancialStatusList200ResponseResult from a JSON string
order_financial_status_list200_response_result_instance = OrderFinancialStatusList200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(OrderFinancialStatusList200ResponseResult.to_json())

# convert the object into a dict
order_financial_status_list200_response_result_dict = order_financial_status_list200_response_result_instance.to_dict()
# create an instance of OrderFinancialStatusList200ResponseResult from a dict
order_financial_status_list200_response_result_from_dict = OrderFinancialStatusList200ResponseResult.from_dict(order_financial_status_list200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


