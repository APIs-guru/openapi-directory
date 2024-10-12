# Account

Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_management** | **str** | Output only. How the account is managed. Acceptable values are: - \&quot;&#x60;manual&#x60;\&quot; - \&quot;&#x60;automatic&#x60;\&quot;  | [optional] [readonly] 
**ads_links** | [**List[AccountAdsLink]**](AccountAdsLink.md) | Linked Ads accounts that are active or pending approval. To create a new link request, add a new link with status &#x60;active&#x60; to the list. It will remain in a &#x60;pending&#x60; state until approved or rejected either in the Ads interface or through the Google Ads API. To delete an active link, or to cancel a link request, remove it from the list. | [optional] 
**adult_content** | **bool** | Indicates whether the merchant sells adult content. | [optional] 
**automatic_improvements** | [**AccountAutomaticImprovements**](AccountAutomaticImprovements.md) |  | [optional] 
**automatic_label_ids** | **List[str]** | Automatically created label IDs that are assigned to the account by CSS Center. | [optional] 
**business_identity** | [**AccountBusinessIdentity**](AccountBusinessIdentity.md) |  | [optional] 
**business_information** | [**AccountBusinessInformation**](AccountBusinessInformation.md) |  | [optional] 
**conversion_settings** | [**AccountConversionSettings**](AccountConversionSettings.md) |  | [optional] 
**css_id** | **str** | ID of CSS the account belongs to. | [optional] 
**google_my_business_link** | [**AccountGoogleMyBusinessLink**](AccountGoogleMyBusinessLink.md) |  | [optional] 
**id** | **str** | Required. 64-bit Merchant Center account ID. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#account&#x60;\&quot;. | [optional] 
**label_ids** | **List[str]** | Manually created label IDs that are assigned to the account by CSS. | [optional] 
**name** | **str** | Required. Display name for the account. | [optional] 
**seller_id** | **str** | Client-specific, locally-unique, internal ID for the child account. | [optional] 
**users** | [**List[AccountUser]**](AccountUser.md) | Users with access to the account. Every account (except for subaccounts) must have at least one admin user. | [optional] 
**website_url** | **str** | The merchant&#39;s website. | [optional] 
**youtube_channel_links** | [**List[AccountYouTubeChannelLink]**](AccountYouTubeChannelLink.md) | Linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status &#x60;active&#x60; to the list. It will remain in a &#x60;pending&#x60; state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request, remove it from the list. | [optional] 

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


