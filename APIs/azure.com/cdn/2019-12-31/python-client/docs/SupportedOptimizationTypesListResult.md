# SupportedOptimizationTypesListResult

The result of the GetSupportedOptimizationTypes API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supported_optimization_types** | [**List[OptimizationType]**](OptimizationType.md) | Supported optimization types for a profile. | [optional] [readonly] 

## Example

```python
from openapi_client.models.supported_optimization_types_list_result import SupportedOptimizationTypesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SupportedOptimizationTypesListResult from a JSON string
supported_optimization_types_list_result_instance = SupportedOptimizationTypesListResult.from_json(json)
# print the JSON string representation of the object
print(SupportedOptimizationTypesListResult.to_json())

# convert the object into a dict
supported_optimization_types_list_result_dict = supported_optimization_types_list_result_instance.to_dict()
# create an instance of SupportedOptimizationTypesListResult from a dict
supported_optimization_types_list_result_from_dict = SupportedOptimizationTypesListResult.from_dict(supported_optimization_types_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


