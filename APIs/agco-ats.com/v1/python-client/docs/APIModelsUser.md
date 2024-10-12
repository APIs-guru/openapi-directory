# APIModelsUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_password** | **str** | Never Returned.  When changing a user&#39;s password, this field must contain the new password. | [optional] 
**email** | **str** | The user&#39;s email address | [optional] 
**name** | **str** | The user&#39;s name | [optional] 
**password** | **str** | Never Returned.  Required when creating a new user or updating a user.  When changing a user&#39;s password this field must contain the current password. | [optional] 
**user_id** | **int** | The user ID | [optional] 
**username** | **str** | The username used for authentication | [optional] 

## Example

```python
from openapi_client.models.api_models_user import APIModelsUser

# TODO update the JSON string below
json = "{}"
# create an instance of APIModelsUser from a JSON string
api_models_user_instance = APIModelsUser.from_json(json)
# print the JSON string representation of the object
print(APIModelsUser.to_json())

# convert the object into a dict
api_models_user_dict = api_models_user_instance.to_dict()
# create an instance of APIModelsUser from a dict
api_models_user_from_dict = APIModelsUser.from_dict(api_models_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


