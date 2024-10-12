# AccountIdentityType

The account identity type used to specify attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_identified** | **bool** | Optional. Indicates that the business identifies itself with a given identity type. Setting this field does not automatically mean eligibility for promotions. | [optional] 

## Example

```python
from openapi_client.models.account_identity_type import AccountIdentityType

# TODO update the JSON string below
json = "{}"
# create an instance of AccountIdentityType from a JSON string
account_identity_type_instance = AccountIdentityType.from_json(json)
# print the JSON string representation of the object
print(AccountIdentityType.to_json())

# convert the object into a dict
account_identity_type_dict = account_identity_type_instance.to_dict()
# create an instance of AccountIdentityType from a dict
account_identity_type_from_dict = AccountIdentityType.from_dict(account_identity_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


