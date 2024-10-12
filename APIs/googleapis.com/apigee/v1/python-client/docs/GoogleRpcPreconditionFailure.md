# GoogleRpcPreconditionFailure

Describes what preconditions have failed. For example, if an RPC failed because it required the Terms of Service to be acknowledged, it could list the terms of service violation in the PreconditionFailure message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**violations** | [**List[GoogleRpcPreconditionFailureViolation]**](GoogleRpcPreconditionFailureViolation.md) | Describes all precondition violations. | [optional] 

## Example

```python
from openapi_client.models.google_rpc_precondition_failure import GoogleRpcPreconditionFailure

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleRpcPreconditionFailure from a JSON string
google_rpc_precondition_failure_instance = GoogleRpcPreconditionFailure.from_json(json)
# print the JSON string representation of the object
print(GoogleRpcPreconditionFailure.to_json())

# convert the object into a dict
google_rpc_precondition_failure_dict = google_rpc_precondition_failure_instance.to_dict()
# create an instance of GoogleRpcPreconditionFailure from a dict
google_rpc_precondition_failure_from_dict = GoogleRpcPreconditionFailure.from_dict(google_rpc_precondition_failure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


