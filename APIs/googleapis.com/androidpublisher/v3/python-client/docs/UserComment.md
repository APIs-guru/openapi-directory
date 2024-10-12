# UserComment

User entry from conversation between user and developer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_os_version** | **int** | Integer Android SDK version of the user&#39;s device at the time the review was written, e.g. 23 is Marshmallow. May be absent. | [optional] 
**app_version_code** | **int** | Integer version code of the app as installed at the time the review was written. May be absent. | [optional] 
**app_version_name** | **str** | String version name of the app as installed at the time the review was written. May be absent. | [optional] 
**device** | **str** | Codename for the reviewer&#39;s device, e.g. klte, flounder. May be absent. | [optional] 
**device_metadata** | [**DeviceMetadata**](DeviceMetadata.md) |  | [optional] 
**last_modified** | [**Timestamp**](Timestamp.md) |  | [optional] 
**original_text** | **str** | Untranslated text of the review, where the review was translated. If the review was not translated this is left blank. | [optional] 
**reviewer_language** | **str** | Language code for the reviewer. This is taken from the device settings so is not guaranteed to match the language the review is written in. May be absent. | [optional] 
**star_rating** | **int** | The star rating associated with the review, from 1 to 5. | [optional] 
**text** | **str** | The content of the comment, i.e. review body. In some cases users have been able to write a review with separate title and body; in those cases the title and body are concatenated and separated by a tab character. | [optional] 
**thumbs_down_count** | **int** | Number of users who have given this review a thumbs down. | [optional] 
**thumbs_up_count** | **int** | Number of users who have given this review a thumbs up. | [optional] 

## Example

```python
from openapi_client.models.user_comment import UserComment

# TODO update the JSON string below
json = "{}"
# create an instance of UserComment from a JSON string
user_comment_instance = UserComment.from_json(json)
# print the JSON string representation of the object
print(UserComment.to_json())

# convert the object into a dict
user_comment_dict = user_comment_instance.to_dict()
# create an instance of UserComment from a dict
user_comment_from_dict = UserComment.from_dict(user_comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


