# TopQueryStatisticsResultList

A list of query statistics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[QueryStatistic]**](QueryStatistic.md) | The list of top query statistics. | [optional] [readonly] 

## Example

```python
from openapi_client.models.top_query_statistics_result_list import TopQueryStatisticsResultList

# TODO update the JSON string below
json = "{}"
# create an instance of TopQueryStatisticsResultList from a JSON string
top_query_statistics_result_list_instance = TopQueryStatisticsResultList.from_json(json)
# print the JSON string representation of the object
print(TopQueryStatisticsResultList.to_json())

# convert the object into a dict
top_query_statistics_result_list_dict = top_query_statistics_result_list_instance.to_dict()
# create an instance of TopQueryStatisticsResultList from a dict
top_query_statistics_result_list_from_dict = TopQueryStatisticsResultList.from_dict(top_query_statistics_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


