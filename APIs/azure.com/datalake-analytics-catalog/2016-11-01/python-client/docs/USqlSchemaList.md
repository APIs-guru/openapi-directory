# USqlSchemaList

A Data Lake Analytics catalog U-SQL schema item list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[USqlSchema]**](USqlSchema.md) | the list of schemas in the database | [optional] [readonly] 
**next_link** | **str** | the link to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.u_sql_schema_list import USqlSchemaList

# TODO update the JSON string below
json = "{}"
# create an instance of USqlSchemaList from a JSON string
u_sql_schema_list_instance = USqlSchemaList.from_json(json)
# print the JSON string representation of the object
print(USqlSchemaList.to_json())

# convert the object into a dict
u_sql_schema_list_dict = u_sql_schema_list_instance.to_dict()
# create an instance of USqlSchemaList from a dict
u_sql_schema_list_from_dict = USqlSchemaList.from_dict(u_sql_schema_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


