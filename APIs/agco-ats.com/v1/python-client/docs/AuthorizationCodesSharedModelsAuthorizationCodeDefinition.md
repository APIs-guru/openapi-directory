# AuthorizationCodesSharedModelsAuthorizationCodeDefinition

Represents the model used to define how a type of authorization code is generated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_id** | **str** | The value used for securing codes generated. | [optional] 
**created_by_user_id** | **int** | The ID of the user that created this definition. Read only. | [optional] 
**created_date** | **datetime** | A timestamp of when this definition was created. Read only. | [optional] 
**data_fields** | [**List[AuthorizationCodesSharedModelsDataField]**](AuthorizationCodesSharedModelsDataField.md) | The defined fields to include in authorization codes generated from this definition. May not be updated. | [optional] 
**deleted_by_user_id** | **int** | The ID of the user that deleted this definition. Read only. | [optional] 
**deleted_date** | **datetime** | A timestamp of when this definition was deleted. Read only. | [optional] 
**description** | **str** | A description of this definition. May not be updated. | [optional] 
**duration_accuracy** | **int** | The number of bits used for timestamp verification. Defaults to 5. May not be updated. | [optional] 
**duration_amount** | **int** | The amount of duration for the specified duration unit used to calculate the Authorization Code. Defaults to 1. May not be updated. | [optional] 
**duration_units** | **str** | The units of duration used to calculate the Authorization Code. Defaults to &#39;Days&#39;. May not be updated. | [optional] 
**hash_length** | **int** | The bit length of the hash data which will be used for the authorization code. Defaults to 20. May not be updated. | [optional] 
**id** | **str** | The ID of the authorization code definition. Read only. | [optional] 
**is_deleted** | **bool** | Indicates whether this definition is enabled. True if generating codes is disabled. | [optional] 
**name** | **str** | The name of the authorization code definition. May not be updated. | 
**random_length** | **int** | The bit length of random data which will be included in the authorization code.  This is necessary to allow creation of \&quot;identical\&quot; authorization codes containing the same timestamp. Defaults to 5. May not be updated. | [optional] 
**validation_fields** | [**List[AuthorizationCodesSharedModelsValidationField]**](AuthorizationCodesSharedModelsValidationField.md) | The defined fields to verify when reading authorization codes generated from this definition. May not be updated. | [optional] 

## Example

```python
from openapi_client.models.authorization_codes_shared_models_authorization_code_definition import AuthorizationCodesSharedModelsAuthorizationCodeDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationCodesSharedModelsAuthorizationCodeDefinition from a JSON string
authorization_codes_shared_models_authorization_code_definition_instance = AuthorizationCodesSharedModelsAuthorizationCodeDefinition.from_json(json)
# print the JSON string representation of the object
print(AuthorizationCodesSharedModelsAuthorizationCodeDefinition.to_json())

# convert the object into a dict
authorization_codes_shared_models_authorization_code_definition_dict = authorization_codes_shared_models_authorization_code_definition_instance.to_dict()
# create an instance of AuthorizationCodesSharedModelsAuthorizationCodeDefinition from a dict
authorization_codes_shared_models_authorization_code_definition_from_dict = AuthorizationCodesSharedModelsAuthorizationCodeDefinition.from_dict(authorization_codes_shared_models_authorization_code_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


