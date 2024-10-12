# MonitorDepGraphRequestMeta

Project metadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_framework** | **str** | Required for a NuGet or Paket DepGraph only. Specify the target framework in your project file using Target Framework Monikers (TFMs). For example, netstandard1.0, netcoreapp1.0 or net452. Test each framework separately if you have multiple defined. | [optional] 

## Example

```python
from openapi_client.models.monitor_dep_graph_request_meta import MonitorDepGraphRequestMeta

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorDepGraphRequestMeta from a JSON string
monitor_dep_graph_request_meta_instance = MonitorDepGraphRequestMeta.from_json(json)
# print the JSON string representation of the object
print(MonitorDepGraphRequestMeta.to_json())

# convert the object into a dict
monitor_dep_graph_request_meta_dict = monitor_dep_graph_request_meta_instance.to_dict()
# create an instance of MonitorDepGraphRequestMeta from a dict
monitor_dep_graph_request_meta_from_dict = MonitorDepGraphRequestMeta.from_dict(monitor_dep_graph_request_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


