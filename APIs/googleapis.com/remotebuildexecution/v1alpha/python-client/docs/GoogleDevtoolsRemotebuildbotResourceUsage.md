# GoogleDevtoolsRemotebuildbotResourceUsage

ResourceUsage is the system resource usage of the host machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bot_state** | **str** |  | [optional] 
**cpu_used_percent** | **float** |  | [optional] 
**disk_usage** | [**GoogleDevtoolsRemotebuildbotResourceUsageStat**](GoogleDevtoolsRemotebuildbotResourceUsageStat.md) |  | [optional] 
**docker_root_disk_usage** | [**GoogleDevtoolsRemotebuildbotResourceUsageStat**](GoogleDevtoolsRemotebuildbotResourceUsageStat.md) |  | [optional] 
**memory_usage** | [**GoogleDevtoolsRemotebuildbotResourceUsageStat**](GoogleDevtoolsRemotebuildbotResourceUsageStat.md) |  | [optional] 
**total_disk_io_stats** | [**GoogleDevtoolsRemotebuildbotResourceUsageIOStats**](GoogleDevtoolsRemotebuildbotResourceUsageIOStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remotebuildbot_resource_usage import GoogleDevtoolsRemotebuildbotResourceUsage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemotebuildbotResourceUsage from a JSON string
google_devtools_remotebuildbot_resource_usage_instance = GoogleDevtoolsRemotebuildbotResourceUsage.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemotebuildbotResourceUsage.to_json())

# convert the object into a dict
google_devtools_remotebuildbot_resource_usage_dict = google_devtools_remotebuildbot_resource_usage_instance.to_dict()
# create an instance of GoogleDevtoolsRemotebuildbotResourceUsage from a dict
google_devtools_remotebuildbot_resource_usage_from_dict = GoogleDevtoolsRemotebuildbotResourceUsage.from_dict(google_devtools_remotebuildbot_resource_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


