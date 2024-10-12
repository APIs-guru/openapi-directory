# Job

Configuration for a job. The maximum allowed size for a job is 1MB.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_engine_http_target** | [**AppEngineHttpTarget**](AppEngineHttpTarget.md) |  | [optional] 
**attempt_deadline** | **str** | The deadline for job attempts. If the request handler does not respond by this deadline then the request is cancelled and the attempt is marked as a &#x60;DEADLINE_EXCEEDED&#x60; failure. The failed attempt can be viewed in execution logs. Cloud Scheduler will retry the job according to the RetryConfig. The default and the allowed values depend on the type of target: * For HTTP targets, the default is 3 minutes. The deadline must be in the interval [15 seconds, 30 minutes]. * For App Engine HTTP targets, 0 indicates that the request has the default deadline. The default deadline depends on the scaling type of the service: 10 minutes for standard apps with automatic scaling, 24 hours for standard apps with manual and basic scaling, and 60 minutes for flex apps. If the request deadline is set, it must be in the interval [15 seconds, 24 hours 15 seconds]. * For Pub/Sub targets, this field is ignored. | [optional] 
**description** | **str** | Optionally caller-specified in CreateJob or UpdateJob. A human-readable description for the job. This string must not contain more than 500 characters. | [optional] 
**http_target** | [**HttpTarget**](HttpTarget.md) |  | [optional] 
**last_attempt_time** | **str** | Output only. The time the last job attempt started. | [optional] [readonly] 
**name** | **str** | Optionally caller-specified in CreateJob, after which it becomes output only. The job name. For example: &#x60;projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID&#x60;. * &#x60;PROJECT_ID&#x60; can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * &#x60;LOCATION_ID&#x60; is the canonical ID for the job&#39;s location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * &#x60;JOB_ID&#x60; can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters. | [optional] 
**pubsub_target** | [**PubsubTarget**](PubsubTarget.md) |  | [optional] 
**retry_config** | [**RetryConfig**](RetryConfig.md) |  | [optional] 
**schedule** | **str** | Required, except when used with UpdateJob. Describes the schedule on which the job will be executed. The schedule can be either of the following types: * [Crontab](https://en.wikipedia.org/wiki/Cron#Overview) * English-like [schedule](https://cloud.google.com/scheduler/docs/configuring/cron-job-schedules) As a general rule, execution &#x60;n + 1&#x60; of a job will not begin until execution &#x60;n&#x60; has finished. Cloud Scheduler will never allow two simultaneously outstanding executions. For example, this implies that if the &#x60;n+1&#x60;th execution is scheduled to run at 16:00 but the &#x60;n&#x60;th execution takes until 16:15, the &#x60;n+1&#x60;th execution will not start until &#x60;16:15&#x60;. A scheduled start time will be delayed if the previous execution has not ended when its scheduled time occurs. If retry_count &gt; 0 and a job attempt fails, the job will be tried a total of retry_count times, with exponential backoff, until the next scheduled start time. If retry_count is 0, a job attempt will not be retried if it fails. Instead the Cloud Scheduler system will wait for the next scheduled execution time. Setting retry_count to 0 does not prevent failed jobs from running according to schedule after the failure. | [optional] 
**schedule_time** | **str** | Output only. The next time the job is scheduled. Note that this may be a retry of a previously failed attempt or the next execution time according to the schedule. | [optional] [readonly] 
**state** | **str** | Output only. State of the job. | [optional] [readonly] 
**status** | [**Status**](Status.md) |  | [optional] 
**time_zone** | **str** | Specifies the time zone to be used in interpreting schedule. The value of this field must be a time zone name from the [tz database](http://en.wikipedia.org/wiki/Tz_database). Note that some time zones include a provision for daylight savings time. The rules for daylight saving time are determined by the chosen tz. For UTC use the string \&quot;utc\&quot;. If a time zone is not specified, the default will be in UTC (also known as GMT). | [optional] 
**user_update_time** | **str** | Output only. The creation time of the job. | [optional] [readonly] 

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


