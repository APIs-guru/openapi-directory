# JobScheduleCreateParameters

The parameters supplied to the create job schedule operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**JobScheduleCreateProperties**](JobScheduleCreateProperties.md) |  | 

## Example

```python
from openapi_client.models.job_schedule_create_parameters import JobScheduleCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of JobScheduleCreateParameters from a JSON string
job_schedule_create_parameters_instance = JobScheduleCreateParameters.from_json(json)
# print the JSON string representation of the object
print(JobScheduleCreateParameters.to_json())

# convert the object into a dict
job_schedule_create_parameters_dict = job_schedule_create_parameters_instance.to_dict()
# create an instance of JobScheduleCreateParameters from a dict
job_schedule_create_parameters_from_dict = JobScheduleCreateParameters.from_dict(job_schedule_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


