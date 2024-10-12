# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar** | **str** | The URL of the small avatar picture. | [optional] 
**avatar_large** | **str** | The URL of the large avatar picture. | [optional] 
**company** | **str** | The name of the user&#39;s company | [optional] 
**department** | **str** | missing documentation | [optional] 
**display_name** | **str** | The user&#39;s display name | [optional] 
**email_address** | **str** | The primary email address of the user | [optional] 
**email_addresses** | [**List[UserEmailAddress]**](UserEmailAddress.md) | additional email addresses of the user | [optional] 
**first_name** | **str** | The first name of the user | [optional] 
**job_title** | **str** | The job title of the user | [optional] 
**last_name** | **str** | The last name of the user | [optional] 
**locale** | **str** | The locale of the user. (E.g. en-US, de-DE) | [optional] 
**phone_number** | **str** | provisioned phone number of the user | [optional] 
**phone_numbers** | [**List[UserPhoneNumber]**](UserPhoneNumber.md) | additional phone numbers of the user | [optional] 
**primary_tenant_id** | **str** | The primary tenant id | [optional] 
**secondary_email_address** | **str** | The secondary email address | [optional] 
**secondary_tenant_id** | **str** | The secondary tenant id | [optional] 
**user_id** | **str** | The ID of the user | [optional] 
**user_state** | **str** | The state of the user, e.g. deleted | [optional] 
**user_type** | **str** | the type of the user | [optional] 

## Example

```python
from openapi_client.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


