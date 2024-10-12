# CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestDevicesInner]**](CreateOrganizationInventoryOnboardingCloudMonitoringImportRequestDevicesInner.md) | A set of device imports to commit | 

## Example

```python
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_import_request import CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest from a JSON string
create_organization_inventory_onboarding_cloud_monitoring_import_request_instance = CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest.to_json())

# convert the object into a dict
create_organization_inventory_onboarding_cloud_monitoring_import_request_dict = create_organization_inventory_onboarding_cloud_monitoring_import_request_instance.to_dict()
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest from a dict
create_organization_inventory_onboarding_cloud_monitoring_import_request_from_dict = CreateOrganizationInventoryOnboardingCloudMonitoringImportRequest.from_dict(create_organization_inventory_onboarding_cloud_monitoring_import_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


