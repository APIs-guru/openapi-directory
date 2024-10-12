# AttemptFailureReason


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_message** | **str** |  | [optional] 
**failure_origin** | [**AttemptFailureOrigin**](AttemptFailureOrigin.md) |  | [optional] 
**failure_type** | [**AttemptFailureType**](AttemptFailureType.md) |  | [optional] 
**internal_message** | **str** |  | [optional] 
**retryable** | **bool** | True if it is known that retrying may succeed, e.g. for a transient failure. False if it is known that a retry will not succeed, e.g. for a configuration issue. If not set, retryable status is not well known. | [optional] 
**stacktrace** | **str** |  | [optional] 
**timestamp** | **int** |  | 

## Example

```python
from openapi_client.models.attempt_failure_reason import AttemptFailureReason

# TODO update the JSON string below
json = "{}"
# create an instance of AttemptFailureReason from a JSON string
attempt_failure_reason_instance = AttemptFailureReason.from_json(json)
# print the JSON string representation of the object
print(AttemptFailureReason.to_json())

# convert the object into a dict
attempt_failure_reason_dict = attempt_failure_reason_instance.to_dict()
# create an instance of AttemptFailureReason from a dict
attempt_failure_reason_from_dict = AttemptFailureReason.from_dict(attempt_failure_reason_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


