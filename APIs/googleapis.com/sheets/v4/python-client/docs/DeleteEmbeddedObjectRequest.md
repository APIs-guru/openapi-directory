# DeleteEmbeddedObjectRequest

Deletes the embedded object with the given ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **int** | The ID of the embedded object to delete. | [optional] 

## Example

```python
from openapi_client.models.delete_embedded_object_request import DeleteEmbeddedObjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteEmbeddedObjectRequest from a JSON string
delete_embedded_object_request_instance = DeleteEmbeddedObjectRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteEmbeddedObjectRequest.to_json())

# convert the object into a dict
delete_embedded_object_request_dict = delete_embedded_object_request_instance.to_dict()
# create an instance of DeleteEmbeddedObjectRequest from a dict
delete_embedded_object_request_from_dict = DeleteEmbeddedObjectRequest.from_dict(delete_embedded_object_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


