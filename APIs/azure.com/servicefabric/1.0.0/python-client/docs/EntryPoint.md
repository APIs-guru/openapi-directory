# EntryPoint

The point of the entry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_package_entry_point_statistics** | [**CodePackageEntryPointStatistics**](CodePackageEntryPointStatistics.md) |  | [optional] 
**entry_point_location** | **int** |  | [optional] 
**next_activation_time** | **int** |  | [optional] 
**process_id** | **int** |  | [optional] 
**run_as_user_name** | **int** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.entry_point import EntryPoint

# TODO update the JSON string below
json = "{}"
# create an instance of EntryPoint from a JSON string
entry_point_instance = EntryPoint.from_json(json)
# print the JSON string representation of the object
print(EntryPoint.to_json())

# convert the object into a dict
entry_point_dict = entry_point_instance.to_dict()
# create an instance of EntryPoint from a dict
entry_point_from_dict = EntryPoint.from_dict(entry_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


