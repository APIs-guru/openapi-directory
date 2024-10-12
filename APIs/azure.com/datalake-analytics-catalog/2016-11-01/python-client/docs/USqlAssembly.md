# USqlAssembly

A Data Lake Analytics catalog U-SQL Assembly.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assembly_name** | **str** | the name of the assembly. | [optional] 
**clr_name** | **str** | the name of the CLR. | [optional] 
**database_name** | **str** | the name of the database. | [optional] 
**dependencies** | [**List[USqlAssemblyDependencyInfo]**](USqlAssemblyDependencyInfo.md) | the list of dependencies associated with the assembly | [optional] 
**files** | [**List[USqlAssemblyFileInfo]**](USqlAssemblyFileInfo.md) | the list of files associated with the assembly | [optional] 
**is_user_defined** | **bool** | the switch indicating if this assembly is user defined or not. | [optional] 
**is_visible** | **bool** | the switch indicating if this assembly is visible or not. | [optional] 
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.u_sql_assembly import USqlAssembly

# TODO update the JSON string below
json = "{}"
# create an instance of USqlAssembly from a JSON string
u_sql_assembly_instance = USqlAssembly.from_json(json)
# print the JSON string representation of the object
print(USqlAssembly.to_json())

# convert the object into a dict
u_sql_assembly_dict = u_sql_assembly_instance.to_dict()
# create an instance of USqlAssembly from a dict
u_sql_assembly_from_dict = USqlAssembly.from_dict(u_sql_assembly_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


