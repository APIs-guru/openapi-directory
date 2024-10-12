# OperationMetadata

Metadata used across all long running operations returned by AutoML API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_predict_details** | [**BatchPredictOperationMetadata**](BatchPredictOperationMetadata.md) |  | [optional] 
**create_model_details** | **object** | Details of CreateModel operation. | [optional] 
**create_time** | **str** | Output only. Time when the operation was created. | [optional] 
**delete_details** | **object** | Details of operations that perform deletes of any entities. | [optional] 
**deploy_model_details** | **object** | Details of DeployModel operation. | [optional] 
**export_data_details** | [**ExportDataOperationMetadata**](ExportDataOperationMetadata.md) |  | [optional] 
**export_evaluated_examples_details** | [**ExportEvaluatedExamplesOperationMetadata**](ExportEvaluatedExamplesOperationMetadata.md) |  | [optional] 
**export_model_details** | [**ExportModelOperationMetadata**](ExportModelOperationMetadata.md) |  | [optional] 
**import_data_details** | **object** | Details of ImportData operation. | [optional] 
**partial_failures** | [**List[Status]**](Status.md) | Output only. Partial failures encountered. E.g. single files that couldn&#39;t be read. This field should never exceed 20 entries. Status details field will contain standard GCP error details. | [optional] 
**progress_percent** | **int** | Output only. Progress of operation. Range: [0, 100]. Not used currently. | [optional] 
**undeploy_model_details** | **object** | Details of UndeployModel operation. | [optional] 
**update_time** | **str** | Output only. Time when the operation was updated for the last time. | [optional] 

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


