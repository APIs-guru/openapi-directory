# UserAccount

User account provisioned for the customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encrypted_password** | **str** | Encrypted initial password value. | [optional] 
**kms_key_version** | **str** | KMS CryptoKey Version used to encrypt the password. | [optional] 

## Example

```python
from openapi_client.models.user_account import UserAccount

# TODO update the JSON string below
json = "{}"
# create an instance of UserAccount from a JSON string
user_account_instance = UserAccount.from_json(json)
# print the JSON string representation of the object
print(UserAccount.to_json())

# convert the object into a dict
user_account_dict = user_account_instance.to_dict()
# create an instance of UserAccount from a dict
user_account_from_dict = UserAccount.from_dict(user_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


