# HistogramBucket

A bucket of a histogram.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of data values that are in the bucket, i.e. are between min and max values. | [optional] 
**max** | **float** | The maximum value of the bucket, exclusive unless max &#x3D; &#x60;\&quot;Infinity\&quot;&#x60;, in which case it&#39;s inclusive. | [optional] 
**min** | **float** | The minimum value of the bucket, inclusive. | [optional] 

## Example

```python
from openapi_client.models.histogram_bucket import HistogramBucket

# TODO update the JSON string below
json = "{}"
# create an instance of HistogramBucket from a JSON string
histogram_bucket_instance = HistogramBucket.from_json(json)
# print the JSON string representation of the object
print(HistogramBucket.to_json())

# convert the object into a dict
histogram_bucket_dict = histogram_bucket_instance.to_dict()
# create an instance of HistogramBucket from a dict
histogram_bucket_from_dict = HistogramBucket.from_dict(histogram_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


