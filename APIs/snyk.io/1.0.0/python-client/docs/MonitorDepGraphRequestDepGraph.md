# MonitorDepGraphRequestDepGraph

A [DepGraph data object](https://github.com/snyk/dep-graph#depgraphdata) defining all packages and their relationships.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**graph** | [**MonitorDepGraphRequestDepGraphGraph**](MonitorDepGraphRequestDepGraphGraph.md) |  | 
**pkg_manager** | [**MonitorDepGraphRequestDepGraphPkgManager**](MonitorDepGraphRequestDepGraphPkgManager.md) |  | 
**pkgs** | **List[object]** | Array of package dependencies. | 
**schema_version** | **str** | Snyk DepGraph library schema version. | 

## Example

```python
from openapi_client.models.monitor_dep_graph_request_dep_graph import MonitorDepGraphRequestDepGraph

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorDepGraphRequestDepGraph from a JSON string
monitor_dep_graph_request_dep_graph_instance = MonitorDepGraphRequestDepGraph.from_json(json)
# print the JSON string representation of the object
print(MonitorDepGraphRequestDepGraph.to_json())

# convert the object into a dict
monitor_dep_graph_request_dep_graph_dict = monitor_dep_graph_request_dep_graph_instance.to_dict()
# create an instance of MonitorDepGraphRequestDepGraph from a dict
monitor_dep_graph_request_dep_graph_from_dict = MonitorDepGraphRequestDepGraph.from_dict(monitor_dep_graph_request_dep_graph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


