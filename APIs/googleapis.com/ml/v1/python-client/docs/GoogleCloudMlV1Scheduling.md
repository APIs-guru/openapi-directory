# GoogleCloudMlV1Scheduling

All parameters related to scheduling of training jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_running_time** | **str** | Optional. The maximum job running time, expressed in seconds. The field can contain up to nine fractional digits, terminated by &#x60;s&#x60;. If not specified, this field defaults to &#x60;604800s&#x60; (seven days). If the training job is still running after this duration, AI Platform Training cancels it. The duration is measured from when the job enters the &#x60;RUNNING&#x60; state; therefore it does not overlap with the duration limited by Scheduling.max_wait_time. For example, if you want to ensure your job runs for no more than 2 hours, set this field to &#x60;7200s&#x60; (2 hours * 60 minutes / hour * 60 seconds / minute). If you submit your training job using the &#x60;gcloud&#x60; tool, you can [specify this field in a &#x60;config.yaml&#x60; file](/ai-platform/training/docs/training-jobs#formatting_your_configuration_parameters). For example: &#x60;&#x60;&#x60;yaml trainingInput: scheduling: maxRunningTime: 7200s &#x60;&#x60;&#x60; | [optional] 
**max_wait_time** | **str** | Optional. The maximum job wait time, expressed in seconds. The field can contain up to nine fractional digits, terminated by &#x60;s&#x60;. If not specified, there is no limit to the wait time. The minimum for this field is &#x60;1800s&#x60; (30 minutes). If the training job has not entered the &#x60;RUNNING&#x60; state after this duration, AI Platform Training cancels it. After the job begins running, it can no longer be cancelled due to the maximum wait time. Therefore the duration limited by this field does not overlap with the duration limited by Scheduling.max_running_time. For example, if the job temporarily stops running and retries due to a [VM restart](/ai-platform/training/docs/overview#restarts), this cannot lead to a maximum wait time cancellation. However, independently of this constraint, AI Platform Training might stop a job if there are too many retries due to exhausted resources in a region. The following example describes how you might use this field: To cancel your job if it doesn&#39;t start running within 1 hour, set this field to &#x60;3600s&#x60; (1 hour * 60 minutes / hour * 60 seconds / minute). If the job is still in the &#x60;QUEUED&#x60; or &#x60;PREPARING&#x60; state after an hour of waiting, AI Platform Training cancels the job. If you submit your training job using the &#x60;gcloud&#x60; tool, you can [specify this field in a &#x60;config.yaml&#x60; file](/ai-platform/training/docs/training-jobs#formatting_your_configuration_parameters). For example: &#x60;&#x60;&#x60;yaml trainingInput: scheduling: maxWaitTime: 3600s &#x60;&#x60;&#x60; | [optional] 
**priority** | **int** | Optional. Job scheduling will be based on this priority, which in the range [0, 1000]. The bigger the number, the higher the priority. Default to 0 if not set. If there are multiple jobs requesting same type of accelerators, the high priority job will be scheduled prior to ones with low priority. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_scheduling import GoogleCloudMlV1Scheduling

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1Scheduling from a JSON string
google_cloud_ml_v1_scheduling_instance = GoogleCloudMlV1Scheduling.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1Scheduling.to_json())

# convert the object into a dict
google_cloud_ml_v1_scheduling_dict = google_cloud_ml_v1_scheduling_instance.to_dict()
# create an instance of GoogleCloudMlV1Scheduling from a dict
google_cloud_ml_v1_scheduling_from_dict = GoogleCloudMlV1Scheduling.from_dict(google_cloud_ml_v1_scheduling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


