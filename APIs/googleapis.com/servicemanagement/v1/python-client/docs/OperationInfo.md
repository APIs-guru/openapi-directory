# OperationInfo

A message representing the message types used by a long-running operation. Example: rpc Export(ExportRequest) returns (google.longrunning.Operation) { option (google.longrunning.operation_info) = { response_type: \"ExportResponse\" metadata_type: \"ExportMetadata\" }; }

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata_type** | **str** | Required. The message name of the metadata type for this long-running operation. If the response is in a different package from the rpc, a fully-qualified message name must be used (e.g. &#x60;google.protobuf.Struct&#x60;). Note: Altering this value constitutes a breaking change. | [optional] 
**response_type** | **str** | Required. The message name of the primary return type for this long-running operation. This type will be used to deserialize the LRO&#39;s response. If the response is in a different package from the rpc, a fully-qualified message name must be used (e.g. &#x60;google.protobuf.Struct&#x60;). Note: Altering this value constitutes a breaking change. | [optional] 

## Example

```python
from openapi_client.models.operation_info import OperationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OperationInfo from a JSON string
operation_info_instance = OperationInfo.from_json(json)
# print the JSON string representation of the object
print(OperationInfo.to_json())

# convert the object into a dict
operation_info_dict = operation_info_instance.to_dict()
# create an instance of OperationInfo from a dict
operation_info_from_dict = OperationInfo.from_dict(operation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


