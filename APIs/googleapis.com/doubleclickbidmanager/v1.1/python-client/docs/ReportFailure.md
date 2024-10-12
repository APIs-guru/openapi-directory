# ReportFailure

An explanation of a report failure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Error code that shows why the report was not created. | [optional] 

## Example

```python
from openapi_client.models.report_failure import ReportFailure

# TODO update the JSON string below
json = "{}"
# create an instance of ReportFailure from a JSON string
report_failure_instance = ReportFailure.from_json(json)
# print the JSON string representation of the object
print(ReportFailure.to_json())

# convert the object into a dict
report_failure_dict = report_failure_instance.to_dict()
# create an instance of ReportFailure from a dict
report_failure_from_dict = ReportFailure.from_dict(report_failure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


