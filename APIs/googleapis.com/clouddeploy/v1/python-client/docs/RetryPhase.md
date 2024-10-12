# RetryPhase

RetryPhase contains the retry attempts and the metadata for initiating a new attempt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempts** | [**List[RetryAttempt]**](RetryAttempt.md) | Output only. Detail of a retry action. | [optional] [readonly] 
**backoff_mode** | **str** | Output only. The pattern of how the wait time of the retry attempt is calculated. | [optional] [readonly] 
**job_id** | **str** | Output only. The job ID for the Job to retry. | [optional] [readonly] 
**phase_id** | **str** | Output only. The phase ID of the phase that includes the job being retried. | [optional] [readonly] 
**total_attempts** | **str** | Output only. The number of attempts that have been made. | [optional] [readonly] 

## Example

```python
from openapi_client.models.retry_phase import RetryPhase

# TODO update the JSON string below
json = "{}"
# create an instance of RetryPhase from a JSON string
retry_phase_instance = RetryPhase.from_json(json)
# print the JSON string representation of the object
print(RetryPhase.to_json())

# convert the object into a dict
retry_phase_dict = retry_phase_instance.to_dict()
# create an instance of RetryPhase from a dict
retry_phase_from_dict = RetryPhase.from_dict(retry_phase_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


