# GoogleLongrunningOperation

This resource represents a long-running operation that is the result of a network API call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**done** | **bool** | If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available. | [optional] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**metadata** | **Dict[str, object]** | Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. | [optional] 
**name** | **str** | The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id}. | [optional] 
**response** | **Dict[str, object]** | The normal, successful response of the operation. If the original method returns no data on success, such as Delete, the response is google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred response type is TakeSnapshotResponse. | [optional] 

## Example

```python
from openapi_client.models.google_longrunning_operation import GoogleLongrunningOperation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleLongrunningOperation from a JSON string
google_longrunning_operation_instance = GoogleLongrunningOperation.from_json(json)
# print the JSON string representation of the object
print(GoogleLongrunningOperation.to_json())

# convert the object into a dict
google_longrunning_operation_dict = google_longrunning_operation_instance.to_dict()
# create an instance of GoogleLongrunningOperation from a dict
google_longrunning_operation_from_dict = GoogleLongrunningOperation.from_dict(google_longrunning_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


