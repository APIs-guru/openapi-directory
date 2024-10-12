# ReportError

Represents the processing error of one Operation in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_id** | **str** | The Operation.operation_id value from the request. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.report_error import ReportError

# TODO update the JSON string below
json = "{}"
# create an instance of ReportError from a JSON string
report_error_instance = ReportError.from_json(json)
# print the JSON string representation of the object
print(ReportError.to_json())

# convert the object into a dict
report_error_dict = report_error_instance.to_dict()
# create an instance of ReportError from a dict
report_error_from_dict = ReportError.from_dict(report_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


