# GoogleCloudRunV2TaskAttemptResult

Result of a task attempt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exit_code** | **int** | Output only. The exit code of this attempt. This may be unset if the container was unable to exit cleanly with a code due to some other failure. See status field for possible failure details. | [optional] [readonly] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_task_attempt_result import GoogleCloudRunV2TaskAttemptResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2TaskAttemptResult from a JSON string
google_cloud_run_v2_task_attempt_result_instance = GoogleCloudRunV2TaskAttemptResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2TaskAttemptResult.to_json())

# convert the object into a dict
google_cloud_run_v2_task_attempt_result_dict = google_cloud_run_v2_task_attempt_result_instance.to_dict()
# create an instance of GoogleCloudRunV2TaskAttemptResult from a dict
google_cloud_run_v2_task_attempt_result_from_dict = GoogleCloudRunV2TaskAttemptResult.from_dict(google_cloud_run_v2_task_attempt_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


