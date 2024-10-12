# GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig

A pair of SAML RP-IDP configurations when the project acts as the relying party.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The config&#39;s display name set by developers. | [optional] 
**enabled** | **bool** | True if allows the user to sign in with the provider. | [optional] 
**idp_config** | [**GoogleCloudIdentitytoolkitAdminV2IdpConfig**](GoogleCloudIdentitytoolkitAdminV2IdpConfig.md) |  | [optional] 
**name** | **str** | The name of the InboundSamlConfig resource, for example: &#39;projects/my-awesome-project/inboundSamlConfigs/my-config-id&#39;. Ignored during create requests. | [optional] 
**sp_config** | [**GoogleCloudIdentitytoolkitAdminV2SpConfig**](GoogleCloudIdentitytoolkitAdminV2SpConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_inbound_saml_config import GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_inbound_saml_config_instance = GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_inbound_saml_config_dict = google_cloud_identitytoolkit_admin_v2_inbound_saml_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig from a dict
google_cloud_identitytoolkit_admin_v2_inbound_saml_config_from_dict = GoogleCloudIdentitytoolkitAdminV2InboundSamlConfig.from_dict(google_cloud_identitytoolkit_admin_v2_inbound_saml_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


