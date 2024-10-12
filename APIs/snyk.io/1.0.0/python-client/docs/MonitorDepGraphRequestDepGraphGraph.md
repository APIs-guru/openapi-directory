# MonitorDepGraphRequestDepGraphGraph

Graph object references each pkg and how they depend on each other through the deps property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | **List[object]** | Array of node objects. | 
**root_node_id** | **str** | Root node id. Note the root node name is used as your project name. | 

## Example

```python
from openapi_client.models.monitor_dep_graph_request_dep_graph_graph import MonitorDepGraphRequestDepGraphGraph

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorDepGraphRequestDepGraphGraph from a JSON string
monitor_dep_graph_request_dep_graph_graph_instance = MonitorDepGraphRequestDepGraphGraph.from_json(json)
# print the JSON string representation of the object
print(MonitorDepGraphRequestDepGraphGraph.to_json())

# convert the object into a dict
monitor_dep_graph_request_dep_graph_graph_dict = monitor_dep_graph_request_dep_graph_graph_instance.to_dict()
# create an instance of MonitorDepGraphRequestDepGraphGraph from a dict
monitor_dep_graph_request_dep_graph_graph_from_dict = MonitorDepGraphRequestDepGraphGraph.from_dict(monitor_dep_graph_request_dep_graph_graph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


