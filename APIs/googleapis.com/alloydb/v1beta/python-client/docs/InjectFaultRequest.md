# InjectFaultRequest

Message for triggering fault injection on an instance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fault_type** | **str** | Required. The type of fault to be injected in an instance. | [optional] 
**request_id** | **str** | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). | [optional] 
**validate_only** | **bool** | Optional. If set, performs request validation (e.g. permission checks and any other type of validation), but do not actually execute the fault injection. | [optional] 

## Example

```python
from openapi_client.models.inject_fault_request import InjectFaultRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InjectFaultRequest from a JSON string
inject_fault_request_instance = InjectFaultRequest.from_json(json)
# print the JSON string representation of the object
print(InjectFaultRequest.to_json())

# convert the object into a dict
inject_fault_request_dict = inject_fault_request_instance.to_dict()
# create an instance of InjectFaultRequest from a dict
inject_fault_request_from_dict = InjectFaultRequest.from_dict(inject_fault_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


