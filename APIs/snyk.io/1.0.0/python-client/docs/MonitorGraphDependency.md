# MonitorGraphDependency


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_id** | **str** | Node id unique across the graph. | 

## Example

```python
from openapi_client.models.monitor_graph_dependency import MonitorGraphDependency

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorGraphDependency from a JSON string
monitor_graph_dependency_instance = MonitorGraphDependency.from_json(json)
# print the JSON string representation of the object
print(MonitorGraphDependency.to_json())

# convert the object into a dict
monitor_graph_dependency_dict = monitor_graph_dependency_instance.to_dict()
# create an instance of MonitorGraphDependency from a dict
monitor_graph_dependency_from_dict = MonitorGraphDependency.from_dict(monitor_graph_dependency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


