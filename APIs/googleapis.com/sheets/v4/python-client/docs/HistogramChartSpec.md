# HistogramChartSpec

A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_size** | **float** | By default the bucket size (the range of values stacked in a single column) is chosen automatically, but it may be overridden here. E.g., A bucket size of 1.5 results in buckets from 0 - 1.5, 1.5 - 3.0, etc. Cannot be negative. This field is optional. | [optional] 
**legend_position** | **str** | The position of the chart legend. | [optional] 
**outlier_percentile** | **float** | The outlier percentile is used to ensure that outliers do not adversely affect the calculation of bucket sizes. For example, setting an outlier percentile of 0.05 indicates that the top and bottom 5% of values when calculating buckets. The values are still included in the chart, they will be added to the first or last buckets instead of their own buckets. Must be between 0.0 and 0.5. | [optional] 
**series** | [**List[HistogramSeries]**](HistogramSeries.md) | The series for a histogram may be either a single series of values to be bucketed or multiple series, each of the same length, containing the name of the series followed by the values to be bucketed for that series. | [optional] 
**show_item_dividers** | **bool** | Whether horizontal divider lines should be displayed between items in each column. | [optional] 

## Example

```python
from openapi_client.models.histogram_chart_spec import HistogramChartSpec

# TODO update the JSON string below
json = "{}"
# create an instance of HistogramChartSpec from a JSON string
histogram_chart_spec_instance = HistogramChartSpec.from_json(json)
# print the JSON string representation of the object
print(HistogramChartSpec.to_json())

# convert the object into a dict
histogram_chart_spec_dict = histogram_chart_spec_instance.to_dict()
# create an instance of HistogramChartSpec from a dict
histogram_chart_spec_from_dict = HistogramChartSpec.from_dict(histogram_chart_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


