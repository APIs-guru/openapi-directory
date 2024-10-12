# AuthorizationCodesSharedModelsCategory

A category for Authorization Code Definitions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description of the Category. | [optional] 
**id** | **str** | The ID of the Category. | [optional] 
**name** | **str** | The Name of the Category. | [optional] 

## Example

```python
from openapi_client.models.authorization_codes_shared_models_category import AuthorizationCodesSharedModelsCategory

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationCodesSharedModelsCategory from a JSON string
authorization_codes_shared_models_category_instance = AuthorizationCodesSharedModelsCategory.from_json(json)
# print the JSON string representation of the object
print(AuthorizationCodesSharedModelsCategory.to_json())

# convert the object into a dict
authorization_codes_shared_models_category_dict = authorization_codes_shared_models_category_instance.to_dict()
# create an instance of AuthorizationCodesSharedModelsCategory from a dict
authorization_codes_shared_models_category_from_dict = AuthorizationCodesSharedModelsCategory.from_dict(authorization_codes_shared_models_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


