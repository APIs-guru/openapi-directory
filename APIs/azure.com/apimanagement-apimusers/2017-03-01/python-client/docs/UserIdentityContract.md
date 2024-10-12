# UserIdentityContract

User identity details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier value within provider. | [optional] 
**provider** | **str** | Identity provider name. | [optional] 

## Example

```python
from openapi_client.models.user_identity_contract import UserIdentityContract

# TODO update the JSON string below
json = "{}"
# create an instance of UserIdentityContract from a JSON string
user_identity_contract_instance = UserIdentityContract.from_json(json)
# print the JSON string representation of the object
print(UserIdentityContract.to_json())

# convert the object into a dict
user_identity_contract_dict = user_identity_contract_instance.to_dict()
# create an instance of UserIdentityContract from a dict
user_identity_contract_from_dict = UserIdentityContract.from_dict(user_identity_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


