# CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParams

Params used in order to connect to the device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_static_ip** | **str** | Static IP Address used to connect to the device | [optional] 
**tunnel** | [**CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsTunnel**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsTunnel.md) |  | [optional] 
**user** | [**CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsUser**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params import CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParams

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParams from a JSON string
create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_instance = CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParams.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParams.to_json())

# convert the object into a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_dict = create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_instance.to_dict()
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParams from a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_from_dict = CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParams.from_dict(create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


