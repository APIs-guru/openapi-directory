# CodePackageEntryPointStatistics

Statistics about setup or main entry point  of a code package deployed on a Service Fabric node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_count** | **str** | Number of times the entry point has run. | [optional] 
**activation_failure_count** | **str** | Number of times the entry point failed to run. | [optional] 
**continuous_activation_failure_count** | **str** | Number of times the entry point continuously failed to run. | [optional] 
**continuous_exit_failure_count** | **str** | Number of times the entry point continuously failed to exit gracefully. | [optional] 
**exit_count** | **str** | Number of times the entry point finished running. | [optional] 
**exit_failure_count** | **str** | Number of times the entry point failed to exit gracefully. | [optional] 
**last_activation_time** | **datetime** | The last time (in UTC) when Service Fabric attempted to run the entry point. | [optional] 
**last_exit_code** | **str** | The last exit code of the entry point. | [optional] 
**last_exit_time** | **datetime** | The last time (in UTC) when the entry point finished running. | [optional] 
**last_successful_activation_time** | **datetime** | The last time (in UTC) when the entry point ran successfully. | [optional] 
**last_successful_exit_time** | **datetime** | The last time (in UTC) when the entry point finished running gracefully. | [optional] 

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


