# OutputConfig

* For Translation: CSV file `translation.csv`, with each line in format: ML_USE,GCS_FILE_PATH GCS_FILE_PATH leads to a .TSV file which describes examples that have given ML_USE, using the following row format per line: TEXT_SNIPPET (in source language) \\t TEXT_SNIPPET (in target language) * For Tables: Output depends on whether the dataset was imported from GCS or BigQuery. GCS case: gcs_destination must be set. Exported are CSV file(s) `tables_1.csv`, `tables_2.csv`,...,`tables_N.csv` with each having as header line the table's column names, and all other lines contain values for the header columns. BigQuery case: bigquery_destination pointing to a BigQuery project must be set. In the given project a new dataset will be created with name `export_data__` where will be made BigQuery-dataset-name compatible (e.g. most special characters will become underscores), and timestamp will be in YYYY_MM_DDThh_mm_ss_sssZ \"based on ISO-8601\" format. In that dataset a new table called `primary_table` will be created, and filled with precisely the same data as this obtained on import.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**BigQueryDestination**](BigQueryDestination.md) |  | [optional] 
**gcs_destination** | [**GcsDestination**](GcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.output_config import OutputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of OutputConfig from a JSON string
output_config_instance = OutputConfig.from_json(json)
# print the JSON string representation of the object
print(OutputConfig.to_json())

# convert the object into a dict
output_config_dict = output_config_instance.to_dict()
# create an instance of OutputConfig from a dict
output_config_from_dict = OutputConfig.from_dict(output_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


