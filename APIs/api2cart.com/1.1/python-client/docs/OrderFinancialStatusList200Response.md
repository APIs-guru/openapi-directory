# OrderFinancialStatusList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**OrderFinancialStatusList200ResponseResult**](OrderFinancialStatusList200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.order_financial_status_list200_response import OrderFinancialStatusList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFinancialStatusList200Response from a JSON string
order_financial_status_list200_response_instance = OrderFinancialStatusList200Response.from_json(json)
# print the JSON string representation of the object
print(OrderFinancialStatusList200Response.to_json())

# convert the object into a dict
order_financial_status_list200_response_dict = order_financial_status_list200_response_instance.to_dict()
# create an instance of OrderFinancialStatusList200Response from a dict
order_financial_status_list200_response_from_dict = OrderFinancialStatusList200Response.from_dict(order_financial_status_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


