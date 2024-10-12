# UserUpdateParametersProperties

Parameters supplied to the Update User operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address. Must not be empty and must be unique within the service instance. | [optional] 
**first_name** | **str** | First name. | [optional] 
**last_name** | **str** | Last name. | [optional] 
**password** | **str** | User Password. | [optional] 
**identities** | [**List[UserIdentityContract]**](UserIdentityContract.md) | Collection of user identities. | [optional] 
**note** | **str** | Optional note about a user set by the administrator. | [optional] 
**state** | **str** | Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active. | [optional] [default to 'active']

## Example

```python
from openapi_client.models.user_update_parameters_properties import UserUpdateParametersProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UserUpdateParametersProperties from a JSON string
user_update_parameters_properties_instance = UserUpdateParametersProperties.from_json(json)
# print the JSON string representation of the object
print(UserUpdateParametersProperties.to_json())

# convert the object into a dict
user_update_parameters_properties_dict = user_update_parameters_properties_instance.to_dict()
# create an instance of UserUpdateParametersProperties from a dict
user_update_parameters_properties_from_dict = UserUpdateParametersProperties.from_dict(user_update_parameters_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


