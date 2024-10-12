# User


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about_me** | **str** | A short bio a user has written about themselves to help other members get to know them better. May be null if the user has not written anything about themselves.  | [optional] 
**country** | **str** | A 2 letter country code for the country that has been automatically detected for the user (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ). May be null if no country has been set.  | [optional] 
**feedback** | [**UserFeedback**](UserFeedback.md) |  | [optional] 
**firstname** | **str** | The first name of the user (may be null). | [optional] 
**lastname** | **str** | The last name of the user (may be null). | [optional] 
**member_since** | **str** | The date and time when the user first became publicly active on a group (the date may be older than when the user signed up). | [optional] 
**profile_image** | **str** | A URL to a profile image for the user.  Profile images sizes vary based on the source (Google, Facebook, Gravatar, etc) and some can be as small as 64px by 64px.  Will be null for api key requests and requests where the oauth user doesn&#39;t belong to any of the same groups as this user.  | [optional] 
**reply_time** | **int** | An estimate of how many seconds it takes this user to reply to messages. May be null when there is not enough data to calculate an estimate.  | [optional] 
**user_id** | **str** |  | [optional] 
**username** | **str** | A username that can be displayed for the user (the username is NOT guaranteed to be unique). Will be null for api key requests and requests where the oauth user doesn&#39;t belong to any of the same groups as this user.  | [optional] 

## Example

```python
from openapi_client.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


