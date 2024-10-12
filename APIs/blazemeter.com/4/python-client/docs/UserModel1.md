# UserModel1

UserModel1 Model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_password** | **str** |  | 
**new_password** | **str** |  | 

## Example

```python
from openapi_client.models.user_model1 import UserModel1

# TODO update the JSON string below
json = "{}"
# create an instance of UserModel1 from a JSON string
user_model1_instance = UserModel1.from_json(json)
# print the JSON string representation of the object
print(UserModel1.to_json())

# convert the object into a dict
user_model1_dict = user_model1_instance.to_dict()
# create an instance of UserModel1 from a dict
user_model1_from_dict = UserModel1.from_dict(user_model1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


