# USqlTableFragment

A Data Lake Analytics catalog U-SQL table fragment item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_date** | **datetime** | the creation time of the table fragment. | [optional] 
**fragment_id** | **str** | the version of the catalog item. | [optional] 
**index_id** | **int** | the ordinal of the index which contains the table fragment. | [optional] 
**parent_id** | **str** | the parent object Id of the table fragment. The parent could be a table or table partition. | [optional] 
**row_count** | **int** | the number of rows in the table fragment. | [optional] 
**size** | **int** | the data size of the table fragment in bytes. | [optional] 
**stream_path** | **str** | the relative path for the table fragment location. | [optional] 

## Example

```python
from openapi_client.models.u_sql_table_fragment import USqlTableFragment

# TODO update the JSON string below
json = "{}"
# create an instance of USqlTableFragment from a JSON string
u_sql_table_fragment_instance = USqlTableFragment.from_json(json)
# print the JSON string representation of the object
print(USqlTableFragment.to_json())

# convert the object into a dict
u_sql_table_fragment_dict = u_sql_table_fragment_instance.to_dict()
# create an instance of USqlTableFragment from a dict
u_sql_table_fragment_from_dict = USqlTableFragment.from_dict(u_sql_table_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


