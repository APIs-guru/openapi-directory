# CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsUser

User credentials used to connect to the device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_key** | **str** | The public key for the registered user | [optional] 
**secret** | [**CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsUserSecret**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsUserSecret.md) |  | [optional] 
**username** | **str** | The username added to Catalyst device | [optional] 

## Example

```python
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_user import CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsUser

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsUser from a JSON string
create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_user_instance = CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsUser.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsUser.to_json())

# convert the object into a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_user_dict = create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_user_instance.to_dict()
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsUser from a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_user_from_dict = CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsUser.from_dict(create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


