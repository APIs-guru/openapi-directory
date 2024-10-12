# DeleteTextRequest

Deletes text from a shape or a table cell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cell_location** | [**TableCellLocation**](TableCellLocation.md) |  | [optional] 
**object_id** | **str** | The object ID of the shape or table from which the text will be deleted. | [optional] 
**text_range** | [**Range**](Range.md) |  | [optional] 

## Example

```python
from openapi_client.models.delete_text_request import DeleteTextRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteTextRequest from a JSON string
delete_text_request_instance = DeleteTextRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteTextRequest.to_json())

# convert the object into a dict
delete_text_request_dict = delete_text_request_instance.to_dict()
# create an instance of DeleteTextRequest from a dict
delete_text_request_from_dict = DeleteTextRequest.from_dict(delete_text_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


