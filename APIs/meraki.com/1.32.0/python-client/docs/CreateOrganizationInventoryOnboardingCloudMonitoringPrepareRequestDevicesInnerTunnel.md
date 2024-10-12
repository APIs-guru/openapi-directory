# CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerTunnel

TLS Related Parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_name** | **str** | Name of the configured TLS certificate | [optional] 
**local_interface** | **int** | Number of the vlan expected to be used to connect to the cloud | [optional] 
**loopback_number** | **int** | Number of the configured Loopback Interface used for TLS overlay | [optional] 
**name** | **str** | Name of the configured TLS tunnel | [optional] 

## Example

```python
from openapi_client.models.create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_tunnel import CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerTunnel

# TODO update the JSON string below
json = "{}"
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerTunnel from a JSON string
create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_tunnel_instance = CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerTunnel.from_json(json)
# print the JSON string representation of the object
print(CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerTunnel.to_json())

# convert the object into a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_tunnel_dict = create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_tunnel_instance.to_dict()
# create an instance of CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerTunnel from a dict
create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_tunnel_from_dict = CreateOrganizationInventoryOnboardingCloudMonitoringPrepareRequestDevicesInnerTunnel.from_dict(create_organization_inventory_onboarding_cloud_monitoring_prepare_request_devices_inner_tunnel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


