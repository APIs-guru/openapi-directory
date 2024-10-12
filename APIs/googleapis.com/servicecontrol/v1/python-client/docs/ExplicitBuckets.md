# ExplicitBuckets

Describing buckets with arbitrary user-provided width.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounds** | **List[float]** | &#39;bound&#39; is a list of strictly increasing boundaries between buckets. Note that a list of length N-1 defines N buckets because of fenceposting. See comments on &#x60;bucket_options&#x60; for details. The i&#39;th finite bucket covers the interval [bound[i-1], bound[i]) where i ranges from 1 to bound_size() - 1. Note that there are no finite buckets at all if &#39;bound&#39; only contains a single element; in that special case the single bound defines the boundary between the underflow and overflow buckets. bucket number lower bound upper bound i &#x3D;&#x3D; 0 (underflow) -inf bound[i] 0 &lt; i &lt; bound_size() bound[i-1] bound[i] i &#x3D;&#x3D; bound_size() (overflow) bound[i-1] +inf | [optional] 

## Example

```python
from openapi_client.models.explicit_buckets import ExplicitBuckets

# TODO update the JSON string below
json = "{}"
# create an instance of ExplicitBuckets from a JSON string
explicit_buckets_instance = ExplicitBuckets.from_json(json)
# print the JSON string representation of the object
print(ExplicitBuckets.to_json())

# convert the object into a dict
explicit_buckets_dict = explicit_buckets_instance.to_dict()
# create an instance of ExplicitBuckets from a dict
explicit_buckets_from_dict = ExplicitBuckets.from_dict(explicit_buckets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


