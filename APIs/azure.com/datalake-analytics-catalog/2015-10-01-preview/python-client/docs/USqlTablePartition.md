# USqlTablePartition

A Data Lake Analytics catalog U-SQL table partition item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_date** | **datetime** | the creation time of the partition | [optional] 
**database_name** | **str** | the name of the database. | [optional] 
**index_id** | **int** | the index ID for this partition. | [optional] 
**label** | **List[str]** | the list of labels associated with this partition. | [optional] 
**parent_name** | [**DdlName**](DdlName.md) |  | [optional] 
**partition_name** | **str** | the name of the table partition. | [optional] 
**schema_name** | **str** | the name of the schema associated with this table partition and database. | [optional] 
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.u_sql_table_partition import USqlTablePartition

# TODO update the JSON string below
json = "{}"
# create an instance of USqlTablePartition from a JSON string
u_sql_table_partition_instance = USqlTablePartition.from_json(json)
# print the JSON string representation of the object
print(USqlTablePartition.to_json())

# convert the object into a dict
u_sql_table_partition_dict = u_sql_table_partition_instance.to_dict()
# create an instance of USqlTablePartition from a dict
u_sql_table_partition_from_dict = USqlTablePartition.from_dict(u_sql_table_partition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


