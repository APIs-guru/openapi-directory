# Video


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_ms** | **int** |  | [optional] 
**non_public_metrics** | [**VideoAllOfNonPublicMetrics**](VideoAllOfNonPublicMetrics.md) |  | [optional] 
**organic_metrics** | [**VideoAllOfOrganicMetrics**](VideoAllOfOrganicMetrics.md) |  | [optional] 
**preview_image_url** | **str** |  | [optional] 
**promoted_metrics** | [**VideoAllOfPromotedMetrics**](VideoAllOfPromotedMetrics.md) |  | [optional] 
**public_metrics** | [**VideoAllOfPublicMetrics**](VideoAllOfPublicMetrics.md) |  | [optional] 
**variants** | [**List[Variant]**](Variant.md) | An array of all available variants of the media. | [optional] 

## Example

```python
from openapi_client.models.video import Video

# TODO update the JSON string below
json = "{}"
# create an instance of Video from a JSON string
video_instance = Video.from_json(json)
# print the JSON string representation of the object
print(Video.to_json())

# convert the object into a dict
video_dict = video_instance.to_dict()
# create an instance of Video from a dict
video_from_dict = Video.from_dict(video_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


