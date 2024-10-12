# GoogleRpcPreconditionFailureViolation

A message type used to describe a single precondition failure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description of how the precondition failed. Developers can use this description to understand how to fix the failure. For example: \&quot;Terms of service not accepted\&quot;. | [optional] 
**subject** | **str** | The subject, relative to the type, that failed. For example, \&quot;google.com/cloud\&quot; relative to the \&quot;TOS\&quot; type would indicate which terms of service is being referenced. | [optional] 
**type** | **str** | The type of PreconditionFailure. We recommend using a service-specific enum type to define the supported precondition violation subjects. For example, \&quot;TOS\&quot; for \&quot;Terms of Service violation\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_rpc_precondition_failure_violation import GoogleRpcPreconditionFailureViolation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleRpcPreconditionFailureViolation from a JSON string
google_rpc_precondition_failure_violation_instance = GoogleRpcPreconditionFailureViolation.from_json(json)
# print the JSON string representation of the object
print(GoogleRpcPreconditionFailureViolation.to_json())

# convert the object into a dict
google_rpc_precondition_failure_violation_dict = google_rpc_precondition_failure_violation_instance.to_dict()
# create an instance of GoogleRpcPreconditionFailureViolation from a dict
google_rpc_precondition_failure_violation_from_dict = GoogleRpcPreconditionFailureViolation.from_dict(google_rpc_precondition_failure_violation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


