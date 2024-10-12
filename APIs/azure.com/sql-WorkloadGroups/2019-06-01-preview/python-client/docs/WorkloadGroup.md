# WorkloadGroup

Workload group operations for a data warehouse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WorkloadGroupProperties**](WorkloadGroupProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workload_group import WorkloadGroup

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadGroup from a JSON string
workload_group_instance = WorkloadGroup.from_json(json)
# print the JSON string representation of the object
print(WorkloadGroup.to_json())

# convert the object into a dict
workload_group_dict = workload_group_instance.to_dict()
# create an instance of WorkloadGroup from a dict
workload_group_from_dict = WorkloadGroup.from_dict(workload_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


