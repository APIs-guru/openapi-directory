# QueryStatisticListResult

Represents the response to a get query request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[QueryStatistic]**](QueryStatistic.md) | The query. | 

## Example

```python
from openapi_client.models.query_statistic_list_result import QueryStatisticListResult

# TODO update the JSON string below
json = "{}"
# create an instance of QueryStatisticListResult from a JSON string
query_statistic_list_result_instance = QueryStatisticListResult.from_json(json)
# print the JSON string representation of the object
print(QueryStatisticListResult.to_json())

# convert the object into a dict
query_statistic_list_result_dict = query_statistic_list_result_instance.to_dict()
# create an instance of QueryStatisticListResult from a dict
query_statistic_list_result_from_dict = QueryStatisticListResult.from_dict(query_statistic_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


