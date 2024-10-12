# GetUserProfilePhotosPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | [default to True]
**result** | [**UserProfilePhotos**](UserProfilePhotos.md) |  | 

## Example

```python
from openapi_client.models.get_user_profile_photos_post200_response import GetUserProfilePhotosPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetUserProfilePhotosPost200Response from a JSON string
get_user_profile_photos_post200_response_instance = GetUserProfilePhotosPost200Response.from_json(json)
# print the JSON string representation of the object
print(GetUserProfilePhotosPost200Response.to_json())

# convert the object into a dict
get_user_profile_photos_post200_response_dict = get_user_profile_photos_post200_response_instance.to_dict()
# create an instance of GetUserProfilePhotosPost200Response from a dict
get_user_profile_photos_post200_response_from_dict = GetUserProfilePhotosPost200Response.from_dict(get_user_profile_photos_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


