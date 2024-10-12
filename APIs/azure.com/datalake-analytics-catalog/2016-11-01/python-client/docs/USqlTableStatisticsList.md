# USqlTableStatisticsList

A Data Lake Analytics catalog U-SQL table statistics item list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[USqlTableStatistics]**](USqlTableStatistics.md) | the list of table statistics in the database, schema and table combination | [optional] [readonly] 
**next_link** | **str** | the link to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.u_sql_table_statistics_list import USqlTableStatisticsList

# TODO update the JSON string below
json = "{}"
# create an instance of USqlTableStatisticsList from a JSON string
u_sql_table_statistics_list_instance = USqlTableStatisticsList.from_json(json)
# print the JSON string representation of the object
print(USqlTableStatisticsList.to_json())

# convert the object into a dict
u_sql_table_statistics_list_dict = u_sql_table_statistics_list_instance.to_dict()
# create an instance of USqlTableStatisticsList from a dict
u_sql_table_statistics_list_from_dict = USqlTableStatisticsList.from_dict(u_sql_table_statistics_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


