# JobFilter

Contains the information about the filters for the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time** | **datetime** | The start time of the job. | [optional] 
**status** | **str** | The status of the job. | 

## Example

```python
from openapi_client.models.job_filter import JobFilter

# TODO update the JSON string below
json = "{}"
# create an instance of JobFilter from a JSON string
job_filter_instance = JobFilter.from_json(json)
# print the JSON string representation of the object
print(JobFilter.to_json())

# convert the object into a dict
job_filter_dict = job_filter_instance.to_dict()
# create an instance of JobFilter from a dict
job_filter_from_dict = JobFilter.from_dict(job_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


