# ErrorGroupStats

Data extracted for a specific group based on certain filter criteria, such as a given time period and/or service filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_services** | [**List[ServiceContext]**](ServiceContext.md) | Service contexts with a non-zero error count for the given filter criteria. This list can be truncated if multiple services are affected. Refer to &#x60;num_affected_services&#x60; for the total count. | [optional] 
**affected_users_count** | **str** | Approximate number of affected users in the given group that match the filter criteria. Users are distinguished by data in the ErrorContext of the individual error events, such as their login name or their remote IP address in case of HTTP requests. The number of affected users can be zero even if the number of errors is non-zero if no data was provided from which the affected user could be deduced. Users are counted based on data in the request context that was provided in the error report. If more users are implicitly affected, such as due to a crash of the whole service, this is not reflected here. | [optional] 
**count** | **str** | Approximate total number of events in the given group that match the filter criteria. | [optional] 
**first_seen_time** | **str** | Approximate first occurrence that was ever seen for this group and which matches the given filter criteria, ignoring the time_range that was specified in the request. | [optional] 
**group** | [**ErrorGroup**](ErrorGroup.md) |  | [optional] 
**last_seen_time** | **str** | Approximate last occurrence that was ever seen for this group and which matches the given filter criteria, ignoring the time_range that was specified in the request. | [optional] 
**num_affected_services** | **int** | The total number of services with a non-zero error count for the given filter criteria. | [optional] 
**representative** | [**ErrorEvent**](ErrorEvent.md) |  | [optional] 
**timed_counts** | [**List[TimedCount]**](TimedCount.md) | Approximate number of occurrences over time. Timed counts returned by ListGroups are guaranteed to be: - Inside the requested time interval - Non-overlapping, and - Ordered by ascending time. | [optional] 

## Example

```python
from openapi_client.models.error_group_stats import ErrorGroupStats

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorGroupStats from a JSON string
error_group_stats_instance = ErrorGroupStats.from_json(json)
# print the JSON string representation of the object
print(ErrorGroupStats.to_json())

# convert the object into a dict
error_group_stats_dict = error_group_stats_instance.to_dict()
# create an instance of ErrorGroupStats from a dict
error_group_stats_from_dict = ErrorGroupStats.from_dict(error_group_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


