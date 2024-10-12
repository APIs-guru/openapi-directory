# OperationalizationClusterUpdateParameters

Parameters for PATCH operation on an operationalization cluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater in length than 128 characters and a value no greater in length than 256 characters. | [optional] 

## Example

```python
from openapi_client.models.operationalization_cluster_update_parameters import OperationalizationClusterUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of OperationalizationClusterUpdateParameters from a JSON string
operationalization_cluster_update_parameters_instance = OperationalizationClusterUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(OperationalizationClusterUpdateParameters.to_json())

# convert the object into a dict
operationalization_cluster_update_parameters_dict = operationalization_cluster_update_parameters_instance.to_dict()
# create an instance of OperationalizationClusterUpdateParameters from a dict
operationalization_cluster_update_parameters_from_dict = OperationalizationClusterUpdateParameters.from_dict(operationalization_cluster_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


