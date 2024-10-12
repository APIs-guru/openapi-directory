# USqlTableStatistics

A Data Lake Analytics catalog U-SQL table statistics item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**col_names** | **List[str]** | the list of column names associated with these statistics. | [optional] 
**create_time** | **datetime** | the creation time of the statistics. | [optional] 
**database_name** | **str** | the name of the database. | [optional] 
**filter_definition** | **str** | the filter definition for the statistics. | [optional] 
**has_filter** | **bool** | the switch indicating if these statistics have a filter. | [optional] 
**is_auto_created** | **bool** | the switch indicating if these statistics are automatically created. | [optional] 
**is_user_created** | **bool** | the switch indicating if these statistics are user created. | [optional] 
**schema_name** | **str** | the name of the schema associated with this table and database. | [optional] 
**stat_data_path** | **str** | the path to the statistics data. | [optional] 
**statistics_name** | **str** | the name of the table statistics. | [optional] 
**table_name** | **str** | the name of the table. | [optional] 
**update_time** | **datetime** | the last time the statistics were updated. | [optional] 
**user_stat_name** | **str** | the name of the user statistics. | [optional] 
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.u_sql_table_statistics import USqlTableStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of USqlTableStatistics from a JSON string
u_sql_table_statistics_instance = USqlTableStatistics.from_json(json)
# print the JSON string representation of the object
print(USqlTableStatistics.to_json())

# convert the object into a dict
u_sql_table_statistics_dict = u_sql_table_statistics_instance.to_dict()
# create an instance of USqlTableStatistics from a dict
u_sql_table_statistics_from_dict = USqlTableStatistics.from_dict(u_sql_table_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


