# VMInsightsOnboardingStatus

VM Insights onboarding status for a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Resource properties. | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**name** | **str** | Azure resource name | [optional] [readonly] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.vm_insights_onboarding_status import VMInsightsOnboardingStatus

# TODO update the JSON string below
json = "{}"
# create an instance of VMInsightsOnboardingStatus from a JSON string
vm_insights_onboarding_status_instance = VMInsightsOnboardingStatus.from_json(json)
# print the JSON string representation of the object
print(VMInsightsOnboardingStatus.to_json())

# convert the object into a dict
vm_insights_onboarding_status_dict = vm_insights_onboarding_status_instance.to_dict()
# create an instance of VMInsightsOnboardingStatus from a dict
vm_insights_onboarding_status_from_dict = VMInsightsOnboardingStatus.from_dict(vm_insights_onboarding_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


