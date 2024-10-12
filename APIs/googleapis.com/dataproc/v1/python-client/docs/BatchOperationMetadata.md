# BatchOperationMetadata

Metadata describing the Batch operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch** | **str** | Name of the batch for the operation. | [optional] 
**batch_uuid** | **str** | Batch UUID for the operation. | [optional] 
**create_time** | **str** | The time when the operation was created. | [optional] 
**description** | **str** | Short description of the operation. | [optional] 
**done_time** | **str** | The time when the operation finished. | [optional] 
**labels** | **Dict[str, str]** | Labels associated with the operation. | [optional] 
**operation_type** | **str** | The operation type. | [optional] 
**warnings** | **List[str]** | Warnings encountered during operation execution. | [optional] 

## Example

```python
from openapi_client.models.batch_operation_metadata import BatchOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of BatchOperationMetadata from a JSON string
batch_operation_metadata_instance = BatchOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(BatchOperationMetadata.to_json())

# convert the object into a dict
batch_operation_metadata_dict = batch_operation_metadata_instance.to_dict()
# create an instance of BatchOperationMetadata from a dict
batch_operation_metadata_from_dict = BatchOperationMetadata.from_dict(batch_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


