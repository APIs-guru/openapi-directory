# BatchOperationMetadata

Metadata for the batch operations such as the current state. This is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The time when the batch request is finished and google.longrunning.Operation.done is set to true. | [optional] 
**state** | **str** | The current state of the batch operation. | [optional] 
**submit_time** | **str** | The time when the batch request was submitted to the server. | [optional] 

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


