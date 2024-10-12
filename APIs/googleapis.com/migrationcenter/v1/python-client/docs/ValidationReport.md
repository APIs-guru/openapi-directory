# ValidationReport

A resource that aggregates errors across import job files.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_validations** | [**List[FileValidationReport]**](FileValidationReport.md) | List of errors found in files. | [optional] 
**job_errors** | [**List[ImportError]**](ImportError.md) | List of job level errors. | [optional] 

## Example

```python
from openapi_client.models.validation_report import ValidationReport

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationReport from a JSON string
validation_report_instance = ValidationReport.from_json(json)
# print the JSON string representation of the object
print(ValidationReport.to_json())

# convert the object into a dict
validation_report_dict = validation_report_instance.to_dict()
# create an instance of ValidationReport from a dict
validation_report_from_dict = ValidationReport.from_dict(validation_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


