# Exponential

Specifies an exponential sequence of buckets that have a width that is proportional to the value of the lower bound. Each bucket represents a constant relative uncertainty on a specific value in the bucket.There are num_finite_buckets + 2 (= N) buckets. Bucket i has the following boundaries:Upper bound (0 <= i < N-1): scale * (growth_factor ^ i).Lower bound (1 <= i < N): scale * (growth_factor ^ (i - 1)).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**growth_factor** | **float** | Must be greater than 1. | [optional] 
**num_finite_buckets** | **int** | Must be greater than 0. | [optional] 
**scale** | **float** | Must be greater than 0. | [optional] 

## Example

```python
from openapi_client.models.exponential import Exponential

# TODO update the JSON string below
json = "{}"
# create an instance of Exponential from a JSON string
exponential_instance = Exponential.from_json(json)
# print the JSON string representation of the object
print(Exponential.to_json())

# convert the object into a dict
exponential_dict = exponential_instance.to_dict()
# create an instance of Exponential from a dict
exponential_from_dict = Exponential.from_dict(exponential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


