# UserEntityBaseParameters

User Entity Base Parameters set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identities** | [**List[UserIdentityContract]**](UserIdentityContract.md) | Collection of user identities. | [optional] [readonly] 
**note** | **str** | Optional note about a user set by the administrator. | [optional] 
**state** | **str** | Account state. Specifies whether the user is active or not. Blocked users are unable to sign into the developer portal or call any APIs of subscribed products. Default state is Active. | [optional] [default to 'active']

## Example

```python
from openapi_client.models.user_entity_base_parameters import UserEntityBaseParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UserEntityBaseParameters from a JSON string
user_entity_base_parameters_instance = UserEntityBaseParameters.from_json(json)
# print the JSON string representation of the object
print(UserEntityBaseParameters.to_json())

# convert the object into a dict
user_entity_base_parameters_dict = user_entity_base_parameters_instance.to_dict()
# create an instance of UserEntityBaseParameters from a dict
user_entity_base_parameters_from_dict = UserEntityBaseParameters.from_dict(user_entity_base_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


