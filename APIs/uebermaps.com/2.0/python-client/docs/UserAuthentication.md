# UserAuthentication


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**password** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_authentication import UserAuthentication

# TODO update the JSON string below
json = "{}"
# create an instance of UserAuthentication from a JSON string
user_authentication_instance = UserAuthentication.from_json(json)
# print the JSON string representation of the object
print(UserAuthentication.to_json())

# convert the object into a dict
user_authentication_dict = user_authentication_instance.to_dict()
# create an instance of UserAuthentication from a dict
user_authentication_from_dict = UserAuthentication.from_dict(user_authentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


