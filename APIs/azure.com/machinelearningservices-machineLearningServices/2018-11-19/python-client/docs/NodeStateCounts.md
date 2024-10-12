# NodeStateCounts

Counts of various compute node states on the amlCompute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idle_node_count** | **int** | Number of compute nodes in idle state. | [optional] [readonly] 
**leaving_node_count** | **int** | Number of compute nodes which are leaving the amlCompute. | [optional] [readonly] 
**preempted_node_count** | **int** | Number of compute nodes which are in preempted state. | [optional] [readonly] 
**preparing_node_count** | **int** | Number of compute nodes which are being prepared. | [optional] [readonly] 
**running_node_count** | **int** | Number of compute nodes which are running jobs. | [optional] [readonly] 
**unusable_node_count** | **int** | Number of compute nodes which are in unusable state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.node_state_counts import NodeStateCounts

# TODO update the JSON string below
json = "{}"
# create an instance of NodeStateCounts from a JSON string
node_state_counts_instance = NodeStateCounts.from_json(json)
# print the JSON string representation of the object
print(NodeStateCounts.to_json())

# convert the object into a dict
node_state_counts_dict = node_state_counts_instance.to_dict()
# create an instance of NodeStateCounts from a dict
node_state_counts_from_dict = NodeStateCounts.from_dict(node_state_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


