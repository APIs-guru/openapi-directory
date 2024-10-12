# OperationMetadata

Contains metadata for the BatchAnnotateImages operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time when the batch request was received. | [optional] 
**state** | **str** | Current state of the batch operation. | [optional] 
**update_time** | **str** | The time when the operation result was last updated. | [optional] 

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


