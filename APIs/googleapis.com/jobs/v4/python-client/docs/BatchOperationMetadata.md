# BatchOperationMetadata

Metadata used for long running operations returned by CTS batch APIs. It's used to replace google.longrunning.Operation.metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time when the batch operation is created. | [optional] 
**end_time** | **str** | The time when the batch operation is finished and google.longrunning.Operation.done is set to &#x60;true&#x60;. | [optional] 
**failure_count** | **int** | Count of failed item(s) inside an operation. | [optional] 
**state** | **str** | The state of a long running operation. | [optional] 
**state_description** | **str** | More detailed information about operation state. | [optional] 
**success_count** | **int** | Count of successful item(s) inside an operation. | [optional] 
**total_count** | **int** | Count of total item(s) inside an operation. | [optional] 
**update_time** | **str** | The time when the batch operation status is updated. The metadata and the update_time is refreshed every minute otherwise cached data is returned. | [optional] 

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


