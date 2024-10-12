# ExportEvaluatedExamplesOutputConfig

Output configuration for ExportEvaluatedExamples Action. Note that this call is available only for 30 days since the moment the model was evaluated. The output depends on the domain, as follows (note that only examples from the TEST set are exported): * For Tables: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `export_evaluated_examples__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ \"based on ISO-8601\" format. In the dataset an `evaluated_examples` table will be created. It will have all the same columns as the primary_table of the dataset from which the model was created, as they were at the moment of model's evaluation (this includes the target column with its ground truth), followed by a column called \"predicted_\". That last column will contain the model's prediction result for each respective row, given as ARRAY of AnnotationPayloads, represented as STRUCT-s, containing TablesAnnotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**BigQueryDestination**](BigQueryDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_evaluated_examples_output_config import ExportEvaluatedExamplesOutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ExportEvaluatedExamplesOutputConfig from a JSON string
export_evaluated_examples_output_config_instance = ExportEvaluatedExamplesOutputConfig.from_json(json)
# print the JSON string representation of the object
print(ExportEvaluatedExamplesOutputConfig.to_json())

# convert the object into a dict
export_evaluated_examples_output_config_dict = export_evaluated_examples_output_config_instance.to_dict()
# create an instance of ExportEvaluatedExamplesOutputConfig from a dict
export_evaluated_examples_output_config_from_dict = ExportEvaluatedExamplesOutputConfig.from_dict(export_evaluated_examples_output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


