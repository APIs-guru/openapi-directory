# QuerySchedule

Information on how frequently and when to run a query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time_ms** | **str** | Datetime to periodically run the query until. | [optional] 
**frequency** | **str** | How often the query is run. | [optional] 
**next_run_minute_of_day** | **int** | Time of day at which a new report will be generated, represented as minutes past midnight. Range is 0 to 1439. Only applies to scheduled reports. | [optional] 
**next_run_timezone_code** | **str** | Canonical timezone code for report generation time. Defaults to America/New_York. | [optional] 
**start_time_ms** | **str** | When to start running the query. Not applicable to &#x60;ONE_TIME&#x60; frequency. | [optional] 

## Example

```python
from openapi_client.models.query_schedule import QuerySchedule

# TODO update the JSON string below
json = "{}"
# create an instance of QuerySchedule from a JSON string
query_schedule_instance = QuerySchedule.from_json(json)
# print the JSON string representation of the object
print(QuerySchedule.to_json())

# convert the object into a dict
query_schedule_dict = query_schedule_instance.to_dict()
# create an instance of QuerySchedule from a dict
query_schedule_from_dict = QuerySchedule.from_dict(query_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


