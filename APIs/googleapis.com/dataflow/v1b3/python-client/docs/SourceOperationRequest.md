# SourceOperationRequest

A work item that represents the different operations that can be performed on a user-defined Source specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**get_metadata** | [**SourceGetMetadataRequest**](SourceGetMetadataRequest.md) |  | [optional] 
**name** | **str** | User-provided name of the Read instruction for this source. | [optional] 
**original_name** | **str** | System-defined name for the Read instruction for this source in the original workflow graph. | [optional] 
**split** | [**SourceSplitRequest**](SourceSplitRequest.md) |  | [optional] 
**stage_name** | **str** | System-defined name of the stage containing the source operation. Unique across the workflow. | [optional] 
**system_name** | **str** | System-defined name of the Read instruction for this source. Unique across the workflow. | [optional] 

## Example

```python
from openapi_client.models.source_operation_request import SourceOperationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SourceOperationRequest from a JSON string
source_operation_request_instance = SourceOperationRequest.from_json(json)
# print the JSON string representation of the object
print(SourceOperationRequest.to_json())

# convert the object into a dict
source_operation_request_dict = source_operation_request_instance.to_dict()
# create an instance of SourceOperationRequest from a dict
source_operation_request_from_dict = SourceOperationRequest.from_dict(source_operation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


