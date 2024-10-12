# UserCreateOrUpdateRequestProperties

Parameters supplied to the Create User operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confirmation** | **str** | Determines the type of confirmation e-mail that will be sent to the newly created user. | [optional] 
**email** | **str** | Email address. Must not be empty and must be unique within the service instance. | 
**first_name** | **str** | First name. | 
**last_name** | **str** | Last name. | 
**password** | **str** | User Password. If no value is provided, a default password is generated. | [optional] 

## Example

```python
from openapi_client.models.user_create_or_update_request_properties import UserCreateOrUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UserCreateOrUpdateRequestProperties from a JSON string
user_create_or_update_request_properties_instance = UserCreateOrUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(UserCreateOrUpdateRequestProperties.to_json())

# convert the object into a dict
user_create_or_update_request_properties_dict = user_create_or_update_request_properties_instance.to_dict()
# create an instance of UserCreateOrUpdateRequestProperties from a dict
user_create_or_update_request_properties_from_dict = UserCreateOrUpdateRequestProperties.from_dict(user_create_or_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


