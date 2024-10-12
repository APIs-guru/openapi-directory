# VideoGetRatingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**event_id** | **str** | Serialized EventId of the request which produced this response. | [optional] 
**items** | [**List[VideoRating]**](VideoRating.md) | A list of ratings that match the request criteria. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#videoGetRatingResponse\&quot;. | [optional] [default to 'youtube#videoGetRatingResponse']
**visitor_id** | **str** | The visitorId identifies the visitor. | [optional] 

## Example

```python
from openapi_client.models.video_get_rating_response import VideoGetRatingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VideoGetRatingResponse from a JSON string
video_get_rating_response_instance = VideoGetRatingResponse.from_json(json)
# print the JSON string representation of the object
print(VideoGetRatingResponse.to_json())

# convert the object into a dict
video_get_rating_response_dict = video_get_rating_response_instance.to_dict()
# create an instance of VideoGetRatingResponse from a dict
video_get_rating_response_from_dict = VideoGetRatingResponse.from_dict(video_get_rating_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


