# MonitorDepGraphRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dep_graph** | [**MonitorDepGraphRequestDepGraph**](MonitorDepGraphRequestDepGraph.md) |  | 
**meta** | [**MonitorDepGraphRequestMeta**](MonitorDepGraphRequestMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.monitor_dep_graph_request import MonitorDepGraphRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorDepGraphRequest from a JSON string
monitor_dep_graph_request_instance = MonitorDepGraphRequest.from_json(json)
# print the JSON string representation of the object
print(MonitorDepGraphRequest.to_json())

# convert the object into a dict
monitor_dep_graph_request_dict = monitor_dep_graph_request_instance.to_dict()
# create an instance of MonitorDepGraphRequest from a dict
monitor_dep_graph_request_from_dict = MonitorDepGraphRequest.from_dict(monitor_dep_graph_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


