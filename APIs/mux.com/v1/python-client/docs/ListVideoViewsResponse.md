# ListVideoViewsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[AbridgedVideoView]**](AbridgedVideoView.md) |  | [optional] 
**timeframe** | **List[int]** |  | [optional] 
**total_row_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.list_video_views_response import ListVideoViewsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListVideoViewsResponse from a JSON string
list_video_views_response_instance = ListVideoViewsResponse.from_json(json)
# print the JSON string representation of the object
print(ListVideoViewsResponse.to_json())

# convert the object into a dict
list_video_views_response_dict = list_video_views_response_instance.to_dict()
# create an instance of ListVideoViewsResponse from a dict
list_video_views_response_from_dict = ListVideoViewsResponse.from_dict(list_video_views_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


