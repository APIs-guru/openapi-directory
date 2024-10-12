# AccountUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin** | **bool** | Whether user is an admin. | [optional] 
**email_address** | **str** | User&#39;s email address. | [optional] 
**order_manager** | **bool** | Whether user is an order manager. | [optional] 
**payments_analyst** | **bool** | Whether user can access payment statements. | [optional] 
**payments_manager** | **bool** | Whether user can manage payment settings. | [optional] 

## Example

```python
from openapi_client.models.account_user import AccountUser

# TODO update the JSON string below
json = "{}"
# create an instance of AccountUser from a JSON string
account_user_instance = AccountUser.from_json(json)
# print the JSON string representation of the object
print(AccountUser.to_json())

# convert the object into a dict
account_user_dict = account_user_instance.to_dict()
# create an instance of AccountUser from a dict
account_user_from_dict = AccountUser.from_dict(account_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


