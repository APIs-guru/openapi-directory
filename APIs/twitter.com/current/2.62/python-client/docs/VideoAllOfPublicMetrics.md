# VideoAllOfPublicMetrics

Engagement metrics for the Media at the time of the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**view_count** | **int** | Number of times this video has been viewed. | [optional] 

## Example

```python
from openapi_client.models.video_all_of_public_metrics import VideoAllOfPublicMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of VideoAllOfPublicMetrics from a JSON string
video_all_of_public_metrics_instance = VideoAllOfPublicMetrics.from_json(json)
# print the JSON string representation of the object
print(VideoAllOfPublicMetrics.to_json())

# convert the object into a dict
video_all_of_public_metrics_dict = video_all_of_public_metrics_instance.to_dict()
# create an instance of VideoAllOfPublicMetrics from a dict
video_all_of_public_metrics_from_dict = VideoAllOfPublicMetrics.from_dict(video_all_of_public_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


