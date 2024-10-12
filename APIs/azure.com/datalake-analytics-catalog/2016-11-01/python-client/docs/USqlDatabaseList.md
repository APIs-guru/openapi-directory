# USqlDatabaseList

A Data Lake Analytics catalog U-SQL database item list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[USqlDatabase]**](USqlDatabase.md) | the list of databases | [optional] [readonly] 
**next_link** | **str** | the link to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.u_sql_database_list import USqlDatabaseList

# TODO update the JSON string below
json = "{}"
# create an instance of USqlDatabaseList from a JSON string
u_sql_database_list_instance = USqlDatabaseList.from_json(json)
# print the JSON string representation of the object
print(USqlDatabaseList.to_json())

# convert the object into a dict
u_sql_database_list_dict = u_sql_database_list_instance.to_dict()
# create an instance of USqlDatabaseList from a dict
u_sql_database_list_from_dict = USqlDatabaseList.from_dict(u_sql_database_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


