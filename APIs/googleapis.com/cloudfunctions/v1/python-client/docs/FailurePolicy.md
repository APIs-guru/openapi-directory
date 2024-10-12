# FailurePolicy

Describes the policy in case of function's execution failure. If empty, then defaults to ignoring failures (i.e. not retrying them).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retry** | **object** | Describes the retry policy in case of function&#39;s execution failure. A function execution will be retried on any failure. A failed execution will be retried up to 7 days with an exponential backoff (capped at 10 seconds). Retried execution is charged as any other execution. | [optional] 

## Example

```python
from openapi_client.models.failure_policy import FailurePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of FailurePolicy from a JSON string
failure_policy_instance = FailurePolicy.from_json(json)
# print the JSON string representation of the object
print(FailurePolicy.to_json())

# convert the object into a dict
failure_policy_dict = failure_policy_instance.to_dict()
# create an instance of FailurePolicy from a dict
failure_policy_from_dict = FailurePolicy.from_dict(failure_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


