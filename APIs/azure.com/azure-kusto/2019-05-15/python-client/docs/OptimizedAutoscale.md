# OptimizedAutoscale

A class that contains the optimized auto scale definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_enabled** | **bool** | A boolean value that indicate if the optimized autoscale feature is enabled or not. | 
**maximum** | **int** | Maximum allowed instances count. | 
**minimum** | **int** | Minimum allowed instances count. | 
**version** | **int** | The version of the template defined, for instance 1. | 

## Example

```python
from openapi_client.models.optimized_autoscale import OptimizedAutoscale

# TODO update the JSON string below
json = "{}"
# create an instance of OptimizedAutoscale from a JSON string
optimized_autoscale_instance = OptimizedAutoscale.from_json(json)
# print the JSON string representation of the object
print(OptimizedAutoscale.to_json())

# convert the object into a dict
optimized_autoscale_dict = optimized_autoscale_instance.to_dict()
# create an instance of OptimizedAutoscale from a dict
optimized_autoscale_from_dict = OptimizedAutoscale.from_dict(optimized_autoscale_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


