# MonitorGraphPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dep_graph** | [**MonitorDepGraphData**](MonitorDepGraphData.md) |  | 
**meta** | [**MonitorMetaData**](MonitorMetaData.md) |  | [optional] 

## Example

```python
from openapi_client.models.monitor_graph_payload import MonitorGraphPayload

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorGraphPayload from a JSON string
monitor_graph_payload_instance = MonitorGraphPayload.from_json(json)
# print the JSON string representation of the object
print(MonitorGraphPayload.to_json())

# convert the object into a dict
monitor_graph_payload_dict = monitor_graph_payload_instance.to_dict()
# create an instance of MonitorGraphPayload from a dict
monitor_graph_payload_from_dict = MonitorGraphPayload.from_dict(monitor_graph_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


