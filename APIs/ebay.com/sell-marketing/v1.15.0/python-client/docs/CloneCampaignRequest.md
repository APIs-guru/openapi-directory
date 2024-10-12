# CloneCampaignRequest

This type defines the fields needed for a clone-campaign request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_name** | **str** | A seller-defined name for the newly-cloned campaign. This value must be unique for the seller. &lt;p&gt;You can use any alphanumeric characters in the name, except the less than (&amp;lt;) or greater than (&amp;gt;) characters.&lt;/p&gt;&lt;b&gt;Max length: &lt;/b&gt;80 characters | [optional] 
**end_date** | **str** | The date and time the campaign ends, in UTC format (&lt;code&gt;yyyy-MM-ddThh:mm:ssZ&lt;/code&gt;). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/endCampaign\&quot;&gt;endCampaign&lt;/a&gt; call, or if they update the campaign at a later time with an end date. | [optional] 
**funding_strategy** | [**FundingStrategy**](FundingStrategy.md) |  | [optional] 
**start_date** | **str** | The date and time the cloned campaign starts, in UTC format (&lt;code&gt;yyyy-MM-ddThh:mm:ssZ&lt;/code&gt;). For display purposes, convert this time into the local time of the seller.  &lt;p&gt;On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign. Call &lt;b&gt;getCampaign&lt;/b&gt; to check the status of the campaign.&lt;/p&gt; | [optional] 

## Example

```python
from openapi_client.models.clone_campaign_request import CloneCampaignRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CloneCampaignRequest from a JSON string
clone_campaign_request_instance = CloneCampaignRequest.from_json(json)
# print the JSON string representation of the object
print(CloneCampaignRequest.to_json())

# convert the object into a dict
clone_campaign_request_dict = clone_campaign_request_instance.to_dict()
# create an instance of CloneCampaignRequest from a dict
clone_campaign_request_from_dict = CloneCampaignRequest.from_dict(clone_campaign_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


