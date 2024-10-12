# Distribution

Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: * the arithmetic mean of the samples * the minimum and maximum of the samples * the sum-squared-deviation of the samples, used to compute variance * a histogram of the values of the sample points

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_counts** | **List[str]** | The number of samples in each histogram bucket. &#x60;bucket_counts&#x60; are optional. If present, they must sum to the &#x60;count&#x60; value. The buckets are defined below in &#x60;bucket_option&#x60;. There are N buckets. &#x60;bucket_counts[0]&#x60; is the number of samples in the underflow bucket. &#x60;bucket_counts[1]&#x60; to &#x60;bucket_counts[N-1]&#x60; are the numbers of samples in each of the finite buckets. And &#x60;bucket_counts[N] is the number of samples in the overflow bucket. See the comments of &#x60;bucket_option&#x60; below for more details. Any suffix of trailing zeros may be omitted. | [optional] 
**count** | **str** | The total number of samples in the distribution. Must be &gt;&#x3D; 0. | [optional] 
**exemplars** | [**List[Exemplar]**](Exemplar.md) | Example points. Must be in increasing order of &#x60;value&#x60; field. | [optional] 
**explicit_buckets** | [**ExplicitBuckets**](ExplicitBuckets.md) |  | [optional] 
**exponential_buckets** | [**ExponentialBuckets**](ExponentialBuckets.md) |  | [optional] 
**linear_buckets** | [**LinearBuckets**](LinearBuckets.md) |  | [optional] 
**maximum** | **float** | The maximum of the population of values. Ignored if &#x60;count&#x60; is zero. | [optional] 
**mean** | **float** | The arithmetic mean of the samples in the distribution. If &#x60;count&#x60; is zero then this field must be zero. | [optional] 
**minimum** | **float** | The minimum of the population of values. Ignored if &#x60;count&#x60; is zero. | [optional] 
**sum_of_squared_deviation** | **float** | The sum of squared deviations from the mean: Sum[i&#x3D;1..count]((x_i - mean)^2) where each x_i is a sample values. If &#x60;count&#x60; is zero then this field must be zero, otherwise validation of the request fails. | [optional] 

## Example

```python
from openapi_client.models.distribution import Distribution

# TODO update the JSON string below
json = "{}"
# create an instance of Distribution from a JSON string
distribution_instance = Distribution.from_json(json)
# print the JSON string representation of the object
print(Distribution.to_json())

# convert the object into a dict
distribution_dict = distribution_instance.to_dict()
# create an instance of Distribution from a dict
distribution_from_dict = Distribution.from_dict(distribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


