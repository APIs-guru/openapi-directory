# CodePackageEntryPoint

Information about setup or main entry point of a code package deployed on a Service Fabric node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_package_entry_point_statistics** | [**CodePackageEntryPointStatistics**](CodePackageEntryPointStatistics.md) |  | [optional] 
**entry_point_location** | **str** | The location of entry point executable on the node. | [optional] 
**instance_id** | **str** | The instance ID for current running entry point. For a code package setup entry point (if specified) runs first and after it finishes main entry point is started. Each time entry point executable is run, its instance id will change. | [optional] 
**next_activation_time** | **datetime** | The time (in UTC) when the entry point executable will be run next. | [optional] 
**process_id** | **str** | The process ID of the entry point. | [optional] 
**run_as_user_name** | **str** | The user name under which entry point executable is run on the node. | [optional] 
**status** | [**EntryPointStatus**](EntryPointStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.code_package_entry_point import CodePackageEntryPoint

# TODO update the JSON string below
json = "{}"
# create an instance of CodePackageEntryPoint from a JSON string
code_package_entry_point_instance = CodePackageEntryPoint.from_json(json)
# print the JSON string representation of the object
print(CodePackageEntryPoint.to_json())

# convert the object into a dict
code_package_entry_point_dict = code_package_entry_point_instance.to_dict()
# create an instance of CodePackageEntryPoint from a dict
code_package_entry_point_from_dict = CodePackageEntryPoint.from_dict(code_package_entry_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


