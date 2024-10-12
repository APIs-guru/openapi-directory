# MonitorNode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deps** | **List[object]** | An array of package ids this package depends on. | [optional] 
**node_id** | **str** | Node id unique across the graph. | 
**pkg_id** | **str** | Package id reference should match id in pkg array and take the format name@version. | 

## Example

```python
from openapi_client.models.monitor_node import MonitorNode

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorNode from a JSON string
monitor_node_instance = MonitorNode.from_json(json)
# print the JSON string representation of the object
print(MonitorNode.to_json())

# convert the object into a dict
monitor_node_dict = monitor_node_instance.to_dict()
# create an instance of MonitorNode from a dict
monitor_node_from_dict = MonitorNode.from_dict(monitor_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


