# JobScheduling

Job scheduling options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_failures_per_hour** | **int** | Optional. Maximum number of times per hour a driver can be restarted as a result of driver exiting with non-zero code before job is reported failed.A job might be reported as thrashing if the driver exits with a non-zero code four times within a 10-minute window.Maximum value is 10.Note: This restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template). | [optional] 
**max_failures_total** | **int** | Optional. Maximum total number of times a driver can be restarted as a result of the driver exiting with a non-zero code. After the maximum number is reached, the job will be reported as failed.Maximum value is 240.Note: Currently, this restartable job option is not supported in Dataproc workflow templates (https://cloud.google.com/dataproc/docs/concepts/workflows/using-workflows#adding_jobs_to_a_template). | [optional] 

## Example

```python
from openapi_client.models.job_scheduling import JobScheduling

# TODO update the JSON string below
json = "{}"
# create an instance of JobScheduling from a JSON string
job_scheduling_instance = JobScheduling.from_json(json)
# print the JSON string representation of the object
print(JobScheduling.to_json())

# convert the object into a dict
job_scheduling_dict = job_scheduling_instance.to_dict()
# create an instance of JobScheduling from a dict
job_scheduling_from_dict = JobScheduling.from_dict(job_scheduling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


