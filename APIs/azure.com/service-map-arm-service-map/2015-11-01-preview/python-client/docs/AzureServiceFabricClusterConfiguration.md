# AzureServiceFabricClusterConfiguration

Describes an Azure Service Fabric Cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_id** | **str** | Service Fabric cluster identifier. | [optional] 
**name** | **str** | Service Fabric cluster name. | [optional] 

## Example

```python
from openapi_client.models.azure_service_fabric_cluster_configuration import AzureServiceFabricClusterConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AzureServiceFabricClusterConfiguration from a JSON string
azure_service_fabric_cluster_configuration_instance = AzureServiceFabricClusterConfiguration.from_json(json)
# print the JSON string representation of the object
print(AzureServiceFabricClusterConfiguration.to_json())

# convert the object into a dict
azure_service_fabric_cluster_configuration_dict = azure_service_fabric_cluster_configuration_instance.to_dict()
# create an instance of AzureServiceFabricClusterConfiguration from a dict
azure_service_fabric_cluster_configuration_from_dict = AzureServiceFabricClusterConfiguration.from_dict(azure_service_fabric_cluster_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


