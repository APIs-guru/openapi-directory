# ApiManagementServiceGetSsoTokenResult

The response of the GetSsoToken operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redirect_uri** | **str** | Redirect URL to the Publisher Portal containing the SSO token. | [optional] 

## Example

```python
from openapi_client.models.api_management_service_get_sso_token_result import ApiManagementServiceGetSsoTokenResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceGetSsoTokenResult from a JSON string
api_management_service_get_sso_token_result_instance = ApiManagementServiceGetSsoTokenResult.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceGetSsoTokenResult.to_json())

# convert the object into a dict
api_management_service_get_sso_token_result_dict = api_management_service_get_sso_token_result_instance.to_dict()
# create an instance of ApiManagementServiceGetSsoTokenResult from a dict
api_management_service_get_sso_token_result_from_dict = ApiManagementServiceGetSsoTokenResult.from_dict(api_management_service_get_sso_token_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


