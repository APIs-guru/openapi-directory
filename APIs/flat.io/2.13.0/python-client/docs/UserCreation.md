# UserCreation

User creation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email of the new account | [optional] 
**firstname** | **str** | First name of the user | [optional] 
**lastname** | **str** | Last name of the user | [optional] 
**locale** | [**FlatLocales**](FlatLocales.md) |  | [optional] [default to FlatLocales.EN]
**password** | **str** | Password of the new account | 
**username** | **str** | Username of the new account | 

## Example

```python
from openapi_client.models.user_creation import UserCreation

# TODO update the JSON string below
json = "{}"
# create an instance of UserCreation from a JSON string
user_creation_instance = UserCreation.from_json(json)
# print the JSON string representation of the object
print(UserCreation.to_json())

# convert the object into a dict
user_creation_dict = user_creation_instance.to_dict()
# create an instance of UserCreation from a dict
user_creation_from_dict = UserCreation.from_dict(user_creation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


