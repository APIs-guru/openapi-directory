# WorkloadPolicyConfig

WorkloadPolicyConfig is the configuration of workload policy for autopilot clusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_net_admin** | **bool** | If true, workloads can use NET_ADMIN capability. | [optional] 

## Example

```python
from openapi_client.models.workload_policy_config import WorkloadPolicyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadPolicyConfig from a JSON string
workload_policy_config_instance = WorkloadPolicyConfig.from_json(json)
# print the JSON string representation of the object
print(WorkloadPolicyConfig.to_json())

# convert the object into a dict
workload_policy_config_dict = workload_policy_config_instance.to_dict()
# create an instance of WorkloadPolicyConfig from a dict
workload_policy_config_from_dict = WorkloadPolicyConfig.from_dict(workload_policy_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


