# CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_event** | **str** | The type of log event this is recording, e.g. download or opening a banner | 
**request** | **str** | Used to describe if this event was the result of a redirect. E.g. a query param if an info banner is being used | [optional] 
**target_os** | **str** | The name of the onboarding distro being downloaded | [optional] 
**timestamp** | **int** | A JavaScript UTC datetime stamp for when the even occurred | 

## Example

```python
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_export_event_request import CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest from a JSON string
create_organization_inventory_onboarding_cloud_monitoring_export_event_request_instance = CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest.to_json())

# convert the object into a dict
create_organization_inventory_onboarding_cloud_monitoring_export_event_request_dict = create_organization_inventory_onboarding_cloud_monitoring_export_event_request_instance.to_dict()
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest from a dict
create_organization_inventory_onboarding_cloud_monitoring_export_event_request_from_dict = CreateOrganizationInventoryOnboardingCloudMonitoringExportEventRequest.from_dict(create_organization_inventory_onboarding_cloud_monitoring_export_event_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


