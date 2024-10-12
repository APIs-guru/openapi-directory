# AbridgedVideoView


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** |  | [optional] 
**error_type_id** | **int** |  | [optional] 
**id** | **str** |  | [optional] 
**player_error_code** | **str** |  | [optional] 
**player_error_message** | **str** |  | [optional] 
**total_row_count** | **int** |  | [optional] 
**video_title** | **str** |  | [optional] 
**view_end** | **str** |  | [optional] 
**view_start** | **str** |  | [optional] 
**viewer_application_name** | **str** |  | [optional] 
**viewer_os_family** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.abridged_video_view import AbridgedVideoView

# TODO update the JSON string below
json = "{}"
# create an instance of AbridgedVideoView from a JSON string
abridged_video_view_instance = AbridgedVideoView.from_json(json)
# print the JSON string representation of the object
print(AbridgedVideoView.to_json())

# convert the object into a dict
abridged_video_view_dict = abridged_video_view_instance.to_dict()
# create an instance of AbridgedVideoView from a dict
abridged_video_view_from_dict = AbridgedVideoView.from_dict(abridged_video_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


