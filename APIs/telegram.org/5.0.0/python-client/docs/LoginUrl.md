# LoginUrl

This object represents a parameter of the inline keyboard button used to automatically authorize a user. Serves as a great replacement for the [Telegram Login Widget](https://core.telegram.org/widgets/login) when the user is coming from Telegram. All the user needs to do is tap/click a button and confirm that they want to log in:  Telegram apps support these buttons as of [version 5.7](https://telegram.org/blog/privacy-discussions-web-bots#meet-seamless-web-bots).  Sample bot: [@discussbot](https://t.me/discussbot)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bot_username** | **str** | *Optional*. Username of a bot, which will be used for user authorization. See [Setting up a bot](https://core.telegram.org/widgets/login#setting-up-a-bot) for more details. If not specified, the current bot&#39;s username will be assumed. The *url*&#39;s domain must be the same as the domain linked with the bot. See [Linking your domain to the bot](https://core.telegram.org/widgets/login#linking-your-domain-to-the-bot) for more details. | [optional] 
**forward_text** | **str** | *Optional*. New text of the button in forwarded messages. | [optional] 
**request_write_access** | **bool** | *Optional*. Pass True to request the permission for your bot to send messages to the user. | [optional] 
**url** | **str** | An HTTP URL to be opened with user authorization data added to the query string when the button is pressed. If the user refuses to provide authorization data, the original URL without information about the user will be opened. The data added is the same as described in [Receiving authorization data](https://core.telegram.org/widgets/login#receiving-authorization-data).    **NOTE:** You **must** always check the hash of the received data to verify the authentication and the integrity of the data as described in [Checking authorization](https://core.telegram.org/widgets/login#checking-authorization). | 

## Example

```python
from openapi_client.models.login_url import LoginUrl

# TODO update the JSON string below
json = "{}"
# create an instance of LoginUrl from a JSON string
login_url_instance = LoginUrl.from_json(json)
# print the JSON string representation of the object
print(LoginUrl.to_json())

# convert the object into a dict
login_url_dict = login_url_instance.to_dict()
# create an instance of LoginUrl from a dict
login_url_from_dict = LoginUrl.from_dict(login_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


