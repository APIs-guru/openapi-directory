# SecurityCenterSettings

Resource capturing the settings for Security Center. Next ID: 12

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_sink_project** | **str** | The resource name of the project to send logs to. This project must be part of the organization this resource resides in. The format is &#x60;projects/{project_id}&#x60;. An empty value disables logging. This value is only referenced by services that support log sink. Please refer to the documentation for an updated list of compatible services. This may only be specified for organization level onboarding. | [optional] 
**name** | **str** | The resource name of the SecurityCenterSettings. Format: organizations/{organization}/securityCenterSettings Format: folders/{folder}/securityCenterSettings Format: projects/{project}/securityCenterSettings | [optional] 
**onboarding_time** | **str** | Output only. Timestamp of when the customer organization was onboarded to SCC. | [optional] [readonly] 
**org_service_account** | **str** | Output only. The organization level service account to be used for security center components. | [optional] [readonly] 

## Example

```python
from openapi_client.models.security_center_settings import SecurityCenterSettings

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityCenterSettings from a JSON string
security_center_settings_instance = SecurityCenterSettings.from_json(json)
# print the JSON string representation of the object
print(SecurityCenterSettings.to_json())

# convert the object into a dict
security_center_settings_dict = security_center_settings_instance.to_dict()
# create an instance of SecurityCenterSettings from a dict
security_center_settings_from_dict = SecurityCenterSettings.from_dict(security_center_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


