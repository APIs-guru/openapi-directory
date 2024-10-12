# DeleteContentRangeRequest

Deletes content from the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**Range**](Range.md) |  | [optional] 

## Example

```python
from openapi_client.models.delete_content_range_request import DeleteContentRangeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteContentRangeRequest from a JSON string
delete_content_range_request_instance = DeleteContentRangeRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteContentRangeRequest.to_json())

# convert the object into a dict
delete_content_range_request_dict = delete_content_range_request_instance.to_dict()
# create an instance of DeleteContentRangeRequest from a dict
delete_content_range_request_from_dict = DeleteContentRangeRequest.from_dict(delete_content_range_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


