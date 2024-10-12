# GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInnerDevice

Represents the details of an imported device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **bool** | Whether or not the device was successfully created in dashboard. | [optional] 
**status** | **str** | Represents the current state of importing the device. | [optional] 
**url** | **str** | The url to the device details page within dashboard. | [optional] 

## Example

```python
from openapi_client.models.get_organization_inventory_onboarding_cloud_monitoring_imports200_response_inner_device import GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInnerDevice

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInnerDevice from a JSON string
get_organization_inventory_onboarding_cloud_monitoring_imports200_response_inner_device_instance = GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInnerDevice.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInnerDevice.to_json())

# convert the object into a dict
get_organization_inventory_onboarding_cloud_monitoring_imports200_response_inner_device_dict = get_organization_inventory_onboarding_cloud_monitoring_imports200_response_inner_device_instance.to_dict()
# create an instance of GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInnerDevice from a dict
get_organization_inventory_onboarding_cloud_monitoring_imports200_response_inner_device_from_dict = GetOrganizationInventoryOnboardingCloudMonitoringImports200ResponseInnerDevice.from_dict(get_organization_inventory_onboarding_cloud_monitoring_imports200_response_inner_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


