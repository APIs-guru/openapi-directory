# UserUpdateRequestProperties

Parameters supplied to the Update User operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address. Must not be empty and must be unique within the service instance. | [optional] 
**first_name** | **str** | First name. | [optional] 
**last_name** | **str** | Last name. | [optional] 
**password** | **str** | User Password. | [optional] 

## Example

```python
from openapi_client.models.user_update_request_properties import UserUpdateRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UserUpdateRequestProperties from a JSON string
user_update_request_properties_instance = UserUpdateRequestProperties.from_json(json)
# print the JSON string representation of the object
print(UserUpdateRequestProperties.to_json())

# convert the object into a dict
user_update_request_properties_dict = user_update_request_properties_instance.to_dict()
# create an instance of UserUpdateRequestProperties from a dict
user_update_request_properties_from_dict = UserUpdateRequestProperties.from_dict(user_update_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


