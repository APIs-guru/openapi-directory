# Tenant

The details of the onboarded tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aad_license** | **str** | The Azure Active Directory license of the tenant. | [optional] 
**aad_premium** | **bool** | Indicate if the tenant has Azure Active Directory Premium license or not. | [optional] 
**agent_auto_update** | **bool** | Indicates if the tenant is configured to automatically receive updates for Azure Active Directory Connect Health client side features. | [optional] 
**alert_suppression_time_in_mins** | **int** | The time in minutes after which an alert will be auto-suppressed. | [optional] 
**consented_to_microsoft_dev_ops** | **bool** | Indicates if the tenant data can be seen by Microsoft through Azure portal. | [optional] 
**country_letter_code** | **str** | The country letter code of the tenant. | [optional] 
**created_date** | **datetime** | The date, in UTC, when the tenant was onboarded to Azure Active Directory Connect Health. | [optional] 
**dev_ops_ttl** | **datetime** | The date and time, in UTC, till when the tenant data can be seen by Microsoft through Azure portal. | [optional] 
**disabled** | **bool** | Indicates if the tenant is disabled in Azure Active Directory Connect Health. | [optional] 
**disabled_reason** | **int** | The reason due to which the tenant was disabled in Azure Active Directory Connect Health. | [optional] 
**global_admins_email** | **List[str]** | The list of global administrators for the tenant. | [optional] 
**initial_domain** | **str** | The initial domain of the tenant. | [optional] 
**last_disabled** | **datetime** | The date and time, in UTC, when the tenant was last disabled in Azure Active Directory Connect Health. | [optional] 
**last_verified** | **datetime** | The date and time, in UTC, when the tenant onboarding status in Azure Active Directory Connect Health was last verified. | [optional] 
**onboarded** | **bool** | Indicates if the tenant is already onboarded to Azure Active Directory Connect Health. | [optional] 
**onboarding_allowed** | **bool** | Indicates if the tenant is allowed to  onboard to Azure Active Directory Connect Health. | [optional] 
**pks_certificate** | **object** | The certificate associated with the tenant to onboard data to Azure Active Directory Connect Health. | [optional] 
**private_preview_tenant** | **bool** | Indicates if the tenant has signed up for private preview of Azure Active Directory Connect Health features. | [optional] 
**tenant_id** | **str** | The Id of the tenant. | [optional] 
**tenant_in_quarantine** | **bool** | Indicates if data collection for this tenant is disabled or not. | [optional] 
**tenant_name** | **str** | The name of the tenant. | [optional] 

## Example

```python
from openapi_client.models.tenant import Tenant

# TODO update the JSON string below
json = "{}"
# create an instance of Tenant from a JSON string
tenant_instance = Tenant.from_json(json)
# print the JSON string representation of the object
print(Tenant.to_json())

# convert the object into a dict
tenant_dict = tenant_instance.to_dict()
# create an instance of Tenant from a dict
tenant_from_dict = Tenant.from_dict(tenant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


