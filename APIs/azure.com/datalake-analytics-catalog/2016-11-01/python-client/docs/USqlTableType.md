# USqlTableType

A Data Lake Analytics catalog U-SQL table type item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[TypeFieldInfo]**](TypeFieldInfo.md) | the type field information associated with this table type. | [optional] [readonly] 
**c_sharp_name** | **str** | the C# name for this type. | [optional] 
**database_name** | **str** | the name of the database. | [optional] 
**full_c_sharp_name** | **str** | the fully qualified C# name for this type. | [optional] 
**is_assembly_type** | **bool** | The switch indicating if this type is an assembly type. | [optional] 
**is_complex_type** | **bool** | The switch indicating if this type is a complex type. | [optional] 
**is_nullable** | **bool** | The switch indicating if this type is nullable. | [optional] 
**is_table_type** | **bool** | The switch indicating if this type is a table type. | [optional] 
**is_user_defined** | **bool** | The switch indicating if this type is user defined. | [optional] 
**principal_id** | **int** | the principal ID for this type. | [optional] 
**schema_id** | **int** | the schema ID for this type. | [optional] 
**schema_name** | **str** | the name of the schema associated with this table and database. | [optional] 
**system_type_id** | **int** | the system type ID for this type. | [optional] 
**type_family** | **str** | the type family for this type. | [optional] 
**type_name** | **str** | the name of type for this type. | [optional] 
**user_type_id** | **int** | the user type ID for this type. | [optional] 
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.u_sql_table_type import USqlTableType

# TODO update the JSON string below
json = "{}"
# create an instance of USqlTableType from a JSON string
u_sql_table_type_instance = USqlTableType.from_json(json)
# print the JSON string representation of the object
print(USqlTableType.to_json())

# convert the object into a dict
u_sql_table_type_dict = u_sql_table_type_instance.to_dict()
# create an instance of USqlTableType from a dict
u_sql_table_type_from_dict = USqlTableType.from_dict(u_sql_table_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


