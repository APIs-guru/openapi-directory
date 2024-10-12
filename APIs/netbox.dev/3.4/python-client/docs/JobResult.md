# JobResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completed** | **datetime** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**data** | **object** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**interval** | **int** | Recurrence interval (in minutes) | [optional] 
**job_id** | **str** |  | 
**name** | **str** |  | 
**obj_type** | **str** |  | [optional] [readonly] 
**scheduled** | **datetime** |  | [optional] 
**started** | **datetime** |  | [optional] 
**status** | [**Status6**](Status6.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**user** | [**NestedUser**](NestedUser.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_result import JobResult

# TODO update the JSON string below
json = "{}"
# create an instance of JobResult from a JSON string
job_result_instance = JobResult.from_json(json)
# print the JSON string representation of the object
print(JobResult.to_json())

# convert the object into a dict
job_result_dict = job_result_instance.to_dict()
# create an instance of JobResult from a dict
job_result_from_dict = JobResult.from_dict(job_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


