# IterativeCalculationSettings

Settings to control how circular dependencies are resolved with iterative calculation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**convergence_threshold** | **float** | When iterative calculation is enabled and successive results differ by less than this threshold value, the calculation rounds stop. | [optional] 
**max_iterations** | **int** | When iterative calculation is enabled, the maximum number of calculation rounds to perform. | [optional] 

## Example

```python
from openapi_client.models.iterative_calculation_settings import IterativeCalculationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of IterativeCalculationSettings from a JSON string
iterative_calculation_settings_instance = IterativeCalculationSettings.from_json(json)
# print the JSON string representation of the object
print(IterativeCalculationSettings.to_json())

# convert the object into a dict
iterative_calculation_settings_dict = iterative_calculation_settings_instance.to_dict()
# create an instance of IterativeCalculationSettings from a dict
iterative_calculation_settings_from_dict = IterativeCalculationSettings.from_dict(iterative_calculation_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


