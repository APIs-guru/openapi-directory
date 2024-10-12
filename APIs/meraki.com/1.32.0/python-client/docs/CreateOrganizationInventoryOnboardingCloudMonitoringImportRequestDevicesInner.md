# CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestDevicesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | Import ID from the Import operation | 
**network_id** | **str** | Network Id | 
**udi** | **str** | Device UDI certificate | 

## Example

```python
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_import_request_devices_inner import CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestDevicesInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestDevicesInner from a JSON string
create_organization_inventory_onboarding_cloud_monitoring_import_request_devices_inner_instance = CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestDevicesInner.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestDevicesInner.to_json())

# convert the object into a dict
create_organization_inventory_onboarding_cloud_monitoring_import_request_devices_inner_dict = create_organization_inventory_onboarding_cloud_monitoring_import_request_devices_inner_instance.to_dict()
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestDevicesInner from a dict
create_organization_inventory_onboarding_cloud_monitoring_import_request_devices_inner_from_dict = CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestDevicesInner.from_dict(create_organization_inventory_onboarding_cloud_monitoring_import_request_devices_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


