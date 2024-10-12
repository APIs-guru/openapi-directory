# LogAnalyticsOperationResult

LogAnalytics operation status response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LogAnalyticsOutput**](LogAnalyticsOutput.md) |  | [optional] 
**end_time** | **datetime** | End time of the operation | [optional] [readonly] 
**error** | [**ApiError**](ApiError.md) |  | [optional] 
**name** | **str** | Operation ID | [optional] [readonly] 
**start_time** | **datetime** | Start time of the operation | [optional] [readonly] 
**status** | **str** | Operation status | [optional] [readonly] 

## Example

```python
from openapi_client.models.log_analytics_operation_result import LogAnalyticsOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of LogAnalyticsOperationResult from a JSON string
log_analytics_operation_result_instance = LogAnalyticsOperationResult.from_json(json)
# print the JSON string representation of the object
print(LogAnalyticsOperationResult.to_json())

# convert the object into a dict
log_analytics_operation_result_dict = log_analytics_operation_result_instance.to_dict()
# create an instance of LogAnalyticsOperationResult from a dict
log_analytics_operation_result_from_dict = LogAnalyticsOperationResult.from_dict(log_analytics_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


