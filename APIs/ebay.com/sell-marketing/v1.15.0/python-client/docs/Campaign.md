# Campaign

This type defines the fields that describe an ad campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts** | [**List[Alert]**](Alert.md) | This array contains alert messages for the campaign. | [optional] 
**budget** | [**CampaignBudget**](CampaignBudget.md) |  | [optional] 
**campaign_criterion** | [**CampaignCriterion**](CampaignCriterion.md) |  | [optional] 
**campaign_id** | **str** | A unique eBay-assigned ID for a campaign. This ID is generated when a campaign is created. | [optional] 
**campaign_name** | **str** | A seller-defined name for the campaign. This value must be unique for the seller. &lt;p&gt;You can use any alphanumeric characters in the name, except the less than (&amp;lt;) or greater than (&amp;gt;) characters.&lt;/p&gt;&lt;b&gt;Max length: &lt;/b&gt;80 characters | [optional] 
**campaign_status** | **str** | Indicates the status of the campaign, such as &lt;code&gt;RUNNING&lt;/code&gt;, &lt;code&gt;PAUSED&lt;/code&gt;, and &lt;code&gt;ENDED&lt;/code&gt;. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:CampaignStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**end_date** | **str** | The date and time the campaign ends, in UTC format (&lt;code&gt;yyyy-MM-ddThh:mm:ssZ&lt;/code&gt;). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/endCampaign\&quot;&gt;endCampaign&lt;/a&gt; call, or if they update the campaign at a later time with an end date. | [optional] 
**funding_strategy** | [**FundingStrategy**](FundingStrategy.md) |  | [optional] 
**marketplace_id** | **str** | The ID of the eBay marketplace where the campaign is hosted. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/ba:MarketplaceIdEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**start_date** | **str** | The date and time the campaign starts, in UTC format (&lt;code&gt;yyyy-MM-ddThh:mm:ssZ&lt;/code&gt;). For display purposes, convert this time into the local time of the seller.  &lt;p&gt;On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaign\&quot;&gt;getCampaign&lt;/a&gt; to check the status of the campaign.&lt;/p&gt; | [optional] 

## Example

```python
from openapi_client.models.campaign import Campaign

# TODO update the JSON string below
json = "{}"
# create an instance of Campaign from a JSON string
campaign_instance = Campaign.from_json(json)
# print the JSON string representation of the object
print(Campaign.to_json())

# convert the object into a dict
campaign_dict = campaign_instance.to_dict()
# create an instance of Campaign from a dict
campaign_from_dict = Campaign.from_dict(campaign_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


