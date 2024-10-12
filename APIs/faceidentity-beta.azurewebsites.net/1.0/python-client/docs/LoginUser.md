# LoginUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | The user password | 
**username** | **str** | The name of user | 

## Example

```python
from openapi_client.models.login_user import LoginUser

# TODO update the JSON string below
json = "{}"
# create an instance of LoginUser from a JSON string
login_user_instance = LoginUser.from_json(json)
# print the JSON string representation of the object
print(LoginUser.to_json())

# convert the object into a dict
login_user_dict = login_user_instance.to_dict()
# create an instance of LoginUser from a dict
login_user_from_dict = LoginUser.from_dict(login_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


