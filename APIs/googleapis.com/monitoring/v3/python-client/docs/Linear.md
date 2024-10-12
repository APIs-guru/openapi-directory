# Linear

Specifies a linear sequence of buckets that all have the same width (except overflow and underflow). Each bucket represents a constant absolute uncertainty on the specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): offset + (width * i).Lower bound (1 <= i < N): offset + (width * (i - 1)).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_finite_buckets** | **int** | Must be greater than 0. | [optional] 
**offset** | **float** | Lower bound of the first bucket. | [optional] 
**width** | **float** | Must be greater than 0. | [optional] 

## Example

```python
from openapi_client.models.linear import Linear

# TODO update the JSON string below
json = "{}"
# create an instance of Linear from a JSON string
linear_instance = Linear.from_json(json)
# print the JSON string representation of the object
print(Linear.to_json())

# convert the object into a dict
linear_dict = linear_instance.to_dict()
# create an instance of Linear from a dict
linear_from_dict = Linear.from_dict(linear_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


