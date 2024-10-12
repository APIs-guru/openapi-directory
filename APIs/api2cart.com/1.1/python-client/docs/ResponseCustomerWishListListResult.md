# ResponseCustomerWishListListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**total_count** | **int** |  | [optional] 
**wish_lists** | [**List[CustomerWishList]**](CustomerWishList.md) |  | [optional] 

## Example

```python
from openapi_client.models.response_customer_wish_list_list_result import ResponseCustomerWishListListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseCustomerWishListListResult from a JSON string
response_customer_wish_list_list_result_instance = ResponseCustomerWishListListResult.from_json(json)
# print the JSON string representation of the object
print(ResponseCustomerWishListListResult.to_json())

# convert the object into a dict
response_customer_wish_list_list_result_dict = response_customer_wish_list_list_result_instance.to_dict()
# create an instance of ResponseCustomerWishListListResult from a dict
response_customer_wish_list_list_result_from_dict = ResponseCustomerWishListListResult.from_dict(response_customer_wish_list_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


