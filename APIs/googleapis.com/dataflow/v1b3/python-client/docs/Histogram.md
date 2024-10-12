# Histogram

Histogram of value counts for a distribution. Buckets have an inclusive lower bound and exclusive upper bound and use \"1,2,5 bucketing\": The first bucket range is from [0,1) and all subsequent bucket boundaries are powers of ten multiplied by 1, 2, or 5. Thus, bucket boundaries are 0, 1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, ... Negative values are not supported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_counts** | **List[str]** | Counts of values in each bucket. For efficiency, prefix and trailing buckets with count &#x3D; 0 are elided. Buckets can store the full range of values of an unsigned long, with ULLONG_MAX falling into the 59th bucket with range [1e19, 2e19). | [optional] 
**first_bucket_offset** | **int** | Starting index of first stored bucket. The non-inclusive upper-bound of the ith bucket is given by: pow(10,(i-first_bucket_offset)/3) * (1,2,5)[(i-first_bucket_offset)%3] | [optional] 

## Example

```python
from openapi_client.models.histogram import Histogram

# TODO update the JSON string below
json = "{}"
# create an instance of Histogram from a JSON string
histogram_instance = Histogram.from_json(json)
# print the JSON string representation of the object
print(Histogram.to_json())

# convert the object into a dict
histogram_dict = histogram_instance.to_dict()
# create an instance of Histogram from a dict
histogram_from_dict = Histogram.from_dict(histogram_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


