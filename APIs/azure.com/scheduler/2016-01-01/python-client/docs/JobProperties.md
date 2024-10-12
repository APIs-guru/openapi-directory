# JobProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**JobAction**](JobAction.md) |  | [optional] 
**recurrence** | [**JobRecurrence**](JobRecurrence.md) |  | [optional] 
**start_time** | **datetime** | Gets or sets the job start time. | [optional] 
**state** | [**JobState**](JobState.md) |  | [optional] 
**status** | [**JobStatus**](JobStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_properties import JobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobProperties from a JSON string
job_properties_instance = JobProperties.from_json(json)
# print the JSON string representation of the object
print(JobProperties.to_json())

# convert the object into a dict
job_properties_dict = job_properties_instance.to_dict()
# create an instance of JobProperties from a dict
job_properties_from_dict = JobProperties.from_dict(job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


