# NodeSetup

Node setup settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mount_volumes** | [**MountVolumes**](MountVolumes.md) |  | [optional] 
**performance_counters_settings** | [**PerformanceCountersSettings**](PerformanceCountersSettings.md) |  | [optional] 
**setup_task** | [**SetupTask**](SetupTask.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_setup import NodeSetup

# TODO update the JSON string below
json = "{}"
# create an instance of NodeSetup from a JSON string
node_setup_instance = NodeSetup.from_json(json)
# print the JSON string representation of the object
print(NodeSetup.to_json())

# convert the object into a dict
node_setup_dict = node_setup_instance.to_dict()
# create an instance of NodeSetup from a dict
node_setup_from_dict = NodeSetup.from_dict(node_setup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


