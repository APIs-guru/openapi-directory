# GetUserProfilePhotosPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100. | [optional] [default to 100]
**offset** | **int** | Sequential number of the first photo to be returned. By default, all photos are returned. | [optional] 
**user_id** | **int** | Unique identifier of the target user | 

## Example

```python
from openapi_client.models.get_user_profile_photos_post_request import GetUserProfilePhotosPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserProfilePhotosPostRequest from a JSON string
get_user_profile_photos_post_request_instance = GetUserProfilePhotosPostRequest.from_json(json)
# print the JSON string representation of the object
print(GetUserProfilePhotosPostRequest.to_json())

# convert the object into a dict
get_user_profile_photos_post_request_dict = get_user_profile_photos_post_request_instance.to_dict()
# create an instance of GetUserProfilePhotosPostRequest from a dict
get_user_profile_photos_post_request_from_dict = GetUserProfilePhotosPostRequest.from_dict(get_user_profile_photos_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


