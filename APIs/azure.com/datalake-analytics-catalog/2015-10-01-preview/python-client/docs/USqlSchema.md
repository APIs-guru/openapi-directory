# USqlSchema

A Data Lake Analytics catalog U-SQL schema item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_name** | **str** | the name of the database. | [optional] 
**schema_name** | **str** | the name of the schema. | [optional] 
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.u_sql_schema import USqlSchema

# TODO update the JSON string below
json = "{}"
# create an instance of USqlSchema from a JSON string
u_sql_schema_instance = USqlSchema.from_json(json)
# print the JSON string representation of the object
print(USqlSchema.to_json())

# convert the object into a dict
u_sql_schema_dict = u_sql_schema_instance.to_dict()
# create an instance of USqlSchema from a dict
u_sql_schema_from_dict = USqlSchema.from_dict(u_sql_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


