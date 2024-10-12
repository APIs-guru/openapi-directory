# ExponentialBuckets

Describing buckets with exponentially growing width.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**growth_factor** | **float** | The i&#39;th exponential bucket covers the interval [scale * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to num_finite_buckets inclusive. Must be larger than 1.0. | [optional] 
**num_finite_buckets** | **int** | The number of finite buckets. With the underflow and overflow buckets, the total number of buckets is &#x60;num_finite_buckets&#x60; + 2. See comments on &#x60;bucket_options&#x60; for details. | [optional] 
**scale** | **float** | The i&#39;th exponential bucket covers the interval [scale * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to num_finite_buckets inclusive. Must be &gt; 0. | [optional] 

## Example

```python
from openapi_client.models.exponential_buckets import ExponentialBuckets

# TODO update the JSON string below
json = "{}"
# create an instance of ExponentialBuckets from a JSON string
exponential_buckets_instance = ExponentialBuckets.from_json(json)
# print the JSON string representation of the object
print(ExponentialBuckets.to_json())

# convert the object into a dict
exponential_buckets_dict = exponential_buckets_instance.to_dict()
# create an instance of ExponentialBuckets from a dict
exponential_buckets_from_dict = ExponentialBuckets.from_dict(exponential_buckets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


