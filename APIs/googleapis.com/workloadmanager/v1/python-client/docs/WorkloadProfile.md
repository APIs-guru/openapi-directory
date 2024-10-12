# WorkloadProfile

workload resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | [**Layer**](Layer.md) |  | [optional] 
**ascs** | [**Layer**](Layer.md) |  | [optional] 
**database** | [**Layer**](Layer.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. such as name, description, version. More example can be found in deployment | [optional] 
**name** | **str** | Identifier. name of resource names have the form &#39;projects/{project_id}/workloads/{workload_id}&#39; | [optional] 
**refreshed_time** | **str** | Required. time when the workload data was refreshed | [optional] 
**sap_workload** | [**SapWorkload**](SapWorkload.md) |  | [optional] 
**sqlserver_workload** | [**SqlserverWorkload**](SqlserverWorkload.md) |  | [optional] 
**state** | **str** | Output only. [output only] the current state if a a workload | [optional] [readonly] 
**three_tier_workload** | [**ThreeTierWorkload**](ThreeTierWorkload.md) |  | [optional] 
**workload_type** | **str** | Required. The type of the workload | [optional] 

## Example

```python
from openapi_client.models.workload_profile import WorkloadProfile

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadProfile from a JSON string
workload_profile_instance = WorkloadProfile.from_json(json)
# print the JSON string representation of the object
print(WorkloadProfile.to_json())

# convert the object into a dict
workload_profile_dict = workload_profile_instance.to_dict()
# create an instance of WorkloadProfile from a dict
workload_profile_from_dict = WorkloadProfile.from_dict(workload_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


