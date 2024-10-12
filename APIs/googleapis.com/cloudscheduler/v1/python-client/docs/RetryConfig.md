# RetryConfig

Settings that determine the retry behavior. By default, if a job does not complete successfully (meaning that an acknowledgement is not received from the handler, then it will be retried with exponential backoff according to the settings in RetryConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_backoff_duration** | **str** | The maximum amount of time to wait before retrying a job after it fails. The default value of this field is 1 hour. | [optional] 
**max_doublings** | **int** | The time between retries will double &#x60;max_doublings&#x60; times. A job&#39;s retry interval starts at min_backoff_duration, then doubles &#x60;max_doublings&#x60; times, then increases linearly, and finally retries at intervals of max_backoff_duration up to retry_count times. For example, if min_backoff_duration is 10s, max_backoff_duration is 300s, and &#x60;max_doublings&#x60; is 3, then the job will first be retried in 10s. The retry interval will double three times, and then increase linearly by 2^3 * 10s. Finally, the job will retry at intervals of max_backoff_duration until the job has been attempted retry_count times. Thus, the requests will retry at 10s, 20s, 40s, 80s, 160s, 240s, 300s, 300s, .... The default value of this field is 5. | [optional] 
**max_retry_duration** | **str** | The time limit for retrying a failed job, measured from time when an execution was first attempted. If specified with retry_count, the job will be retried until both limits are reached. The default value for max_retry_duration is zero, which means retry duration is unlimited. | [optional] 
**min_backoff_duration** | **str** | The minimum amount of time to wait before retrying a job after it fails. The default value of this field is 5 seconds. | [optional] 
**retry_count** | **int** | The number of attempts that the system will make to run a job using the exponential backoff procedure described by max_doublings. The default value of retry_count is zero. If retry_count is 0, a job attempt will not be retried if it fails. Instead the Cloud Scheduler system will wait for the next scheduled execution time. Setting retry_count to 0 does not prevent failed jobs from running according to schedule after the failure. If retry_count is set to a non-zero number then Cloud Scheduler will retry failed attempts, using exponential backoff, retry_count times, or until the next scheduled execution time, whichever comes first. Values greater than 5 and negative values are not allowed. | [optional] 

## Example

```python
from openapi_client.models.retry_config import RetryConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RetryConfig from a JSON string
retry_config_instance = RetryConfig.from_json(json)
# print the JSON string representation of the object
print(RetryConfig.to_json())

# convert the object into a dict
retry_config_dict = retry_config_instance.to_dict()
# create an instance of RetryConfig from a dict
retry_config_from_dict = RetryConfig.from_dict(retry_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


