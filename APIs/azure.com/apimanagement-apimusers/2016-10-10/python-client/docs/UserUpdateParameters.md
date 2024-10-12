# UserUpdateParameters

Parameters supplied to the Update User operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address. | [optional] 
**first_name** | **str** | First name. | [optional] 
**last_name** | **str** | Last name. | [optional] 
**note** | **str** | Note about user. | [optional] 
**password** | **str** | Password. | [optional] 
**state** | **str** | Account state. | [optional] 

## Example

```python
from openapi_client.models.user_update_parameters import UserUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UserUpdateParameters from a JSON string
user_update_parameters_instance = UserUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(UserUpdateParameters.to_json())

# convert the object into a dict
user_update_parameters_dict = user_update_parameters_instance.to_dict()
# create an instance of UserUpdateParameters from a dict
user_update_parameters_from_dict = UserUpdateParameters.from_dict(user_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


