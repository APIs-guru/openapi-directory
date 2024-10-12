# InstanceAttemptResult

Result of an instance attempt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exit_code** | **int** | Optional. The exit code of this attempt. This may be unset if the container was unable to exit cleanly with a code due to some other failure. See status field for possible failure details. | [optional] 
**status** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.instance_attempt_result import InstanceAttemptResult

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceAttemptResult from a JSON string
instance_attempt_result_instance = InstanceAttemptResult.from_json(json)
# print the JSON string representation of the object
print(InstanceAttemptResult.to_json())

# convert the object into a dict
instance_attempt_result_dict = instance_attempt_result_instance.to_dict()
# create an instance of InstanceAttemptResult from a dict
instance_attempt_result_from_dict = InstanceAttemptResult.from_dict(instance_attempt_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


