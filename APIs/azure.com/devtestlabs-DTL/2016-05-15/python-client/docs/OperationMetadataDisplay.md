# OperationMetadataDisplay

The object that describes the operations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Friendly name of the operation | [optional] 
**operation** | **str** | Operation type: read, write, delete, listKeys/action, etc. | [optional] 
**provider** | **str** | Friendly name of the resource provider | [optional] 
**resource** | **str** | Resource type on which the operation is performed. | [optional] 

## Example

```python
from openapi_client.models.operation_metadata_display import OperationMetadataDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetadataDisplay from a JSON string
operation_metadata_display_instance = OperationMetadataDisplay.from_json(json)
# print the JSON string representation of the object
print(OperationMetadataDisplay.to_json())

# convert the object into a dict
operation_metadata_display_dict = operation_metadata_display_instance.to_dict()
# create an instance of OperationMetadataDisplay from a dict
operation_metadata_display_from_dict = OperationMetadataDisplay.from_dict(operation_metadata_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


