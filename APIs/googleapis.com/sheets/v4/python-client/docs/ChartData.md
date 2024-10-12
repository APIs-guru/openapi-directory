# ChartData

The data included in a domain or series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_type** | **str** | The aggregation type for the series of a data source chart. Only supported for data source charts. | [optional] 
**column_reference** | [**DataSourceColumnReference**](DataSourceColumnReference.md) |  | [optional] 
**group_rule** | [**ChartGroupRule**](ChartGroupRule.md) |  | [optional] 
**source_range** | [**ChartSourceRange**](ChartSourceRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.chart_data import ChartData

# TODO update the JSON string below
json = "{}"
# create an instance of ChartData from a JSON string
chart_data_instance = ChartData.from_json(json)
# print the JSON string representation of the object
print(ChartData.to_json())

# convert the object into a dict
chart_data_dict = chart_data_instance.to_dict()
# create an instance of ChartData from a dict
chart_data_from_dict = ChartData.from_dict(chart_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


