# Job

The Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **datetime** | The UTC time at which the job completed | [optional] 
**error** | [**JobErrorDetails**](JobErrorDetails.md) |  | [optional] 
**percent_complete** | **int** | The percentage of the job that is already complete | 
**properties** | [**JobProperties**](JobProperties.md) |  | [optional] 
**start_time** | **datetime** | The UTC time at which the job was started | [optional] 
**status** | **str** | Current status of the job | 
**id** | **str** | The identifier. | [optional] [readonly] 
**name** | **str** | The name. | [optional] [readonly] 
**type** | **str** | The type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job import Job

# TODO update the JSON string below
json = "{}"
# create an instance of Job from a JSON string
job_instance = Job.from_json(json)
# print the JSON string representation of the object
print(Job.to_json())

# convert the object into a dict
job_dict = job_instance.to_dict()
# create an instance of Job from a dict
job_from_dict = Job.from_dict(job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


