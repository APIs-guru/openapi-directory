# OperationalizationClusterProperties

Properties of an operationalization cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_insights** | [**AppInsightsProperties**](AppInsightsProperties.md) |  | [optional] 
**cluster_type** | **str** | The cluster type. | 
**container_registry** | [**ContainerRegistryProperties**](ContainerRegistryProperties.md) |  | [optional] 
**container_service** | [**AcsClusterProperties**](AcsClusterProperties.md) |  | [optional] 
**created_on** | **datetime** | The date and time when the cluster was created. | [optional] [readonly] 
**description** | **str** | The description of the cluster. | [optional] 
**global_service_configuration** | [**GlobalServiceConfiguration**](GlobalServiceConfiguration.md) |  | [optional] 
**modified_on** | **datetime** | The date and time when the cluster was last modified. | [optional] [readonly] 
**provisioning_errors** | [**List[ErrorResponseWrapper]**](ErrorResponseWrapper.md) | List of provisioning errors reported by the resource provider. | [optional] [readonly] 
**provisioning_state** | **str** | The provision state of the cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed. | [optional] [readonly] 
**storage_account** | [**StorageAccountProperties**](StorageAccountProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.operationalization_cluster_properties import OperationalizationClusterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OperationalizationClusterProperties from a JSON string
operationalization_cluster_properties_instance = OperationalizationClusterProperties.from_json(json)
# print the JSON string representation of the object
print(OperationalizationClusterProperties.to_json())

# convert the object into a dict
operationalization_cluster_properties_dict = operationalization_cluster_properties_instance.to_dict()
# create an instance of OperationalizationClusterProperties from a dict
operationalization_cluster_properties_from_dict = OperationalizationClusterProperties.from_dict(operationalization_cluster_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


