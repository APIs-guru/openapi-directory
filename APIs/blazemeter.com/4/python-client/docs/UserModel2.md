# UserModel2

UserModel2 Model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_password** | **str** |  | 
**new_password** | **str** |  | 

## Example

```python
from openapi_client.models.user_model2 import UserModel2

# TODO update the JSON string below
json = "{}"
# create an instance of UserModel2 from a JSON string
user_model2_instance = UserModel2.from_json(json)
# print the JSON string representation of the object
print(UserModel2.to_json())

# convert the object into a dict
user_model2_dict = user_model2_instance.to_dict()
# create an instance of UserModel2 from a dict
user_model2_from_dict = UserModel2.from_dict(user_model2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


