# AzureHostingConfiguration

Provides information about how a machine is hosted in Azure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_service** | [**AzureCloudServiceConfiguration**](AzureCloudServiceConfiguration.md) |  | [optional] 
**fault_domain** | **str** | Fault domain of the VM. | [optional] 
**image** | [**ImageConfiguration**](ImageConfiguration.md) |  | [optional] 
**location** | **str** | Geographical location of the VM. | [optional] 
**name** | **str** | Machine name according to the hosting provider. | [optional] 
**resource_group** | **str** | Resource group name within the specified subscription. | [optional] 
**resource_id** | **str** | Unique identifier of the resource. | [optional] 
**service_fabric_cluster** | [**AzureServiceFabricClusterConfiguration**](AzureServiceFabricClusterConfiguration.md) |  | [optional] 
**size** | **str** | Size of the VM. | [optional] 
**subscription_id** | **str** | Subscription ID. | [optional] 
**update_domain** | **str** | Update domain of the VM. | [optional] 
**vm_id** | **str** | Virtual Machine ID (unique identifier). | [optional] 
**vm_scale_set** | [**AzureVmScaleSetConfiguration**](AzureVmScaleSetConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_hosting_configuration import AzureHostingConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AzureHostingConfiguration from a JSON string
azure_hosting_configuration_instance = AzureHostingConfiguration.from_json(json)
# print the JSON string representation of the object
print(AzureHostingConfiguration.to_json())

# convert the object into a dict
azure_hosting_configuration_dict = azure_hosting_configuration_instance.to_dict()
# create an instance of AzureHostingConfiguration from a dict
azure_hosting_configuration_from_dict = AzureHostingConfiguration.from_dict(azure_hosting_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


