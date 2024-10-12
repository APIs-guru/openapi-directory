# ChartSourceRange

Source ranges for a chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sources** | [**List[GridRange]**](GridRange.md) | The ranges of data for a series or domain. Exactly one dimension must have a length of 1, and all sources in the list must have the same dimension with length 1. The domain (if it exists) &amp; all series must have the same number of source ranges. If using more than one source range, then the source range at a given offset must be in order and contiguous across the domain and series. For example, these are valid configurations: domain sources: A1:A5 series1 sources: B1:B5 series2 sources: D6:D10 domain sources: A1:A5, C10:C12 series1 sources: B1:B5, D10:D12 series2 sources: C1:C5, E10:E12 | [optional] 

## Example

```python
from openapi_client.models.chart_source_range import ChartSourceRange

# TODO update the JSON string below
json = "{}"
# create an instance of ChartSourceRange from a JSON string
chart_source_range_instance = ChartSourceRange.from_json(json)
# print the JSON string representation of the object
print(ChartSourceRange.to_json())

# convert the object into a dict
chart_source_range_dict = chart_source_range_instance.to_dict()
# create an instance of ChartSourceRange from a dict
chart_source_range_from_dict = ChartSourceRange.from_dict(chart_source_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


