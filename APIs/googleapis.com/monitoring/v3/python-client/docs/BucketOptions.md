# BucketOptions

BucketOptions describes the bucket boundaries used to create a histogram for the distribution. The buckets can be in a linear sequence, an exponential sequence, or each bucket can be specified explicitly. BucketOptions does not include the number of values in each bucket.A bucket has an inclusive lower bound and exclusive upper bound for the values that are counted for that bucket. The upper bound of a bucket must be strictly greater than the lower bound. The sequence of N buckets for a distribution consists of an underflow bucket (number 0), zero or more finite buckets (number 1 through N - 2) and an overflow bucket (number N - 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the same as the upper bound of bucket i - 1. The buckets span the whole range of finite values: lower bound of the underflow bucket is -infinity and the upper bound of the overflow bucket is +infinity. The finite buckets are so-called because both bounds are finite.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**explicit_buckets** | [**Explicit**](Explicit.md) |  | [optional] 
**exponential_buckets** | [**Exponential**](Exponential.md) |  | [optional] 
**linear_buckets** | [**Linear**](Linear.md) |  | [optional] 

## Example

```python
from openapi_client.models.bucket_options import BucketOptions

# TODO update the JSON string below
json = "{}"
# create an instance of BucketOptions from a JSON string
bucket_options_instance = BucketOptions.from_json(json)
# print the JSON string representation of the object
print(BucketOptions.to_json())

# convert the object into a dict
bucket_options_dict = bucket_options_instance.to_dict()
# create an instance of BucketOptions from a dict
bucket_options_from_dict = BucketOptions.from_dict(bucket_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


