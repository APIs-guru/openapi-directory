# TableDataList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A hash of this page of results. | [optional] 
**kind** | **str** | The resource type of the response. | [optional] [default to 'bigquery#tableDataList']
**page_token** | **str** | A token used for paging results. Providing this token instead of the startIndex parameter can help you retrieve stable results when an underlying table is changing. | [optional] 
**rows** | [**List[TableRow]**](TableRow.md) | Rows of results. | [optional] 
**total_rows** | **str** | Total rows of the entire table. In order to show default value 0 we have to present it as string. | [optional] 

## Example

```python
from openapi_client.models.table_data_list import TableDataList

# TODO update the JSON string below
json = "{}"
# create an instance of TableDataList from a JSON string
table_data_list_instance = TableDataList.from_json(json)
# print the JSON string representation of the object
print(TableDataList.to_json())

# convert the object into a dict
table_data_list_dict = table_data_list_instance.to_dict()
# create an instance of TableDataList from a dict
table_data_list_from_dict = TableDataList.from_dict(table_data_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


