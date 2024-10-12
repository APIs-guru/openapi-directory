# UserPropertiesFragment

Properties of a lab user profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**UserIdentityFragment**](UserIdentityFragment.md) |  | [optional] 
**secret_store** | [**UserSecretStoreFragment**](UserSecretStoreFragment.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_properties_fragment import UserPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of UserPropertiesFragment from a JSON string
user_properties_fragment_instance = UserPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(UserPropertiesFragment.to_json())

# convert the object into a dict
user_properties_fragment_dict = user_properties_fragment_instance.to_dict()
# create an instance of UserPropertiesFragment from a dict
user_properties_fragment_from_dict = UserPropertiesFragment.from_dict(user_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


