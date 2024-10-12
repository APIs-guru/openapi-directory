# CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInner]**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInner.md) | A set of devices to import (or update) | 

## Example

```python
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_prepare_request import CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest from a JSON string
create_organization_inventory_onboarding_cloud_monitoring_prepare_request_instance = CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest.to_json())

# convert the object into a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare_request_dict = create_organization_inventory_onboarding_cloud_monitoring_prepare_request_instance.to_dict()
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest from a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare_request_from_dict = CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequest.from_dict(create_organization_inventory_onboarding_cloud_monitoring_prepare_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


