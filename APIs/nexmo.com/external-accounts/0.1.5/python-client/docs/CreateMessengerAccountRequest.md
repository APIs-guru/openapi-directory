# CreateMessengerAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | This is the Facebook Business Page token. You can obtain the token using one of the following methods:  * Linking your Facebook Business Page to your account [with our Dashboard tool](https://dashboard.nexmo.com/messages/social-channels/facebook-connect) * Requesting a Page Access Token using the steps in the [Facebook token reference](https://developers.facebook.com/docs/pages/access-tokens/)  | 
**applications** | **List[str]** | Contains a list of application IDs which are linked to the account. &lt;ul&gt; &lt;li&gt;There is just one application allowed per an account.&lt;/li&gt; &lt;li&gt;The application type must be type \&quot;messages\&quot;.&lt;/li&gt; &lt;/ul&gt; For more information see [Application API spec](https://developer.nexmo.com/api/application.v2) | [optional] 
**external_id** | **str** | This is the unique identifier within the provider&#39;s domain. In this case it is the Page ID for your Facebook Page. Go to your Facebook Page, click \&quot;Settings\&quot;, click \&quot;Messenger platform \&quot; scroll down to \&quot;Messenger link\&quot; to find your Page ID. | 
**name** | **str** | Custom account name | [optional] 

## Example

```python
from openapi_client.models.create_messenger_account_request import CreateMessengerAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateMessengerAccountRequest from a JSON string
create_messenger_account_request_instance = CreateMessengerAccountRequest.from_json(json)
# print the JSON string representation of the object
print(CreateMessengerAccountRequest.to_json())

# convert the object into a dict
create_messenger_account_request_dict = create_messenger_account_request_instance.to_dict()
# create an instance of CreateMessengerAccountRequest from a dict
create_messenger_account_request_from_dict = CreateMessengerAccountRequest.from_dict(create_messenger_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


