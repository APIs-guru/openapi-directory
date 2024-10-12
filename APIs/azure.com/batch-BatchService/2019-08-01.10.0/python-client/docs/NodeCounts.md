# NodeCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creating** | **int** |  | 
**idle** | **int** |  | 
**leaving_pool** | **int** |  | 
**offline** | **int** |  | 
**preempted** | **int** |  | 
**rebooting** | **int** |  | 
**reimaging** | **int** |  | 
**running** | **int** |  | 
**start_task_failed** | **int** |  | 
**starting** | **int** |  | 
**total** | **int** |  | 
**unknown** | **int** |  | 
**unusable** | **int** |  | 
**waiting_for_start_task** | **int** |  | 

## Example

```python
from openapi_client.models.node_counts import NodeCounts

# TODO update the JSON string below
json = "{}"
# create an instance of NodeCounts from a JSON string
node_counts_instance = NodeCounts.from_json(json)
# print the JSON string representation of the object
print(NodeCounts.to_json())

# convert the object into a dict
node_counts_dict = node_counts_instance.to_dict()
# create an instance of NodeCounts from a dict
node_counts_from_dict = NodeCounts.from_dict(node_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


