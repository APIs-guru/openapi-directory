# TopQueryStatisticsInput

Input to get top query statistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TopQueryStatisticsInputProperties**](TopQueryStatisticsInputProperties.md) |  | 

## Example

```python
from openapi_client.models.top_query_statistics_input import TopQueryStatisticsInput

# TODO update the JSON string below
json = "{}"
# create an instance of TopQueryStatisticsInput from a JSON string
top_query_statistics_input_instance = TopQueryStatisticsInput.from_json(json)
# print the JSON string representation of the object
print(TopQueryStatisticsInput.to_json())

# convert the object into a dict
top_query_statistics_input_dict = top_query_statistics_input_instance.to_dict()
# create an instance of TopQueryStatisticsInput from a dict
top_query_statistics_input_from_dict = TopQueryStatisticsInput.from_dict(top_query_statistics_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


