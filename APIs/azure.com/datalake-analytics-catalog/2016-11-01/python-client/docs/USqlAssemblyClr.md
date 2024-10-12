# USqlAssemblyClr

A Data Lake Analytics catalog U-SQL assembly CLR item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assembly_clr_name** | **str** | the name of the assembly. | [optional] 
**clr_name** | **str** | the name of the CLR. | [optional] 
**database_name** | **str** | the name of the database. | [optional] 
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.u_sql_assembly_clr import USqlAssemblyClr

# TODO update the JSON string below
json = "{}"
# create an instance of USqlAssemblyClr from a JSON string
u_sql_assembly_clr_instance = USqlAssemblyClr.from_json(json)
# print the JSON string representation of the object
print(USqlAssemblyClr.to_json())

# convert the object into a dict
u_sql_assembly_clr_dict = u_sql_assembly_clr_instance.to_dict()
# create an instance of USqlAssemblyClr from a dict
u_sql_assembly_clr_from_dict = USqlAssemblyClr.from_dict(u_sql_assembly_clr_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


