# CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerVty

VTY Related Parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_list** | [**CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerVtyAccessList**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerVtyAccessList.md) |  | [optional] 
**authentication** | [**CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerVtyAuthentication**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerVtyAuthentication.md) |  | [optional] 
**authorization** | [**CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerVtyAuthorization**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerVtyAuthorization.md) |  | [optional] 
**end_line_number** | **int** | Ending line VTY number | [optional] 
**rotary_number** | **int** | SSH rotary number | [optional] 
**start_line_number** | **int** | Starting line VTY number | [optional] 

## Example

```python
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_vty import CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerVty

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerVty from a JSON string
create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_vty_instance = CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerVty.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerVty.to_json())

# convert the object into a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_vty_dict = create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_vty_instance.to_dict()
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerVty from a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_vty_from_dict = CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerVty.from_dict(create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_vty_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


