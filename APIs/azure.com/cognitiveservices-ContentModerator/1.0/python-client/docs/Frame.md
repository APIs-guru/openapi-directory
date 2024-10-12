# Frame

Video frame property details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frame_image** | **str** | Frame image. | [optional] 
**metadata** | [**List[KeyValuePair]**](KeyValuePair.md) | Array of KeyValue. | [optional] 
**reviewer_result_tags** | [**List[Tag]**](Tag.md) | Reviewer result tags. | [optional] 
**timestamp** | **str** | Timestamp of the frame. | [optional] 

## Example

```python
from openapi_client.models.frame import Frame

# TODO update the JSON string below
json = "{}"
# create an instance of Frame from a JSON string
frame_instance = Frame.from_json(json)
# print the JSON string representation of the object
print(Frame.to_json())

# convert the object into a dict
frame_dict = frame_instance.to_dict()
# create an instance of Frame from a dict
frame_from_dict = Frame.from_dict(frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


