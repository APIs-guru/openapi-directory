# FloatingPointMean

A representation of a floating point mean metric contribution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | [**SplitInt64**](SplitInt64.md) |  | [optional] 
**sum** | **float** | The sum of all values being aggregated. | [optional] 

## Example

```python
from openapi_client.models.floating_point_mean import FloatingPointMean

# TODO update the JSON string below
json = "{}"
# create an instance of FloatingPointMean from a JSON string
floating_point_mean_instance = FloatingPointMean.from_json(json)
# print the JSON string representation of the object
print(FloatingPointMean.to_json())

# convert the object into a dict
floating_point_mean_dict = floating_point_mean_instance.to_dict()
# create an instance of FloatingPointMean from a dict
floating_point_mean_from_dict = FloatingPointMean.from_dict(floating_point_mean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


