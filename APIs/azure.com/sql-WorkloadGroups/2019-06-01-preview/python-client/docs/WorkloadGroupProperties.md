# WorkloadGroupProperties

Workload group definition. For more information look at sys.workload_management_workload_groups (DMV).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**importance** | **str** | The workload group importance level. | [optional] 
**max_resource_percent** | **int** | The workload group cap percentage resource. | 
**max_resource_percent_per_request** | **float** | The workload group request maximum grant percentage. | [optional] 
**min_resource_percent** | **int** | The workload group minimum percentage resource. | 
**min_resource_percent_per_request** | **float** | The workload group request minimum grant percentage. | 
**query_execution_timeout** | **int** | The workload group query execution timeout. | [optional] 

## Example

```python
from openapi_client.models.workload_group_properties import WorkloadGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadGroupProperties from a JSON string
workload_group_properties_instance = WorkloadGroupProperties.from_json(json)
# print the JSON string representation of the object
print(WorkloadGroupProperties.to_json())

# convert the object into a dict
workload_group_properties_dict = workload_group_properties_instance.to_dict()
# create an instance of WorkloadGroupProperties from a dict
workload_group_properties_from_dict = WorkloadGroupProperties.from_dict(workload_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


