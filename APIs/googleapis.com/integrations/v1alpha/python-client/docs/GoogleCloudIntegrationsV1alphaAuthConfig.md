# GoogleCloudIntegrationsV1alphaAuthConfig

The AuthConfig resource use to hold channels and connection config data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_id** | **str** | Certificate id for client certificate | [optional] 
**create_time** | **str** | Output only. The timestamp when the auth config is created. | [optional] [readonly] 
**creator_email** | **str** | The creator&#39;s email address. Generated based on the End User Credentials/LOAS role of the user making the call. | [optional] 
**credential_type** | **str** | Credential type of the encrypted credential. | [optional] 
**decrypted_credential** | [**GoogleCloudIntegrationsV1alphaCredential**](GoogleCloudIntegrationsV1alphaCredential.md) |  | [optional] 
**description** | **str** | A description of the auth config. | [optional] 
**display_name** | **str** | The name of the auth config. | [optional] 
**encrypted_credential** | **bytearray** | Auth credential encrypted by Cloud KMS. Can be decrypted as Credential with proper KMS key. | [optional] 
**expiry_notification_duration** | **List[str]** | User can define the time to receive notification after which the auth config becomes invalid. Support up to 30 days. Support granularity in hours. | [optional] 
**last_modifier_email** | **str** | The last modifier&#39;s email address. Generated based on the End User Credentials/LOAS role of the user making the call. | [optional] 
**name** | **str** | Resource name of the SFDC instance projects/{project}/locations/{location}/authConfigs/{authConfig}. | [optional] 
**override_valid_time** | **str** | User provided expiry time to override. For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings. | [optional] 
**reason** | **str** | The reason / details of the current status. | [optional] 
**state** | **str** | The status of the auth config. | [optional] 
**update_time** | **str** | Output only. The timestamp when the auth config is modified. | [optional] [readonly] 
**valid_time** | **str** | The time until the auth config is valid. Empty or max value is considered the auth config won&#39;t expire. | [optional] 
**visibility** | **str** | The visibility of the auth config. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_auth_config import GoogleCloudIntegrationsV1alphaAuthConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaAuthConfig from a JSON string
google_cloud_integrations_v1alpha_auth_config_instance = GoogleCloudIntegrationsV1alphaAuthConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaAuthConfig.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_auth_config_dict = google_cloud_integrations_v1alpha_auth_config_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaAuthConfig from a dict
google_cloud_integrations_v1alpha_auth_config_from_dict = GoogleCloudIntegrationsV1alphaAuthConfig.from_dict(google_cloud_integrations_v1alpha_auth_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


