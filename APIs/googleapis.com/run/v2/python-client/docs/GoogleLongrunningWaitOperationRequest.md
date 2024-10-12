# GoogleLongrunningWaitOperationRequest

The request message for Operations.WaitOperation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timeout** | **str** | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. | [optional] 

## Example

```python
from openapi_client.models.google_longrunning_wait_operation_request import GoogleLongrunningWaitOperationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleLongrunningWaitOperationRequest from a JSON string
google_longrunning_wait_operation_request_instance = GoogleLongrunningWaitOperationRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleLongrunningWaitOperationRequest.to_json())

# convert the object into a dict
google_longrunning_wait_operation_request_dict = google_longrunning_wait_operation_request_instance.to_dict()
# create an instance of GoogleLongrunningWaitOperationRequest from a dict
google_longrunning_wait_operation_request_from_dict = GoogleLongrunningWaitOperationRequest.from_dict(google_longrunning_wait_operation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


