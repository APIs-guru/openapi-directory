# FileValidationReport

A resource that aggregates the validation errors found in an import job file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_errors** | [**List[ImportError]**](ImportError.md) | List of file level errors. | [optional] 
**file_name** | **str** | The name of the file. | [optional] 
**partial_report** | **bool** | Flag indicating that processing was aborted due to maximum number of errors. | [optional] 
**row_errors** | [**List[ImportRowError]**](ImportRowError.md) | Partial list of rows that encountered validation error. | [optional] 

## Example

```python
from openapi_client.models.file_validation_report import FileValidationReport

# TODO update the JSON string below
json = "{}"
# create an instance of FileValidationReport from a JSON string
file_validation_report_instance = FileValidationReport.from_json(json)
# print the JSON string representation of the object
print(FileValidationReport.to_json())

# convert the object into a dict
file_validation_report_dict = file_validation_report_instance.to_dict()
# create an instance of FileValidationReport from a dict
file_validation_report_from_dict = FileValidationReport.from_dict(file_validation_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


