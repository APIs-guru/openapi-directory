# USqlTable

A Data Lake Analytics catalog U-SQL table item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_list** | [**List[USqlTableColumn]**](USqlTableColumn.md) | the list of columns in this table | [optional] 
**database_name** | **str** | the name of the database. | [optional] 
**distribution_info** | [**USqlDistributionInfo**](USqlDistributionInfo.md) |  | [optional] 
**external_table** | [**ExternalTable**](ExternalTable.md) |  | [optional] 
**index_list** | [**List[USqlIndex]**](USqlIndex.md) | the list of indices in this table | [optional] 
**partition_key_list** | **List[str]** | the list of partition keys in the table | [optional] 
**schema_name** | **str** | the name of the schema associated with this table and database. | [optional] 
**table_name** | **str** | the name of the table. | [optional] 
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.u_sql_table import USqlTable

# TODO update the JSON string below
json = "{}"
# create an instance of USqlTable from a JSON string
u_sql_table_instance = USqlTable.from_json(json)
# print the JSON string representation of the object
print(USqlTable.to_json())

# convert the object into a dict
u_sql_table_dict = u_sql_table_instance.to_dict()
# create an instance of USqlTable from a dict
u_sql_table_from_dict = USqlTable.from_dict(u_sql_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


