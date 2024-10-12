# XPSFloat64StatsHistogramBucket

A bucket of a histogram.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of data values that are in the bucket, i.e. are between min and max values. | [optional] 
**max** | **float** | The maximum value of the bucket, exclusive unless max &#x3D; &#x60;\&quot;Infinity\&quot;&#x60;, in which case it&#39;s inclusive. | [optional] 
**min** | **float** | The minimum value of the bucket, inclusive. | [optional] 

## Example

```python
from openapi_client.models.xps_float64_stats_histogram_bucket import XPSFloat64StatsHistogramBucket

# TODO update the JSON string below
json = "{}"
# create an instance of XPSFloat64StatsHistogramBucket from a JSON string
xps_float64_stats_histogram_bucket_instance = XPSFloat64StatsHistogramBucket.from_json(json)
# print the JSON string representation of the object
print(XPSFloat64StatsHistogramBucket.to_json())

# convert the object into a dict
xps_float64_stats_histogram_bucket_dict = xps_float64_stats_histogram_bucket_instance.to_dict()
# create an instance of XPSFloat64StatsHistogramBucket from a dict
xps_float64_stats_histogram_bucket_from_dict = XPSFloat64StatsHistogramBucket.from_dict(xps_float64_stats_histogram_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


