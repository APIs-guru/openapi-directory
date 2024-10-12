# ExportDataStatistics

Statistics for the EXPORT DATA statement as part of Query Job. EXTRACT JOB statistics are populated in JobStatistics4.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_count** | **str** | Number of destination files generated in case of EXPORT DATA statement only. | [optional] 
**row_count** | **str** | [Alpha] Number of destination rows generated in case of EXPORT DATA statement only. | [optional] 

## Example

```python
from openapi_client.models.export_data_statistics import ExportDataStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of ExportDataStatistics from a JSON string
export_data_statistics_instance = ExportDataStatistics.from_json(json)
# print the JSON string representation of the object
print(ExportDataStatistics.to_json())

# convert the object into a dict
export_data_statistics_dict = export_data_statistics_instance.to_dict()
# create an instance of ExportDataStatistics from a dict
export_data_statistics_from_dict = ExportDataStatistics.from_dict(export_data_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


