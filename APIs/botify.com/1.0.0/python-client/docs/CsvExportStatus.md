# CsvExportStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **int** |  | [optional] 
**date_created** | **datetime** |  | [optional] [readonly] 
**job_id** | **str** |  | [optional] [readonly] 
**job_status** | **str** |  | [optional] [readonly] 
**job_url** | **str** |  | [optional] [readonly] 
**nb_results** | **int** |  | [optional] 
**query** | [**UrlsQuery**](UrlsQuery.md) |  | 
**results** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.csv_export_status import CsvExportStatus

# TODO update the JSON string below
json = "{}"
# create an instance of CsvExportStatus from a JSON string
csv_export_status_instance = CsvExportStatus.from_json(json)
# print the JSON string representation of the object
print(CsvExportStatus.to_json())

# convert the object into a dict
csv_export_status_dict = csv_export_status_instance.to_dict()
# create an instance of CsvExportStatus from a dict
csv_export_status_from_dict = CsvExportStatus.from_dict(csv_export_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


