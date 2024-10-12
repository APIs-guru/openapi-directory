# AuthorizationCodesSharedModelsAuthorizationCodeUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**user_id** | **int** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.authorization_codes_shared_models_authorization_code_user import AuthorizationCodesSharedModelsAuthorizationCodeUser

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationCodesSharedModelsAuthorizationCodeUser from a JSON string
authorization_codes_shared_models_authorization_code_user_instance = AuthorizationCodesSharedModelsAuthorizationCodeUser.from_json(json)
# print the JSON string representation of the object
print(AuthorizationCodesSharedModelsAuthorizationCodeUser.to_json())

# convert the object into a dict
authorization_codes_shared_models_authorization_code_user_dict = authorization_codes_shared_models_authorization_code_user_instance.to_dict()
# create an instance of AuthorizationCodesSharedModelsAuthorizationCodeUser from a dict
authorization_codes_shared_models_authorization_code_user_from_dict = AuthorizationCodesSharedModelsAuthorizationCodeUser.from_dict(authorization_codes_shared_models_authorization_code_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


