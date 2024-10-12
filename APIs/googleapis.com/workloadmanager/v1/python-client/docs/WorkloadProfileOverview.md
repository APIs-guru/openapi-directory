# WorkloadProfileOverview

a workload profile overview

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sap_workload_overview** | [**SapWorkloadOverview**](SapWorkloadOverview.md) |  | [optional] 
**sqlserver_workload_overview** | [**SqlserverWorkloadOverview**](SqlserverWorkloadOverview.md) |  | [optional] 
**three_tier_workload_overview** | [**ThreeTierWorkloadOverview**](ThreeTierWorkloadOverview.md) |  | [optional] 

## Example

```python
from openapi_client.models.workload_profile_overview import WorkloadProfileOverview

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadProfileOverview from a JSON string
workload_profile_overview_instance = WorkloadProfileOverview.from_json(json)
# print the JSON string representation of the object
print(WorkloadProfileOverview.to_json())

# convert the object into a dict
workload_profile_overview_dict = workload_profile_overview_instance.to_dict()
# create an instance of WorkloadProfileOverview from a dict
workload_profile_overview_from_dict = WorkloadProfileOverview.from_dict(workload_profile_overview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


