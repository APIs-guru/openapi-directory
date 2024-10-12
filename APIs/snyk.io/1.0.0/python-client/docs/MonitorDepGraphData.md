# MonitorDepGraphData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**graph** | [**MonitorGraph**](MonitorGraph.md) |  | 
**pkg_manager** | [**MonitorPkgManager**](MonitorPkgManager.md) |  | 
**pkgs** | **List[object]** | Array of package dependencies. | 
**schema_version** | **str** | Snyk DepGraph library schema version. | 

## Example

```python
from openapi_client.models.monitor_dep_graph_data import MonitorDepGraphData

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorDepGraphData from a JSON string
monitor_dep_graph_data_instance = MonitorDepGraphData.from_json(json)
# print the JSON string representation of the object
print(MonitorDepGraphData.to_json())

# convert the object into a dict
monitor_dep_graph_data_dict = monitor_dep_graph_data_instance.to_dict()
# create an instance of MonitorDepGraphData from a dict
monitor_dep_graph_data_from_dict = MonitorDepGraphData.from_dict(monitor_dep_graph_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


