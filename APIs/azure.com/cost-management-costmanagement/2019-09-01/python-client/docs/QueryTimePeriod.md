# QueryTimePeriod

The start and end date for pulling data for the query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **datetime** | The start date to pull data from. | 
**to** | **datetime** | The end date to pull data to. | 

## Example

```python
from openapi_client.models.query_time_period import QueryTimePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of QueryTimePeriod from a JSON string
query_time_period_instance = QueryTimePeriod.from_json(json)
# print the JSON string representation of the object
print(QueryTimePeriod.to_json())

# convert the object into a dict
query_time_period_dict = query_time_period_instance.to_dict()
# create an instance of QueryTimePeriod from a dict
query_time_period_from_dict = QueryTimePeriod.from_dict(query_time_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


