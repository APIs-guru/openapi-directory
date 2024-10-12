# IdentitytoolkitRelyingpartyGetProjectConfigResponse

Response of getting the project configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_password_user** | **bool** | Whether to allow password user sign in or sign up. | [optional] 
**api_key** | **str** | Browser API key, needed when making http request to Apiary. | [optional] 
**authorized_domains** | **List[str]** | Authorized domains. | [optional] 
**change_email_template** | [**EmailTemplate**](EmailTemplate.md) |  | [optional] 
**dynamic_links_domain** | **str** |  | [optional] 
**enable_anonymous_user** | **bool** | Whether anonymous user is enabled. | [optional] 
**idp_config** | [**List[IdpConfig]**](IdpConfig.md) | OAuth2 provider configuration. | [optional] 
**legacy_reset_password_template** | [**EmailTemplate**](EmailTemplate.md) |  | [optional] 
**project_id** | **str** | Project ID of the relying party. | [optional] 
**reset_password_template** | [**EmailTemplate**](EmailTemplate.md) |  | [optional] 
**use_email_sending** | **bool** | Whether to use email sending provided by Firebear. | [optional] 
**verify_email_template** | [**EmailTemplate**](EmailTemplate.md) |  | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_get_project_config_response import IdentitytoolkitRelyingpartyGetProjectConfigResponse

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartyGetProjectConfigResponse from a JSON string
identitytoolkit_relyingparty_get_project_config_response_instance = IdentitytoolkitRelyingpartyGetProjectConfigResponse.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartyGetProjectConfigResponse.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_get_project_config_response_dict = identitytoolkit_relyingparty_get_project_config_response_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartyGetProjectConfigResponse from a dict
identitytoolkit_relyingparty_get_project_config_response_from_dict = IdentitytoolkitRelyingpartyGetProjectConfigResponse.from_dict(identitytoolkit_relyingparty_get_project_config_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


