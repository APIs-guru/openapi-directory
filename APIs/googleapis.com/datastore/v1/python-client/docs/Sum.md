# Sum

Sum of the values of the requested property. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns 0. * Returns a 64-bit integer if all aggregated numbers are integers and the sum result does not overflow. Otherwise, the result is returned as a double. Note that even if all the aggregated values are integers, the result is returned as a double if it cannot fit within a 64-bit signed integer. When this occurs, the returned value will lose precision. * When underflow occurs, floating-point aggregation is non-deterministic. This means that running the same query repeatedly without any changes to the underlying values could produce slightly different results each time. In those cases, values should be stored as integers over floating-point numbers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_property** | [**PropertyReference**](PropertyReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.sum import Sum

# TODO update the JSON string below
json = "{}"
# create an instance of Sum from a JSON string
sum_instance = Sum.from_json(json)
# print the JSON string representation of the object
print(Sum.to_json())

# convert the object into a dict
sum_dict = sum_instance.to_dict()
# create an instance of Sum from a dict
sum_from_dict = Sum.from_dict(sum_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


