# PlaylistImageListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[PlaylistImage]**](PlaylistImage.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#playlistImageListResponse\&quot;. | [optional] [default to 'youtube#playlistImageListResponse']
**next_page_token** | **str** | The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set. | [optional] 
**page_info** | [**PageInfo**](PageInfo.md) |  | [optional] 
**prev_page_token** | **str** | The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set. | [optional] 

## Example

```python
from openapi_client.models.playlist_image_list_response import PlaylistImageListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PlaylistImageListResponse from a JSON string
playlist_image_list_response_instance = PlaylistImageListResponse.from_json(json)
# print the JSON string representation of the object
print(PlaylistImageListResponse.to_json())

# convert the object into a dict
playlist_image_list_response_dict = playlist_image_list_response_instance.to_dict()
# create an instance of PlaylistImageListResponse from a dict
playlist_image_list_response_from_dict = PlaylistImageListResponse.from_dict(playlist_image_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


