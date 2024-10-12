# WaitOperationRequest

The request message for Operations.WaitOperation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timeout** | **str** | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. | [optional] 

## Example

```python
from openapi_client.models.wait_operation_request import WaitOperationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WaitOperationRequest from a JSON string
wait_operation_request_instance = WaitOperationRequest.from_json(json)
# print the JSON string representation of the object
print(WaitOperationRequest.to_json())

# convert the object into a dict
wait_operation_request_dict = wait_operation_request_instance.to_dict()
# create an instance of WaitOperationRequest from a dict
wait_operation_request_from_dict = WaitOperationRequest.from_dict(wait_operation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


