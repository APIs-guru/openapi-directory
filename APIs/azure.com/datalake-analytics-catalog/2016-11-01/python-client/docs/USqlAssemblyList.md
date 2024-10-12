# USqlAssemblyList

A Data Lake Analytics catalog U-SQL assembly CLR item list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[USqlAssemblyClr]**](USqlAssemblyClr.md) | the list of assemblies in the database | [optional] [readonly] 
**next_link** | **str** | the link to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.u_sql_assembly_list import USqlAssemblyList

# TODO update the JSON string below
json = "{}"
# create an instance of USqlAssemblyList from a JSON string
u_sql_assembly_list_instance = USqlAssemblyList.from_json(json)
# print the JSON string representation of the object
print(USqlAssemblyList.to_json())

# convert the object into a dict
u_sql_assembly_list_dict = u_sql_assembly_list_instance.to_dict()
# create an instance of USqlAssemblyList from a dict
u_sql_assembly_list_from_dict = USqlAssemblyList.from_dict(u_sql_assembly_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


