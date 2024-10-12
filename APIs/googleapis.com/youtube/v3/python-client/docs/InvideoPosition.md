# InvideoPosition

Describes the spatial position of a visual widget inside a video. It is a union of various position types, out of which only will be set one.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corner_position** | **str** | Describes in which corner of the video the visual widget will appear. | [optional] 
**type** | **str** | Defines the position type. | [optional] 

## Example

```python
from openapi_client.models.invideo_position import InvideoPosition

# TODO update the JSON string below
json = "{}"
# create an instance of InvideoPosition from a JSON string
invideo_position_instance = InvideoPosition.from_json(json)
# print the JSON string representation of the object
print(InvideoPosition.to_json())

# convert the object into a dict
invideo_position_dict = invideo_position_instance.to_dict()
# create an instance of InvideoPosition from a dict
invideo_position_from_dict = InvideoPosition.from_dict(invideo_position_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


