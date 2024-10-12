# ExportEvaluatedExamplesOutputInfo

Further describes the output of the evaluated examples export. Supplements ExportEvaluatedExamplesOutputConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_output_dataset** | **str** | The path of the BigQuery dataset created, in bq://projectId.bqDatasetId format, into which the output of export evaluated examples is written. | [optional] 

## Example

```python
from openapi_client.models.export_evaluated_examples_output_info import ExportEvaluatedExamplesOutputInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ExportEvaluatedExamplesOutputInfo from a JSON string
export_evaluated_examples_output_info_instance = ExportEvaluatedExamplesOutputInfo.from_json(json)
# print the JSON string representation of the object
print(ExportEvaluatedExamplesOutputInfo.to_json())

# convert the object into a dict
export_evaluated_examples_output_info_dict = export_evaluated_examples_output_info_instance.to_dict()
# create an instance of ExportEvaluatedExamplesOutputInfo from a dict
export_evaluated_examples_output_info_from_dict = ExportEvaluatedExamplesOutputInfo.from_dict(export_evaluated_examples_output_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


