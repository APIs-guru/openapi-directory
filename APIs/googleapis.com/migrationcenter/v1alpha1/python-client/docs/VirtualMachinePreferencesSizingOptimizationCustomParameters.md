# VirtualMachinePreferencesSizingOptimizationCustomParameters

Custom data to use for sizing optimizations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_method** | **str** | Optional. Type of statistical aggregation of a resource utilization data, on which to base the sizing metrics. | [optional] 
**cpu_usage_percentage** | **int** | Optional. Desired percentage of CPU usage. Must be in the interval [1, 100] (or 0 for default value). | [optional] 
**memory_usage_percentage** | **int** | Optional. Desired percentage of memory usage. Must be in the interval [1, 100] (or 0 for default value). | [optional] 
**storage_multiplier** | **float** | Optional. Desired increase factor of storage, relative to currently used storage. Must be in the interval [1.0, 2.0] (or 0 for default value). | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_preferences_sizing_optimization_custom_parameters import VirtualMachinePreferencesSizingOptimizationCustomParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachinePreferencesSizingOptimizationCustomParameters from a JSON string
virtual_machine_preferences_sizing_optimization_custom_parameters_instance = VirtualMachinePreferencesSizingOptimizationCustomParameters.from_json(json)
# print the JSON string representation of the object
print(VirtualMachinePreferencesSizingOptimizationCustomParameters.to_json())

# convert the object into a dict
virtual_machine_preferences_sizing_optimization_custom_parameters_dict = virtual_machine_preferences_sizing_optimization_custom_parameters_instance.to_dict()
# create an instance of VirtualMachinePreferencesSizingOptimizationCustomParameters from a dict
virtual_machine_preferences_sizing_optimization_custom_parameters_from_dict = VirtualMachinePreferencesSizingOptimizationCustomParameters.from_dict(virtual_machine_preferences_sizing_optimization_custom_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


