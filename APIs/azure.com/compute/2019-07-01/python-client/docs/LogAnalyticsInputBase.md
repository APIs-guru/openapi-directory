# LogAnalyticsInputBase

Api input base class for LogAnalytics Api.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_container_sas_uri** | **str** | SAS Uri of the logging blob container to which LogAnalytics Api writes output logs to. | 
**from_time** | **datetime** | From time of the query | 
**group_by_operation_name** | **bool** | Group query result by Operation Name. | [optional] 
**group_by_resource_name** | **bool** | Group query result by Resource Name. | [optional] 
**group_by_throttle_policy** | **bool** | Group query result by Throttle Policy applied. | [optional] 
**to_time** | **datetime** | To time of the query | 

## Example

```python
from openapi_client.models.log_analytics_input_base import LogAnalyticsInputBase

# TODO update the JSON string below
json = "{}"
# create an instance of LogAnalyticsInputBase from a JSON string
log_analytics_input_base_instance = LogAnalyticsInputBase.from_json(json)
# print the JSON string representation of the object
print(LogAnalyticsInputBase.to_json())

# convert the object into a dict
log_analytics_input_base_dict = log_analytics_input_base_instance.to_dict()
# create an instance of LogAnalyticsInputBase from a dict
log_analytics_input_base_from_dict = LogAnalyticsInputBase.from_dict(log_analytics_input_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


