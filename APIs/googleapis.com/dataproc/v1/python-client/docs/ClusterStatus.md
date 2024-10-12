# ClusterStatus

The status of a cluster and its instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | Optional. Output only. Details of cluster&#39;s state. | [optional] [readonly] 
**state** | **str** | Output only. The cluster&#39;s state. | [optional] [readonly] 
**state_start_time** | **str** | Output only. Time when this state was entered (see JSON representation of Timestamp (https://developers.google.com/protocol-buffers/docs/proto3#json)). | [optional] [readonly] 
**substate** | **str** | Output only. Additional state information that includes status reported by the agent. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster_status import ClusterStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterStatus from a JSON string
cluster_status_instance = ClusterStatus.from_json(json)
# print the JSON string representation of the object
print(ClusterStatus.to_json())

# convert the object into a dict
cluster_status_dict = cluster_status_instance.to_dict()
# create an instance of ClusterStatus from a dict
cluster_status_from_dict = ClusterStatus.from_dict(cluster_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


