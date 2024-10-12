# IdentityServiceAzureADConfig

Configuration for the AzureAD Auth flow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | ID for the registered client application that makes authentication requests to the Azure AD identity provider. | [optional] 
**client_secret** | **str** | Input only. Unencrypted AzureAD client secret will be passed to the GKE Hub CLH. | [optional] 
**encrypted_client_secret** | **bytearray** | Output only. Encrypted AzureAD client secret. | [optional] [readonly] 
**kubectl_redirect_uri** | **str** | The redirect URL that kubectl uses for authorization. | [optional] 
**tenant** | **str** | Kind of Azure AD account to be authenticated. Supported values are or for accounts belonging to a specific tenant. | [optional] 

## Example

```python
from openapi_client.models.identity_service_azure_ad_config import IdentityServiceAzureADConfig

# TODO update the JSON string below
json = "{}"
# create an instance of IdentityServiceAzureADConfig from a JSON string
identity_service_azure_ad_config_instance = IdentityServiceAzureADConfig.from_json(json)
# print the JSON string representation of the object
print(IdentityServiceAzureADConfig.to_json())

# convert the object into a dict
identity_service_azure_ad_config_dict = identity_service_azure_ad_config_instance.to_dict()
# create an instance of IdentityServiceAzureADConfig from a dict
identity_service_azure_ad_config_from_dict = IdentityServiceAzureADConfig.from_dict(identity_service_azure_ad_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


