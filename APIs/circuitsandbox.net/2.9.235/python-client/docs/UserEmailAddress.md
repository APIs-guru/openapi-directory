# UserEmailAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | the email address | [optional] 
**type** | **str** | the type of the email address | [optional] 

## Example

```python
from openapi_client.models.user_email_address import UserEmailAddress

# TODO update the JSON string below
json = "{}"
# create an instance of UserEmailAddress from a JSON string
user_email_address_instance = UserEmailAddress.from_json(json)
# print the JSON string representation of the object
print(UserEmailAddress.to_json())

# convert the object into a dict
user_email_address_dict = user_email_address_instance.to_dict()
# create an instance of UserEmailAddress from a dict
user_email_address_from_dict = UserEmailAddress.from_dict(user_email_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


