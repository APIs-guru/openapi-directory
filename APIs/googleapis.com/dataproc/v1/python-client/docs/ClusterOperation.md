# ClusterOperation

The cluster operation triggered by a workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**done** | **bool** | Output only. Indicates the operation is done. | [optional] [readonly] 
**error** | **str** | Output only. Error, if operation failed. | [optional] [readonly] 
**operation_id** | **str** | Output only. The id of the cluster operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster_operation import ClusterOperation

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterOperation from a JSON string
cluster_operation_instance = ClusterOperation.from_json(json)
# print the JSON string representation of the object
print(ClusterOperation.to_json())

# convert the object into a dict
cluster_operation_dict = cluster_operation_instance.to_dict()
# create an instance of ClusterOperation from a dict
cluster_operation_from_dict = ClusterOperation.from_dict(cluster_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


