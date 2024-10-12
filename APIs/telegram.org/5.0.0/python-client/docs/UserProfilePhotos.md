# UserProfilePhotos

This object represent a user's profile pictures.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**photos** | **List[List[PhotoSize]]** | Requested profile pictures (in up to 4 sizes each) | 
**total_count** | **int** | Total number of profile pictures the target user has | 

## Example

```python
from openapi_client.models.user_profile_photos import UserProfilePhotos

# TODO update the JSON string below
json = "{}"
# create an instance of UserProfilePhotos from a JSON string
user_profile_photos_instance = UserProfilePhotos.from_json(json)
# print the JSON string representation of the object
print(UserProfilePhotos.to_json())

# convert the object into a dict
user_profile_photos_dict = user_profile_photos_instance.to_dict()
# create an instance of UserProfilePhotos from a dict
user_profile_photos_from_dict = UserProfilePhotos.from_dict(user_profile_photos_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


