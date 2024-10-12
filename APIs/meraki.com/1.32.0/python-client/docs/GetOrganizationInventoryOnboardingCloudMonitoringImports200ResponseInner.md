# GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInnerDevice**](GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInnerDevice.md) |  | [optional] 
**import_id** | **str** | Database ID for the new entity entry. | [optional] 

## Example

```python
from openapi_client.models.get_organization_inventory_onboarding_cloud_monitoring_imports200_response_inner import GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner from a JSON string
get_organization_inventory_onboarding_cloud_monitoring_imports200_response_inner_instance = GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner.to_json())

# convert the object into a dict
get_organization_inventory_onboarding_cloud_monitoring_imports200_response_inner_dict = get_organization_inventory_onboarding_cloud_monitoring_imports200_response_inner_instance.to_dict()
# create an instance of GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner from a dict
get_organization_inventory_onboarding_cloud_monitoring_imports200_response_inner_from_dict = GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInner.from_dict(get_organization_inventory_onboarding_cloud_monitoring_imports200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


