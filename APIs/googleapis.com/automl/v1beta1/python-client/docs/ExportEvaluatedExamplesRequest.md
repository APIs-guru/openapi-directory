# ExportEvaluatedExamplesRequest

Request message for AutoMl.ExportEvaluatedExamples.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_config** | [**ExportEvaluatedExamplesOutputConfig**](ExportEvaluatedExamplesOutputConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_evaluated_examples_request import ExportEvaluatedExamplesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportEvaluatedExamplesRequest from a JSON string
export_evaluated_examples_request_instance = ExportEvaluatedExamplesRequest.from_json(json)
# print the JSON string representation of the object
print(ExportEvaluatedExamplesRequest.to_json())

# convert the object into a dict
export_evaluated_examples_request_dict = export_evaluated_examples_request_instance.to_dict()
# create an instance of ExportEvaluatedExamplesRequest from a dict
export_evaluated_examples_request_from_dict = ExportEvaluatedExamplesRequest.from_dict(export_evaluated_examples_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


