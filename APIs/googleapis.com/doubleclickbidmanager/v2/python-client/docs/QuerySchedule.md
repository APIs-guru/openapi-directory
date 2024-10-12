# QuerySchedule

Information on when and how frequently to run a query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**frequency** | **str** | How often the query is run. | [optional] 
**next_run_timezone_code** | **str** | Canonical timezone code for report generation time. Defaults to &#x60;America/New_York&#x60;. | [optional] 
**start_date** | [**ModelDate**](ModelDate.md) |  | [optional] 

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


