# OperationalizationCluster

Instance of an Azure ML Operationalization Cluster resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**OperationalizationClusterProperties**](OperationalizationClusterProperties.md) |  | [optional] 
**id** | **str** | Specifies the resource ID. | [optional] [readonly] 
**location** | **str** | Specifies the location of the resource. | 
**name** | **str** | Specifies the name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Contains resource tags defined as key/value pairs. | [optional] 
**type** | **str** | Specifies the type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operationalization_cluster import OperationalizationCluster

# TODO update the JSON string below
json = "{}"
# create an instance of OperationalizationCluster from a JSON string
operationalization_cluster_instance = OperationalizationCluster.from_json(json)
# print the JSON string representation of the object
print(OperationalizationCluster.to_json())

# convert the object into a dict
operationalization_cluster_dict = operationalization_cluster_instance.to_dict()
# create an instance of OperationalizationCluster from a dict
operationalization_cluster_from_dict = OperationalizationCluster.from_dict(operationalization_cluster_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


