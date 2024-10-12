# AccountCartList200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carts** | [**List[AccountCartList200ResponseResultCartsInner]**](AccountCartList200ResponseResultCartsInner.md) |  | [optional] 
**carts_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.account_cart_list200_response_result import AccountCartList200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of AccountCartList200ResponseResult from a JSON string
account_cart_list200_response_result_instance = AccountCartList200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(AccountCartList200ResponseResult.to_json())

# convert the object into a dict
account_cart_list200_response_result_dict = account_cart_list200_response_result_instance.to_dict()
# create an instance of AccountCartList200ResponseResult from a dict
account_cart_list200_response_result_from_dict = AccountCartList200ResponseResult.from_dict(account_cart_list200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


