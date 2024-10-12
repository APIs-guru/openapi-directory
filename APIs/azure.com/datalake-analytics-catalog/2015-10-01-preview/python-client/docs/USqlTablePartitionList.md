# USqlTablePartitionList

A Data Lake Analytics catalog U-SQL table partition item list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[USqlTablePartition]**](USqlTablePartition.md) | the list of table partitions in the database, schema and table combination | [optional] [readonly] 
**count** | **int** | the count of items in the list. | [optional] 
**next_link** | **str** | the link to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.u_sql_table_partition_list import USqlTablePartitionList

# TODO update the JSON string below
json = "{}"
# create an instance of USqlTablePartitionList from a JSON string
u_sql_table_partition_list_instance = USqlTablePartitionList.from_json(json)
# print the JSON string representation of the object
print(USqlTablePartitionList.to_json())

# convert the object into a dict
u_sql_table_partition_list_dict = u_sql_table_partition_list_instance.to_dict()
# create an instance of USqlTablePartitionList from a dict
u_sql_table_partition_list_from_dict = USqlTablePartitionList.from_dict(u_sql_table_partition_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


