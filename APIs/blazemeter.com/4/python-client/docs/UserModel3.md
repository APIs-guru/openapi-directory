# UserModel3

UserModel3 Model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_password** | **str** |  | 
**new_password** | **str** |  | 

## Example

```python
from openapi_client.models.user_model3 import UserModel3

# TODO update the JSON string below
json = "{}"
# create an instance of UserModel3 from a JSON string
user_model3_instance = UserModel3.from_json(json)
# print the JSON string representation of the object
print(UserModel3.to_json())

# convert the object into a dict
user_model3_dict = user_model3_instance.to_dict()
# create an instance of UserModel3 from a dict
user_model3_from_dict = UserModel3.from_dict(user_model3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


