# XPSFloat64Stats

The data statistics of a series of FLOAT64 values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_stats** | [**XPSCommonStats**](XPSCommonStats.md) |  | [optional] 
**histogram_buckets** | [**List[XPSFloat64StatsHistogramBucket]**](XPSFloat64StatsHistogramBucket.md) | Histogram buckets of the data series. Sorted by the min value of the bucket, ascendingly, and the number of the buckets is dynamically generated. The buckets are non-overlapping and completely cover whole FLOAT64 range with min of first bucket being &#x60;\&quot;-Infinity\&quot;&#x60;, and max of the last one being &#x60;\&quot;Infinity\&quot;&#x60;. | [optional] 
**mean** | **float** | The mean of the series. | [optional] 
**quantiles** | **List[float]** | Ordered from 0 to k k-quantile values of the data series of n values. The value at index i is, approximately, the i*n/k-th smallest value in the series; for i &#x3D; 0 and i &#x3D; k these are, respectively, the min and max values. | [optional] 
**standard_deviation** | **float** | The standard deviation of the series. | [optional] 

## Example

```python
from openapi_client.models.xps_float64_stats import XPSFloat64Stats

# TODO update the JSON string below
json = "{}"
# create an instance of XPSFloat64Stats from a JSON string
xps_float64_stats_instance = XPSFloat64Stats.from_json(json)
# print the JSON string representation of the object
print(XPSFloat64Stats.to_json())

# convert the object into a dict
xps_float64_stats_dict = xps_float64_stats_instance.to_dict()
# create an instance of XPSFloat64Stats from a dict
xps_float64_stats_from_dict = XPSFloat64Stats.from_dict(xps_float64_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


