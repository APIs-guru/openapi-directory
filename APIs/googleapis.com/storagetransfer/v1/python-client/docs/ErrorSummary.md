# ErrorSummary

A summary of errors by error code, plus a count and sample error log entries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Required. | [optional] 
**error_count** | **str** | Required. Count of this type of error. | [optional] 
**error_log_entries** | [**List[ErrorLogEntry]**](ErrorLogEntry.md) | Error samples. At most 5 error log entries are recorded for a given error code for a single transfer operation. | [optional] 

## Example

```python
from openapi_client.models.error_summary import ErrorSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorSummary from a JSON string
error_summary_instance = ErrorSummary.from_json(json)
# print the JSON string representation of the object
print(ErrorSummary.to_json())

# convert the object into a dict
error_summary_dict = error_summary_instance.to_dict()
# create an instance of ErrorSummary from a dict
error_summary_from_dict = ErrorSummary.from_dict(error_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


