# OrderFind200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | [**List[Order]**](Order.md) |  | [optional] 

## Example

```python
from openapi_client.models.order_find200_response_result import OrderFind200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFind200ResponseResult from a JSON string
order_find200_response_result_instance = OrderFind200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(OrderFind200ResponseResult.to_json())

# convert the object into a dict
order_find200_response_result_dict = order_find200_response_result_instance.to_dict()
# create an instance of OrderFind200ResponseResult from a dict
order_find200_response_result_from_dict = OrderFind200ResponseResult.from_dict(order_find200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


