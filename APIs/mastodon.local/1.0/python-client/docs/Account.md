# Account

Represents a user of Mastodon and their associated profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acct** | **str** | The Webfinger account URI. Equal to &#x60;username&#x60; for local users, or &#x60;username@domain&#x60; for | [optional] 
**avatar** | **str** | An image icon that is shown next to statuses and in the profile. The format is URL. | [optional] 
**avatar_static** | **str** | A static version of the avatar. Equal to &#x60;avatar&#x60; if its value is a static image; different if &#x60;avatar&#x60; is an animated GIF. The format is URL. | [optional] 
**bot** | **bool** | A presentational flag. Indicates that the account may perform automated actions, may not be monitored, or identifies as a robot. | [optional] 
**created_at** | **datetime** | When the account was created. | [optional] 
**discoverable** | **bool** | Whether the account has opted into discovery features such as the profile directory. | [optional] 
**display_name** | **str** | The profile&#39;s display name. | [optional] 
**emojis** | [**List[Emoji]**](Emoji.md) | Custom emoji entities to be used when rendering the profile. If none, an empty array will be returned. | [optional] 
**fields** | [**List[ModelField]**](ModelField.md) | Additional metadata attached to a profile as name-value pairs. | [optional] 
**followers_count** | **int** | The reported followers of this profile. | [optional] 
**following_count** | **int** | The reported follows of this profile. | [optional] 
**header** | **str** | An image banner that is shown above the profile and in profile cards. The format is URL. | [optional] 
**header_static** | **str** | A static version of the header. Equal to &#x60;header&#x60; if its value is a static image; different if &#x60;header&#x60; is an animated GIF. The format is URL. | [optional] 
**id** | **str** | The account id &#x60;header&#x60;. | [optional] 
**last_status_at** | **datetime** | When the most recent status was posted. | [optional] 
**locked** | **bool** | Whether the account manually approves follow requests. | [optional] 
**moved** | [**Account**](Account.md) |  | [optional] 
**mute_expires_at** | **datetime** | When a timed mute will expire, if applicable. ISO 8601 Datetime. | [optional] 
**note** | **str** | The profile&#39;s bio / description. | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 
**statuses_count** | **int** | How many statuses are attached to this account. | [optional] 
**suspended** | **bool** | An extra entity returned when an account is suspended. | [optional] 
**url** | **str** | The location of the user&#39;s profile page. (HTTPS URL) | [optional] 
**username** | **str** | The username of the account, not including domain. | [optional] 

## Example

```python
from openapi_client.models.account import Account

# TODO update the JSON string below
json = "{}"
# create an instance of Account from a JSON string
account_instance = Account.from_json(json)
# print the JSON string representation of the object
print(Account.to_json())

# convert the object into a dict
account_dict = account_instance.to_dict()
# create an instance of Account from a dict
account_from_dict = Account.from_dict(account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


