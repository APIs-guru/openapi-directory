# AccountCartAdd200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**AccountCartAdd200ResponseResult**](AccountCartAdd200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.account_cart_add200_response import AccountCartAdd200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AccountCartAdd200Response from a JSON string
account_cart_add200_response_instance = AccountCartAdd200Response.from_json(json)
# print the JSON string representation of the object
print(AccountCartAdd200Response.to_json())

# convert the object into a dict
account_cart_add200_response_dict = account_cart_add200_response_instance.to_dict()
# create an instance of AccountCartAdd200Response from a dict
account_cart_add200_response_from_dict = AccountCartAdd200Response.from_dict(account_cart_add200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


