# UserCreateParameterProperties

Parameters supplied to the Create User operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmation** | **str** | Determines the type of confirmation e-mail that will be sent to the newly created user. | [optional] 
**email** | **str** | Email address. Must not be empty and must be unique within the service instance. | 
**first_name** | **str** | First name. | 
**last_name** | **str** | Last name. | 
**password** | **str** | User Password. If no value is provided, a default password is generated. | [optional] 
**identities** | [**List[UserIdentityContract]**](UserIdentityContract.md) | Collection of user identities. | [optional] [readonly] 
**note** | **str** | Optional note about a user set by the administrator. | [optional] 
**state** | **str** | Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active. | [optional] [default to 'active']

## Example

```python
from openapi_client.models.user_create_parameter_properties import UserCreateParameterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UserCreateParameterProperties from a JSON string
user_create_parameter_properties_instance = UserCreateParameterProperties.from_json(json)
# print the JSON string representation of the object
print(UserCreateParameterProperties.to_json())

# convert the object into a dict
user_create_parameter_properties_dict = user_create_parameter_properties_instance.to_dict()
# create an instance of UserCreateParameterProperties from a dict
user_create_parameter_properties_from_dict = UserCreateParameterProperties.from_dict(user_create_parameter_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


