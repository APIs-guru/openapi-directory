# ListPartitionCursorsResponse

Response for ListPartitionCursors

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**partition_cursors** | [**List[PartitionCursor]**](PartitionCursor.md) | The partition cursors from this request. | [optional] 

## Example

```python
from openapi_client.models.list_partition_cursors_response import ListPartitionCursorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPartitionCursorsResponse from a JSON string
list_partition_cursors_response_instance = ListPartitionCursorsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPartitionCursorsResponse.to_json())

# convert the object into a dict
list_partition_cursors_response_dict = list_partition_cursors_response_instance.to_dict()
# create an instance of ListPartitionCursorsResponse from a dict
list_partition_cursors_response_from_dict = ListPartitionCursorsResponse.from_dict(list_partition_cursors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


