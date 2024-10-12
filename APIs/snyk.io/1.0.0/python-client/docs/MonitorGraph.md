# MonitorGraph


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | **List[object]** | Array of node objects. | 
**root_node_id** | **str** | Root node id. Note the root node name is used as your project name. | 

## Example

```python
from openapi_client.models.monitor_graph import MonitorGraph

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorGraph from a JSON string
monitor_graph_instance = MonitorGraph.from_json(json)
# print the JSON string representation of the object
print(MonitorGraph.to_json())

# convert the object into a dict
monitor_graph_dict = monitor_graph_instance.to_dict()
# create an instance of MonitorGraph from a dict
monitor_graph_from_dict = MonitorGraph.from_dict(monitor_graph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


