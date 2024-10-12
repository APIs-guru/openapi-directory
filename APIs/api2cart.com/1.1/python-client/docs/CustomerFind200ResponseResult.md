# CustomerFind200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.customer_find200_response_result import CustomerFind200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerFind200ResponseResult from a JSON string
customer_find200_response_result_instance = CustomerFind200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(CustomerFind200ResponseResult.to_json())

# convert the object into a dict
customer_find200_response_result_dict = customer_find200_response_result_instance.to_dict()
# create an instance of CustomerFind200ResponseResult from a dict
customer_find200_response_result_from_dict = CustomerFind200ResponseResult.from_dict(customer_find200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


