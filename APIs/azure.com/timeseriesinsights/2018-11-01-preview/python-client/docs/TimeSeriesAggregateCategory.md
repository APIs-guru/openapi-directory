# TimeSeriesAggregateCategory

Category used in categorical variables. A category is defined by 'label' and the 'values' that are assigned this label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The name of the category which will be used in constructing the output variable names. | 
**values** | **List[object]** | The list of values that a category maps to. Can be either a unique list of string or list of long. | 

## Example

```python
from openapi_client.models.time_series_aggregate_category import TimeSeriesAggregateCategory

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesAggregateCategory from a JSON string
time_series_aggregate_category_instance = TimeSeriesAggregateCategory.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesAggregateCategory.to_json())

# convert the object into a dict
time_series_aggregate_category_dict = time_series_aggregate_category_instance.to_dict()
# create an instance of TimeSeriesAggregateCategory from a dict
time_series_aggregate_category_from_dict = TimeSeriesAggregateCategory.from_dict(time_series_aggregate_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


