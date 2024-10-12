# CodePackageEntryPointStatistics

The statistics of the code package entry point

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_count** | **int** |  | [optional] 
**activation_failure_count** | **int** |  | [optional] 
**continuous_activation_failure_count** | **int** |  | [optional] 
**continuous_exit_failure_count** | **int** |  | [optional] 
**exit_count** | **int** |  | [optional] 
**exit_failure_count** | **int** |  | [optional] 
**last_activation_time** | **str** |  | [optional] 
**last_exit_code** | **int** |  | [optional] 
**last_exit_time** | **str** |  | [optional] 
**last_successful_activation_time** | **str** |  | [optional] 
**last_successful_exit_time** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.code_package_entry_point_statistics import CodePackageEntryPointStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of CodePackageEntryPointStatistics from a JSON string
code_package_entry_point_statistics_instance = CodePackageEntryPointStatistics.from_json(json)
# print the JSON string representation of the object
print(CodePackageEntryPointStatistics.to_json())

# convert the object into a dict
code_package_entry_point_statistics_dict = code_package_entry_point_statistics_instance.to_dict()
# create an instance of CodePackageEntryPointStatistics from a dict
code_package_entry_point_statistics_from_dict = CodePackageEntryPointStatistics.from_dict(code_package_entry_point_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


