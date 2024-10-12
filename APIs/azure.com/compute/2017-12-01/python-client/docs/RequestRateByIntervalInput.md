# RequestRateByIntervalInput

Api request input for LogAnalytics getRequestRateByInterval Api.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interval_length** | **str** | Interval value in minutes used to create LogAnalytics call rate logs. | 
**blob_container_sas_uri** | **str** | SAS Uri of the logging blob container to which LogAnalytics Api writes output logs to. | 
**from_time** | **datetime** | From time of the query | 
**group_by_operation_name** | **bool** | Group query result by Operation Name. | [optional] 
**group_by_resource_name** | **bool** | Group query result by Resource Name. | [optional] 
**group_by_throttle_policy** | **bool** | Group query result by Throttle Policy applied. | [optional] 
**to_time** | **datetime** | To time of the query | 

## Example

```python
from openapi_client.models.request_rate_by_interval_input import RequestRateByIntervalInput

# TODO update the JSON string below
json = "{}"
# create an instance of RequestRateByIntervalInput from a JSON string
request_rate_by_interval_input_instance = RequestRateByIntervalInput.from_json(json)
# print the JSON string representation of the object
print(RequestRateByIntervalInput.to_json())

# convert the object into a dict
request_rate_by_interval_input_dict = request_rate_by_interval_input_instance.to_dict()
# create an instance of RequestRateByIntervalInput from a dict
request_rate_by_interval_input_from_dict = RequestRateByIntervalInput.from_dict(request_rate_by_interval_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


