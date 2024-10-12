# UpdateEmbeddedObjectPositionRequest

Update an embedded object's position (such as a moving or resizing a chart or image).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields of OverlayPosition that should be updated when setting a new position. Used only if newPosition.overlayPosition is set, in which case at least one field must be specified. The root &#x60;newPosition.overlayPosition&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 
**new_position** | [**EmbeddedObjectPosition**](EmbeddedObjectPosition.md) |  | [optional] 
**object_id** | **int** | The ID of the object to moved. | [optional] 

## Example

```python
from openapi_client.models.update_embedded_object_position_request import UpdateEmbeddedObjectPositionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateEmbeddedObjectPositionRequest from a JSON string
update_embedded_object_position_request_instance = UpdateEmbeddedObjectPositionRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateEmbeddedObjectPositionRequest.to_json())

# convert the object into a dict
update_embedded_object_position_request_dict = update_embedded_object_position_request_instance.to_dict()
# create an instance of UpdateEmbeddedObjectPositionRequest from a dict
update_embedded_object_position_request_from_dict = UpdateEmbeddedObjectPositionRequest.from_dict(update_embedded_object_position_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


