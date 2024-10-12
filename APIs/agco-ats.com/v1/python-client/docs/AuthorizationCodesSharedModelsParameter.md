# AuthorizationCodesSharedModelsParameter

A parameter used to create an authorization code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the parameter. May not be updated. | 
**value** | **str** | The value of the parameter. May not be updated. | 

## Example

```python
from openapi_client.models.authorization_codes_shared_models_parameter import AuthorizationCodesSharedModelsParameter

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationCodesSharedModelsParameter from a JSON string
authorization_codes_shared_models_parameter_instance = AuthorizationCodesSharedModelsParameter.from_json(json)
# print the JSON string representation of the object
print(AuthorizationCodesSharedModelsParameter.to_json())

# convert the object into a dict
authorization_codes_shared_models_parameter_dict = authorization_codes_shared_models_parameter_instance.to_dict()
# create an instance of AuthorizationCodesSharedModelsParameter from a dict
authorization_codes_shared_models_parameter_from_dict = AuthorizationCodesSharedModelsParameter.from_dict(authorization_codes_shared_models_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


