# ClusterOperationStatus

The status of the operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | Output only. A message containing any operation metadata details. | [optional] [readonly] 
**inner_state** | **str** | Output only. A message containing the detailed operation state. | [optional] [readonly] 
**state** | **str** | Output only. A message containing the operation state. | [optional] [readonly] 
**state_start_time** | **str** | Output only. The time this state was entered. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster_operation_status import ClusterOperationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterOperationStatus from a JSON string
cluster_operation_status_instance = ClusterOperationStatus.from_json(json)
# print the JSON string representation of the object
print(ClusterOperationStatus.to_json())

# convert the object into a dict
cluster_operation_status_dict = cluster_operation_status_instance.to_dict()
# create an instance of ClusterOperationStatus from a dict
cluster_operation_status_from_dict = ClusterOperationStatus.from_dict(cluster_operation_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


