# StatsItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | count | [optional] 
**max** | **int** | Maximum value of the field | [optional] 
**mean** | **float** | Mean of the field | [optional] 
**median** | **float** | median of the field | [optional] 
**min** | **int** | Minimum value of the field | [optional] 
**missing** | **int** | count of listings missing particular field | [optional] 
**stddev** | **float** | stddev of the field | [optional] 
**sum** | **int** | Summation of all values of the field | [optional] 
**sum_of_squares** | **float** | sum_of_squares of the field | [optional] 

## Example

```python
from openapi_client.models.stats_item import StatsItem

# TODO update the JSON string below
json = "{}"
# create an instance of StatsItem from a JSON string
stats_item_instance = StatsItem.from_json(json)
# print the JSON string representation of the object
print(StatsItem.to_json())

# convert the object into a dict
stats_item_dict = stats_item_instance.to_dict()
# create an instance of StatsItem from a dict
stats_item_from_dict = StatsItem.from_dict(stats_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


