# RetryAttempt

RetryAttempt represents an action of retrying the failed Cloud Deploy job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attempt** | **str** | Output only. The index of this retry attempt. | [optional] [readonly] 
**state** | **str** | Output only. Valid state of this retry action. | [optional] [readonly] 
**state_desc** | **str** | Output only. Description of the state of the Retry. | [optional] [readonly] 
**wait** | **str** | Output only. How long the operation will be paused. | [optional] [readonly] 

## Example

```python
from openapi_client.models.retry_attempt import RetryAttempt

# TODO update the JSON string below
json = "{}"
# create an instance of RetryAttempt from a JSON string
retry_attempt_instance = RetryAttempt.from_json(json)
# print the JSON string representation of the object
print(RetryAttempt.to_json())

# convert the object into a dict
retry_attempt_dict = retry_attempt_instance.to_dict()
# create an instance of RetryAttempt from a dict
retry_attempt_from_dict = RetryAttempt.from_dict(retry_attempt_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


