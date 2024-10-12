# AuthorizationCodesSharedModelsAuthorizationCode

Represents the model containing an authorization code used to unlock a feature in machines and EDT

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code to enter to unlock a feature. Read only. | [optional] 
**created_by_user_id** | **int** | The ID of the user that created this authorization code. Read only. | [optional] 
**created_date** | **datetime** | A timestamp of when this code was created. Read only. | [optional] 
**data_parameters** | [**List[AuthorizationCodesSharedModelsParameter]**](AuthorizationCodesSharedModelsParameter.md) | The parameters and values contained as data in this authorization code. May not be updated. | [optional] 
**definition_id** | **str** | The id of the definition for this authorization code. May not be updated. | [optional] 
**deleted_by_user_id** | **int** | The ID of the user that deleted this authorization code. Read only. | [optional] 
**deleted_date** | **datetime** | A timestamp of when this authorization code was deleted. Read only. | [optional] 
**effective_date** | **datetime** | A date at which this code should begin being valid. Optional. Set on create only. | [optional] 
**id** | **int** | The identifier for the authorization code. Read only. | [optional] 
**is_deleted** | **bool** | Indicates whether this code is deleted. | [optional] 
**validation_parameters** | [**List[AuthorizationCodesSharedModelsParameter]**](AuthorizationCodesSharedModelsParameter.md) | The parameters and values used to validate this authorization code. May not be updated. | [optional] 

## Example

```python
from openapi_client.models.authorization_codes_shared_models_authorization_code import AuthorizationCodesSharedModelsAuthorizationCode

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationCodesSharedModelsAuthorizationCode from a JSON string
authorization_codes_shared_models_authorization_code_instance = AuthorizationCodesSharedModelsAuthorizationCode.from_json(json)
# print the JSON string representation of the object
print(AuthorizationCodesSharedModelsAuthorizationCode.to_json())

# convert the object into a dict
authorization_codes_shared_models_authorization_code_dict = authorization_codes_shared_models_authorization_code_instance.to_dict()
# create an instance of AuthorizationCodesSharedModelsAuthorizationCode from a dict
authorization_codes_shared_models_authorization_code_from_dict = AuthorizationCodesSharedModelsAuthorizationCode.from_dict(authorization_codes_shared_models_authorization_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


