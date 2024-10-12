# ResponseOrderListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**order** | [**List[Order]**](Order.md) |  | [optional] 
**orders_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.response_order_list_result import ResponseOrderListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseOrderListResult from a JSON string
response_order_list_result_instance = ResponseOrderListResult.from_json(json)
# print the JSON string representation of the object
print(ResponseOrderListResult.to_json())

# convert the object into a dict
response_order_list_result_dict = response_order_list_result_instance.to_dict()
# create an instance of ResponseOrderListResult from a dict
response_order_list_result_from_dict = ResponseOrderListResult.from_dict(response_order_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


