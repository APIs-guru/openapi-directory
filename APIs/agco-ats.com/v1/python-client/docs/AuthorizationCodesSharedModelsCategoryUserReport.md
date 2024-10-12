# AuthorizationCodesSharedModelsCategoryUserReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**List[AuthorizationCodesSharedModelsCategory]**](AuthorizationCodesSharedModelsCategory.md) |  | [optional] 
**user** | [**AuthorizationCodesSharedModelsAuthorizationCodeUser**](AuthorizationCodesSharedModelsAuthorizationCodeUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.authorization_codes_shared_models_category_user_report import AuthorizationCodesSharedModelsCategoryUserReport

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizationCodesSharedModelsCategoryUserReport from a JSON string
authorization_codes_shared_models_category_user_report_instance = AuthorizationCodesSharedModelsCategoryUserReport.from_json(json)
# print the JSON string representation of the object
print(AuthorizationCodesSharedModelsCategoryUserReport.to_json())

# convert the object into a dict
authorization_codes_shared_models_category_user_report_dict = authorization_codes_shared_models_category_user_report_instance.to_dict()
# create an instance of AuthorizationCodesSharedModelsCategoryUserReport from a dict
authorization_codes_shared_models_category_user_report_from_dict = AuthorizationCodesSharedModelsCategoryUserReport.from_dict(authorization_codes_shared_models_category_user_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


