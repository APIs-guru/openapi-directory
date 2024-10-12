# IdentitytoolkitRelyingpartySetProjectConfigRequest

Request to set the project configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_password_user** | **bool** | Whether to allow password user sign in or sign up. | [optional] 
**api_key** | **str** | Browser API key, needed when making http request to Apiary. | [optional] 
**authorized_domains** | **List[str]** | Authorized domains for widget redirect. | [optional] 
**change_email_template** | [**EmailTemplate**](EmailTemplate.md) |  | [optional] 
**delegated_project_number** | **str** | GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. | [optional] 
**enable_anonymous_user** | **bool** | Whether to enable anonymous user. | [optional] 
**idp_config** | [**List[IdpConfig]**](IdpConfig.md) | Oauth2 provider configuration. | [optional] 
**legacy_reset_password_template** | [**EmailTemplate**](EmailTemplate.md) |  | [optional] 
**reset_password_template** | [**EmailTemplate**](EmailTemplate.md) |  | [optional] 
**use_email_sending** | **bool** | Whether to use email sending provided by Firebear. | [optional] 
**verify_email_template** | [**EmailTemplate**](EmailTemplate.md) |  | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_set_project_config_request import IdentitytoolkitRelyingpartySetProjectConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartySetProjectConfigRequest from a JSON string
identitytoolkit_relyingparty_set_project_config_request_instance = IdentitytoolkitRelyingpartySetProjectConfigRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartySetProjectConfigRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_set_project_config_request_dict = identitytoolkit_relyingparty_set_project_config_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartySetProjectConfigRequest from a dict
identitytoolkit_relyingparty_set_project_config_request_from_dict = IdentitytoolkitRelyingpartySetProjectConfigRequest.from_dict(identitytoolkit_relyingparty_set_project_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


