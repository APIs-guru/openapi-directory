# ErrorAuthenticationFailedAccountBalance

Authentication Failed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **object** |  | [optional] 
**error_code_label** | **object** |  | [optional] 

## Example

```python
from openapi_client.models.error_authentication_failed_account_balance import ErrorAuthenticationFailedAccountBalance

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorAuthenticationFailedAccountBalance from a JSON string
error_authentication_failed_account_balance_instance = ErrorAuthenticationFailedAccountBalance.from_json(json)
# print the JSON string representation of the object
print(ErrorAuthenticationFailedAccountBalance.to_json())

# convert the object into a dict
error_authentication_failed_account_balance_dict = error_authentication_failed_account_balance_instance.to_dict()
# create an instance of ErrorAuthenticationFailedAccountBalance from a dict
error_authentication_failed_account_balance_from_dict = ErrorAuthenticationFailedAccountBalance.from_dict(error_authentication_failed_account_balance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


