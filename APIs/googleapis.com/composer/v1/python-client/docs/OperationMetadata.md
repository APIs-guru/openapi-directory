# OperationMetadata

Metadata describing an operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the operation was submitted to the server. | [optional] 
**end_time** | **str** | Output only. The time when the operation terminated, regardless of its success. This field is unset if the operation is still ongoing. | [optional] 
**operation_type** | **str** | Output only. The type of operation being performed. | [optional] 
**resource** | **str** | Output only. The resource being operated on, as a [relative resource name]( /apis/design/resource_names#relative_resource_name). | [optional] 
**resource_uuid** | **str** | Output only. The UUID of the resource being operated on. | [optional] 
**state** | **str** | Output only. The current operation state. | [optional] 

## Example

```python
from openapi_client.models.operation_metadata import OperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetadata from a JSON string
operation_metadata_instance = OperationMetadata.from_json(json)
# print the JSON string representation of the object
print(OperationMetadata.to_json())

# convert the object into a dict
operation_metadata_dict = operation_metadata_instance.to_dict()
# create an instance of OperationMetadata from a dict
operation_metadata_from_dict = OperationMetadata.from_dict(operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


