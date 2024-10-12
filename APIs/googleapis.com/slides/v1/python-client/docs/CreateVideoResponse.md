# CreateVideoResponse

The result of creating a video.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | The object ID of the created video. | [optional] 

## Example

```python
from openapi_client.models.create_video_response import CreateVideoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateVideoResponse from a JSON string
create_video_response_instance = CreateVideoResponse.from_json(json)
# print the JSON string representation of the object
print(CreateVideoResponse.to_json())

# convert the object into a dict
create_video_response_dict = create_video_response_instance.to_dict()
# create an instance of CreateVideoResponse from a dict
create_video_response_from_dict = CreateVideoResponse.from_dict(create_video_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


