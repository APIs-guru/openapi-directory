# SourceOperationResponse

The result of a SourceOperationRequest, specified in ReportWorkItemStatusRequest.source_operation when the work item is completed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**get_metadata** | [**SourceGetMetadataResponse**](SourceGetMetadataResponse.md) |  | [optional] 
**split** | [**SourceSplitResponse**](SourceSplitResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.source_operation_response import SourceOperationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SourceOperationResponse from a JSON string
source_operation_response_instance = SourceOperationResponse.from_json(json)
# print the JSON string representation of the object
print(SourceOperationResponse.to_json())

# convert the object into a dict
source_operation_response_dict = source_operation_response_instance.to_dict()
# create an instance of SourceOperationResponse from a dict
source_operation_response_from_dict = SourceOperationResponse.from_dict(source_operation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


