# UserProperties

Properties of a lab user profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **datetime** | The creation date of the user profile. | [optional] [readonly] 
**identity** | [**UserIdentity**](UserIdentity.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] [readonly] 
**secret_store** | [**UserSecretStore**](UserSecretStore.md) |  | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] [readonly] 

## Example

```python
from openapi_client.models.user_properties import UserProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UserProperties from a JSON string
user_properties_instance = UserProperties.from_json(json)
# print the JSON string representation of the object
print(UserProperties.to_json())

# convert the object into a dict
user_properties_dict = user_properties_instance.to_dict()
# create an instance of UserProperties from a dict
user_properties_from_dict = UserProperties.from_dict(user_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


