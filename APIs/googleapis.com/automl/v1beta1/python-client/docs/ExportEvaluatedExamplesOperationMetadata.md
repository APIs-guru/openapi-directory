# ExportEvaluatedExamplesOperationMetadata

Details of EvaluatedExamples operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_info** | [**ExportEvaluatedExamplesOutputInfo**](ExportEvaluatedExamplesOutputInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_evaluated_examples_operation_metadata import ExportEvaluatedExamplesOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ExportEvaluatedExamplesOperationMetadata from a JSON string
export_evaluated_examples_operation_metadata_instance = ExportEvaluatedExamplesOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(ExportEvaluatedExamplesOperationMetadata.to_json())

# convert the object into a dict
export_evaluated_examples_operation_metadata_dict = export_evaluated_examples_operation_metadata_instance.to_dict()
# create an instance of ExportEvaluatedExamplesOperationMetadata from a dict
export_evaluated_examples_operation_metadata_from_dict = ExportEvaluatedExamplesOperationMetadata.from_dict(export_evaluated_examples_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


