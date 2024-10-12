# ExportDataOutputInfo

Further describes this export data's output. Supplements OutputConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_output_dataset** | **str** | The path of the BigQuery dataset created, in bq://projectId.bqDatasetId format, into which the exported data is written. | [optional] 
**gcs_output_directory** | **str** | The full path of the Google Cloud Storage directory created, into which the exported data is written. | [optional] 

## Example

```python
from openapi_client.models.export_data_output_info import ExportDataOutputInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ExportDataOutputInfo from a JSON string
export_data_output_info_instance = ExportDataOutputInfo.from_json(json)
# print the JSON string representation of the object
print(ExportDataOutputInfo.to_json())

# convert the object into a dict
export_data_output_info_dict = export_data_output_info_instance.to_dict()
# create an instance of ExportDataOutputInfo from a dict
export_data_output_info_from_dict = ExportDataOutputInfo.from_dict(export_data_output_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


