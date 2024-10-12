# GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility

SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eligible** | **bool** | Whether an instance is eligible or ineligible. | [optional] 
**reason** | **str** | User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_saasaccelerator_management_providers_v1_slo_eligibility import GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility from a JSON string
google_cloud_saasaccelerator_management_providers_v1_slo_eligibility_instance = GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility.to_json())

# convert the object into a dict
google_cloud_saasaccelerator_management_providers_v1_slo_eligibility_dict = google_cloud_saasaccelerator_management_providers_v1_slo_eligibility_instance.to_dict()
# create an instance of GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility from a dict
google_cloud_saasaccelerator_management_providers_v1_slo_eligibility_from_dict = GoogleCloudSaasacceleratorManagementProvidersV1SloEligibility.from_dict(google_cloud_saasaccelerator_management_providers_v1_slo_eligibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


