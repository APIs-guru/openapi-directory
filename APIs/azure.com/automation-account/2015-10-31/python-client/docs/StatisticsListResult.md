# StatisticsListResult

The response model for the list statistics operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Statistics]**](Statistics.md) | Gets or sets a list of statistics. | [optional] 

## Example

```python
from openapi_client.models.statistics_list_result import StatisticsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of StatisticsListResult from a JSON string
statistics_list_result_instance = StatisticsListResult.from_json(json)
# print the JSON string representation of the object
print(StatisticsListResult.to_json())

# convert the object into a dict
statistics_list_result_dict = statistics_list_result_instance.to_dict()
# create an instance of StatisticsListResult from a dict
statistics_list_result_from_dict = StatisticsListResult.from_dict(statistics_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


