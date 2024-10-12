# OperationMetadata

Metadata describing an Operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | API version. | [optional] 
**cancel_requested** | **bool** | Specifies if cancellation was requested for the operation. | [optional] 
**create_time** | **str** | The time the operation was created. | [optional] 
**end_time** | **str** | The time the operation finished running. | [optional] 
**status_detail** | **str** | Human-readable status of the operation, if any. | [optional] 
**target** | **str** | Target of the operation - for example projects/project-1/connectivityTests/test-1 | [optional] 
**verb** | **str** | Name of the verb executed by the operation. | [optional] 

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


