# TenantOnboardingDetails

The tenant onboarding details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**onboarding_display_url** | **str** | The display url, to help tenant navigate or onboard to Azure Active Directory Connect Health blade, based on tenant onboarding status. | [optional] 
**tenant_onboarded** | **bool** | Indicates if the tenant is onboarded to Azure Active Directory Connect Health or not. | [optional] 

## Example

```python
from openapi_client.models.tenant_onboarding_details import TenantOnboardingDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TenantOnboardingDetails from a JSON string
tenant_onboarding_details_instance = TenantOnboardingDetails.from_json(json)
# print the JSON string representation of the object
print(TenantOnboardingDetails.to_json())

# convert the object into a dict
tenant_onboarding_details_dict = tenant_onboarding_details_instance.to_dict()
# create an instance of TenantOnboardingDetails from a dict
tenant_onboarding_details_from_dict = TenantOnboardingDetails.from_dict(tenant_onboarding_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


