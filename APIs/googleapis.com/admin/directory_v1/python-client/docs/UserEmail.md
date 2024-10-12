# UserEmail

JSON template for an email.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Email id of the user. | [optional] 
**custom_type** | **str** | Custom Type. | [optional] 
**primary** | **bool** | If this is user&#39;s primary email. Only one entry could be marked as primary. | [optional] 
**public_key_encryption_certificates** | [**UserEmailPublicKeyEncryptionCertificates**](UserEmailPublicKeyEncryptionCertificates.md) |  | [optional] 
**type** | **str** | Each entry can have a type which indicates standard types of that entry. For example email could be of home, work etc. In addition to the standard type, an entry can have a custom type and can take any value Such types should have the CUSTOM value as type and also have a customType value. | [optional] 

## Example

```python
from openapi_client.models.user_email import UserEmail

# TODO update the JSON string below
json = "{}"
# create an instance of UserEmail from a JSON string
user_email_instance = UserEmail.from_json(json)
# print the JSON string representation of the object
print(UserEmail.to_json())

# convert the object into a dict
user_email_dict = user_email_instance.to_dict()
# create an instance of UserEmail from a dict
user_email_from_dict = UserEmail.from_dict(user_email_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


