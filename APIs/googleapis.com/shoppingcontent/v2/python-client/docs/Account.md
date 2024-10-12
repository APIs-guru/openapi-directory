# Account

Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adult_content** | **bool** | Indicates whether the merchant sells adult content. | [optional] 
**adwords_links** | [**List[AccountAdwordsLink]**](AccountAdwordsLink.md) | List of linked AdWords accounts that are active or pending approval. To create a new link request, add a new link with status &#x60;active&#x60; to the list. It will remain in a &#x60;pending&#x60; state until approved or rejected either in the AdWords interface or through the AdWords API. To delete an active link, or to cancel a link request, remove it from the list. | [optional] 
**business_information** | [**AccountBusinessInformation**](AccountBusinessInformation.md) |  | [optional] 
**google_my_business_link** | [**AccountGoogleMyBusinessLink**](AccountGoogleMyBusinessLink.md) |  | [optional] 
**id** | **str** | Required for update. Merchant Center account ID. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#account&#x60;\&quot; | [optional] 
**name** | **str** | Required. Display name for the account. | [optional] 
**reviews_url** | **str** | [DEPRECATED] This field is never returned and will be ignored if provided. | [optional] 
**seller_id** | **str** | Client-specific, locally-unique, internal ID for the child account. | [optional] 
**users** | [**List[AccountUser]**](AccountUser.md) | Users with access to the account. Every account (except for subaccounts) must have at least one admin user. | [optional] 
**website_url** | **str** | The merchant&#39;s website. | [optional] 
**youtube_channel_links** | [**List[AccountYouTubeChannelLink]**](AccountYouTubeChannelLink.md) | List of linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status &#x60;active&#x60; to the list. It will remain in a &#x60;pending&#x60; state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request, remove it from the list. | [optional] 

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


