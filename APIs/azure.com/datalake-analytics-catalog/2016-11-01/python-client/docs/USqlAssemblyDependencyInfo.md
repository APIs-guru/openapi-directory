# USqlAssemblyDependencyInfo

A Data Lake Analytics catalog U-SQL dependency information item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_id** | [**EntityId**](EntityId.md) |  | [optional] 

## Example

```python
from openapi_client.models.u_sql_assembly_dependency_info import USqlAssemblyDependencyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of USqlAssemblyDependencyInfo from a JSON string
u_sql_assembly_dependency_info_instance = USqlAssemblyDependencyInfo.from_json(json)
# print the JSON string representation of the object
print(USqlAssemblyDependencyInfo.to_json())

# convert the object into a dict
u_sql_assembly_dependency_info_dict = u_sql_assembly_dependency_info_instance.to_dict()
# create an instance of USqlAssemblyDependencyInfo from a dict
u_sql_assembly_dependency_info_from_dict = USqlAssemblyDependencyInfo.from_dict(u_sql_assembly_dependency_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


