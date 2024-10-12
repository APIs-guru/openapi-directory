# CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sudi** | **str** | Device SUDI certificate | 
**tunnel** | [**CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerTunnel**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerTunnel.md) |  | [optional] 
**user** | [**CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerUser**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerUser.md) |  | [optional] 
**vty** | [**CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerVty**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerVty.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner import CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInner from a JSON string
create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_instance = CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInner.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInner.to_json())

# convert the object into a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_dict = create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_instance.to_dict()
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInner from a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_from_dict = CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInner.from_dict(create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


