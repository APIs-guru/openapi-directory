# ReportWarning

Warnings associated with generation of the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Describes the details of the warning message, in English. | [optional] 
**type** | **str** | Type of the warning. | [optional] 

## Example

```python
from openapi_client.models.report_warning import ReportWarning

# TODO update the JSON string below
json = "{}"
# create an instance of ReportWarning from a JSON string
report_warning_instance = ReportWarning.from_json(json)
# print the JSON string representation of the object
print(ReportWarning.to_json())

# convert the object into a dict
report_warning_dict = report_warning_instance.to_dict()
# create an instance of ReportWarning from a dict
report_warning_from_dict = ReportWarning.from_dict(report_warning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


