# WorkloadALTSConfig

Configuration for direct-path (via ALTS) with workload identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_alts** | **bool** | enable_alts controls whether the alts handshaker should be enabled or not for direct-path. Requires Workload Identity (workload_pool must be non-empty). | [optional] 

## Example

```python
from openapi_client.models.workload_alts_config import WorkloadALTSConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadALTSConfig from a JSON string
workload_alts_config_instance = WorkloadALTSConfig.from_json(json)
# print the JSON string representation of the object
print(WorkloadALTSConfig.to_json())

# convert the object into a dict
workload_alts_config_dict = workload_alts_config_instance.to_dict()
# create an instance of WorkloadALTSConfig from a dict
workload_alts_config_from_dict = WorkloadALTSConfig.from_dict(workload_alts_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


