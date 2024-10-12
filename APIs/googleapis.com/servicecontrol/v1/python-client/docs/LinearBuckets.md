# LinearBuckets

Describing buckets with constant width.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_finite_buckets** | **int** | The number of finite buckets. With the underflow and overflow buckets, the total number of buckets is &#x60;num_finite_buckets&#x60; + 2. See comments on &#x60;bucket_options&#x60; for details. | [optional] 
**offset** | **float** | The i&#39;th linear bucket covers the interval [offset + (i-1) * width, offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive. | [optional] 
**width** | **float** | The i&#39;th linear bucket covers the interval [offset + (i-1) * width, offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive. Must be strictly positive. | [optional] 

## Example

```python
from openapi_client.models.linear_buckets import LinearBuckets

# TODO update the JSON string below
json = "{}"
# create an instance of LinearBuckets from a JSON string
linear_buckets_instance = LinearBuckets.from_json(json)
# print the JSON string representation of the object
print(LinearBuckets.to_json())

# convert the object into a dict
linear_buckets_dict = linear_buckets_instance.to_dict()
# create an instance of LinearBuckets from a dict
linear_buckets_from_dict = LinearBuckets.from_dict(linear_buckets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


