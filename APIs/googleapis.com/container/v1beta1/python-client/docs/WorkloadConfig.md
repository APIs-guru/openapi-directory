# WorkloadConfig

WorkloadConfig defines the flags to enable or disable the workload configurations for the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_mode** | **str** | Sets which mode of auditing should be used for the cluster&#39;s workloads. | [optional] 

## Example

```python
from openapi_client.models.workload_config import WorkloadConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadConfig from a JSON string
workload_config_instance = WorkloadConfig.from_json(json)
# print the JSON string representation of the object
print(WorkloadConfig.to_json())

# convert the object into a dict
workload_config_dict = workload_config_instance.to_dict()
# create an instance of WorkloadConfig from a dict
workload_config_from_dict = WorkloadConfig.from_dict(workload_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


