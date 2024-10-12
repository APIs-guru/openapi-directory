# UserPicture

Output only. The user's profile picture.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | Output Only. A URL that points to a profile picture of this user. | [optional] 

## Example

```python
from openapi_client.models.user_picture import UserPicture

# TODO update the JSON string below
json = "{}"
# create an instance of UserPicture from a JSON string
user_picture_instance = UserPicture.from_json(json)
# print the JSON string representation of the object
print(UserPicture.to_json())

# convert the object into a dict
user_picture_dict = user_picture_instance.to_dict()
# create an instance of UserPicture from a dict
user_picture_from_dict = UserPicture.from_dict(user_picture_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


