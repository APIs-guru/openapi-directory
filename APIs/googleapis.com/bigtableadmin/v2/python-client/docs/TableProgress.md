# TableProgress

Progress info for copying a table's data to the new cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimated_copied_bytes** | **str** | Estimate of the number of bytes copied so far for this table. This will eventually reach &#39;estimated_size_bytes&#39; unless the table copy is CANCELLED. | [optional] 
**estimated_size_bytes** | **str** | Estimate of the size of the table to be copied. | [optional] 
**state** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.table_progress import TableProgress

# TODO update the JSON string below
json = "{}"
# create an instance of TableProgress from a JSON string
table_progress_instance = TableProgress.from_json(json)
# print the JSON string representation of the object
print(TableProgress.to_json())

# convert the object into a dict
table_progress_dict = table_progress_instance.to_dict()
# create an instance of TableProgress from a dict
table_progress_from_dict = TableProgress.from_dict(table_progress_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


