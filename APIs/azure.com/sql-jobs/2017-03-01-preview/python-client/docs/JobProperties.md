# JobProperties

Properties of a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | User-defined description of the job. | [optional] [default to '']
**schedule** | [**JobSchedule**](JobSchedule.md) |  | [optional] 
**version** | **int** | The job version number. | [optional] [readonly] 

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


