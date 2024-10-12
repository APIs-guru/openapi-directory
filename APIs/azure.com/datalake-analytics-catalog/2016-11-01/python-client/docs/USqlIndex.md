# USqlIndex

A Data Lake Analytics catalog U-SQL table index item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **List[str]** | the list of columns in the index | [optional] 
**distribution_info** | [**USqlDistributionInfo**](USqlDistributionInfo.md) |  | [optional] 
**index_id** | **int** | the ID of this index within the table. | [optional] 
**index_keys** | [**List[USqlDirectedColumn]**](USqlDirectedColumn.md) | the list of directed columns in the index | [optional] 
**is_columnstore** | **bool** | the switch indicating if this index is a columnstore index. | [optional] 
**is_unique** | **bool** | the switch indicating if this index is a unique index. | [optional] 
**name** | **str** | the name of the index in the table. | [optional] 
**partition_function** | **str** | partition function ID for the index. | [optional] 
**partition_key_list** | **List[str]** | the list of partition keys in the index | [optional] 
**stream_names** | **List[str]** | the list of full paths to the streams that contain this index in the DataLake account. | [optional] 

## Example

```python
from openapi_client.models.u_sql_index import USqlIndex

# TODO update the JSON string below
json = "{}"
# create an instance of USqlIndex from a JSON string
u_sql_index_instance = USqlIndex.from_json(json)
# print the JSON string representation of the object
print(USqlIndex.to_json())

# convert the object into a dict
u_sql_index_dict = u_sql_index_instance.to_dict()
# create an instance of USqlIndex from a dict
u_sql_index_from_dict = USqlIndex.from_dict(u_sql_index_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


