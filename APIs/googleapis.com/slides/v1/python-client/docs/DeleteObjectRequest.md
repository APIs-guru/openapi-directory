# DeleteObjectRequest

Deletes an object, either pages or page elements, from the presentation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The object ID of the page or page element to delete. If after a delete operation a group contains only 1 or no page elements, the group is also deleted. If a placeholder is deleted on a layout, any empty inheriting placeholders are also deleted. | [optional] 

## Example

```python
from openapi_client.models.delete_object_request import DeleteObjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteObjectRequest from a JSON string
delete_object_request_instance = DeleteObjectRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteObjectRequest.to_json())

# convert the object into a dict
delete_object_request_dict = delete_object_request_instance.to_dict()
# create an instance of DeleteObjectRequest from a dict
delete_object_request_from_dict = DeleteObjectRequest.from_dict(delete_object_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


