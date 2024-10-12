# AuthorizationCodesSharedModelsCodeValidationModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date** | **datetime** |  | [optional] 
**is_valid** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.authorization_codes_shared_models_code_validation_model import AuthorizationCodesSharedModelsCodeValidationModel

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationCodesSharedModelsCodeValidationModel from a JSON string
authorization_codes_shared_models_code_validation_model_instance = AuthorizationCodesSharedModelsCodeValidationModel.from_json(json)
# print the JSON string representation of the object
print(AuthorizationCodesSharedModelsCodeValidationModel.to_json())

# convert the object into a dict
authorization_codes_shared_models_code_validation_model_dict = authorization_codes_shared_models_code_validation_model_instance.to_dict()
# create an instance of AuthorizationCodesSharedModelsCodeValidationModel from a dict
authorization_codes_shared_models_code_validation_model_from_dict = AuthorizationCodesSharedModelsCodeValidationModel.from_dict(authorization_codes_shared_models_code_validation_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


