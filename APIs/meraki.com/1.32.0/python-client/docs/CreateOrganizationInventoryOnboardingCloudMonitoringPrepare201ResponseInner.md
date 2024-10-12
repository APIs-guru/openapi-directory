# CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_params** | [**CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParams**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParams.md) |  | [optional] 
**device_id** | **str** | Import ID from the Import operation | [optional] 
**message** | **str** | Message related to whether or not the device was found and can be imported. | [optional] 
**status** | **str** | The import status of the device | [optional] 
**udi** | **str** | Device UDI certificate | [optional] 

## Example

```python
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner import CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner from a JSON string
create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_instance = CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner.to_json())

# convert the object into a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_dict = create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_instance.to_dict()
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner from a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_from_dict = CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInner.from_dict(create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


