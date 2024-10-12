# DeletePositionedObjectRequest

Deletes a PositionedObject from the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The ID of the positioned object to delete. | [optional] 

## Example

```python
from openapi_client.models.delete_positioned_object_request import DeletePositionedObjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeletePositionedObjectRequest from a JSON string
delete_positioned_object_request_instance = DeletePositionedObjectRequest.from_json(json)
# print the JSON string representation of the object
print(DeletePositionedObjectRequest.to_json())

# convert the object into a dict
delete_positioned_object_request_dict = delete_positioned_object_request_instance.to_dict()
# create an instance of DeletePositionedObjectRequest from a dict
delete_positioned_object_request_from_dict = DeletePositionedObjectRequest.from_dict(delete_positioned_object_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


