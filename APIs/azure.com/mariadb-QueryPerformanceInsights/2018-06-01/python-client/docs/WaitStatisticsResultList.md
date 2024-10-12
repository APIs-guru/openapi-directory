# WaitStatisticsResultList

A list of wait statistics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[WaitStatistic]**](WaitStatistic.md) | The list of wait statistics. | [optional] [readonly] 

## Example

```python
from openapi_client.models.wait_statistics_result_list import WaitStatisticsResultList

# TODO update the JSON string below
json = "{}"
# create an instance of WaitStatisticsResultList from a JSON string
wait_statistics_result_list_instance = WaitStatisticsResultList.from_json(json)
# print the JSON string representation of the object
print(WaitStatisticsResultList.to_json())

# convert the object into a dict
wait_statistics_result_list_dict = wait_statistics_result_list_instance.to_dict()
# create an instance of WaitStatisticsResultList from a dict
wait_statistics_result_list_from_dict = WaitStatisticsResultList.from_dict(wait_statistics_result_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


