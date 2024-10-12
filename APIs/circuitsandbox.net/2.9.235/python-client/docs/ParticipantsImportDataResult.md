# ParticipantsImportDataResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual_number_of_imported_participants** | **float** | Actual number of imported participants | [optional] 
**estimated_import_duration** | **float** | Estimated import duration | [optional] 
**import_end_date** | **float** | Import end date | [optional] 
**import_file_id** | **str** | The file id of the import | [optional] 
**import_file_name** | **str** | The name of the import file | [optional] 
**import_progress** | **float** | The progress of the import | [optional] 
**import_start_date** | **float** | Import start date | [optional] 
**import_status** | **str** | The status of the import | [optional] 
**planned_number_of_imported_participants** | **float** | Planned number of imported participants | [optional] 
**result_file_id** | **str** | The file id of the result file | [optional] 
**result_file_name** | **str** | The name of the result file | [optional] 

## Example

```python
from openapi_client.models.participants_import_data_result import ParticipantsImportDataResult

# TODO update the JSON string below
json = "{}"
# create an instance of ParticipantsImportDataResult from a JSON string
participants_import_data_result_instance = ParticipantsImportDataResult.from_json(json)
# print the JSON string representation of the object
print(ParticipantsImportDataResult.to_json())

# convert the object into a dict
participants_import_data_result_dict = participants_import_data_result_instance.to_dict()
# create an instance of ParticipantsImportDataResult from a dict
participants_import_data_result_from_dict = ParticipantsImportDataResult.from_dict(participants_import_data_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


