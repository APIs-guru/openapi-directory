# CustomizationIdentityUserData

Windows Identity. User data customization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_password_predefined** | **bool** | Is password predefined in customization policy | [optional] [default to False]

## Example

```python
from openapi_client.models.customization_identity_user_data import CustomizationIdentityUserData

# TODO update the JSON string below
json = "{}"
# create an instance of CustomizationIdentityUserData from a JSON string
customization_identity_user_data_instance = CustomizationIdentityUserData.from_json(json)
# print the JSON string representation of the object
print(CustomizationIdentityUserData.to_json())

# convert the object into a dict
customization_identity_user_data_dict = customization_identity_user_data_instance.to_dict()
# create an instance of CustomizationIdentityUserData from a dict
customization_identity_user_data_from_dict = CustomizationIdentityUserData.from_dict(customization_identity_user_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


