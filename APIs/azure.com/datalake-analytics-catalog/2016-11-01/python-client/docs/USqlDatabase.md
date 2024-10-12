# USqlDatabase

A Data Lake Analytics catalog U-SQL database item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_name** | **str** | the name of the database. | [optional] 
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.u_sql_database import USqlDatabase

# TODO update the JSON string below
json = "{}"
# create an instance of USqlDatabase from a JSON string
u_sql_database_instance = USqlDatabase.from_json(json)
# print the JSON string representation of the object
print(USqlDatabase.to_json())

# convert the object into a dict
u_sql_database_dict = u_sql_database_instance.to_dict()
# create an instance of USqlDatabase from a dict
u_sql_database_from_dict = USqlDatabase.from_dict(u_sql_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


