# ReportMetadata

Report metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_cloud_storage_path** | **str** | Output only. The path to the location in Google Cloud Storage where the report is stored. | [optional] [readonly] 
**report_data_end_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**report_data_start_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**status** | [**ReportStatus**](ReportStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.report_metadata import ReportMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ReportMetadata from a JSON string
report_metadata_instance = ReportMetadata.from_json(json)
# print the JSON string representation of the object
print(ReportMetadata.to_json())

# convert the object into a dict
report_metadata_dict = report_metadata_instance.to_dict()
# create an instance of ReportMetadata from a dict
report_metadata_from_dict = ReportMetadata.from_dict(report_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


