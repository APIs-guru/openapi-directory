# UserModel4

UserModel4 Model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address | 
**first_name** | **str** | First name | 
**last_name** | **str** | Last name | 
**password** | **str** | Password | 

## Example

```python
from openapi_client.models.user_model4 import UserModel4

# TODO update the JSON string below
json = "{}"
# create an instance of UserModel4 from a JSON string
user_model4_instance = UserModel4.from_json(json)
# print the JSON string representation of the object
print(UserModel4.to_json())

# convert the object into a dict
user_model4_dict = user_model4_instance.to_dict()
# create an instance of UserModel4 from a dict
user_model4_from_dict = UserModel4.from_dict(user_model4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


