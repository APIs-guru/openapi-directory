# CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsTunnel

Configuration options used to connect to the device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | SSH tunnel URL used to connect to the device | [optional] 
**mode** | **str** |  | [optional] 
**name** | **str** | The name of the tunnel we are attempting to connect to | [optional] 
**port** | **str** | The port used for the ssh tunnel. | [optional] 
**root_certificate** | [**CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsTunnelRootCertificate**](CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsTunnelRootCertificate.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_tunnel import CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsTunnel

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsTunnel from a JSON string
create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_tunnel_instance = CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsTunnel.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsTunnel.to_json())

# convert the object into a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_tunnel_dict = create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_tunnel_instance.to_dict()
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsTunnel from a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_tunnel_from_dict = CreateOrganizationInventoryOnboardingCloudMonitoringPrepare201ResponseInnerConfigParamsTunnel.from_dict(create_organization_inventory_onboarding_cloud_monitoring_prepare201_response_inner_config_params_tunnel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


