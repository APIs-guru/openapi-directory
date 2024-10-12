# UserIdentityProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The client id of user assigned identity. | [optional] 
**principal_id** | **str** | The principal id of user assigned identity. | [optional] 

## Example

```python
from openapi_client.models.user_identity_properties import UserIdentityProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UserIdentityProperties from a JSON string
user_identity_properties_instance = UserIdentityProperties.from_json(json)
# print the JSON string representation of the object
print(UserIdentityProperties.to_json())

# convert the object into a dict
user_identity_properties_dict = user_identity_properties_instance.to_dict()
# create an instance of UserIdentityProperties from a dict
user_identity_properties_from_dict = UserIdentityProperties.from_dict(user_identity_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


