# Operation

This resource represents a long-running operation that is the result of a network API call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**done** | **bool** | If the value is &#x60;false&#x60;, it means the operation is still in progress. If &#x60;true&#x60;, the operation is completed, and either &#x60;error&#x60; or &#x60;response&#x60; is available. | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**metadata** | **Dict[str, object]** | Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. | [optional] 
**name** | **str** | The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the &#x60;name&#x60; should be a resource name ending with &#x60;operations/{unique_id}&#x60;. | [optional] 
**response** | **Dict[str, object]** | The normal response of the operation in case of success. If the original method returns no data on success, such as &#x60;Delete&#x60;, the response is &#x60;google.protobuf.Empty&#x60;. If the original method is standard &#x60;Get&#x60;/&#x60;Create&#x60;/&#x60;Update&#x60;, the response should be the resource. For other methods, the response should have the type &#x60;XxxResponse&#x60;, where &#x60;Xxx&#x60; is the original method name. For example, if the original method name is &#x60;TakeSnapshot()&#x60;, the inferred response type is &#x60;TakeSnapshotResponse&#x60;. | [optional] 

## Example

```python
from openapi_client.models.operation import Operation

# TODO update the JSON string below
json = "{}"
# create an instance of Operation from a JSON string
operation_instance = Operation.from_json(json)
# print the JSON string representation of the object
print(Operation.to_json())

# convert the object into a dict
operation_dict = operation_instance.to_dict()
# create an instance of Operation from a dict
operation_from_dict = Operation.from_dict(operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


