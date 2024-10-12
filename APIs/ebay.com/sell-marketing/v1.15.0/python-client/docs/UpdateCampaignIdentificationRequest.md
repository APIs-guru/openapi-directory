# UpdateCampaignIdentificationRequest

This type specifies the updated name, and start and end dates for an update-campaign request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_name** | **str** | The new seller-defined name for the campaign. This value must be unique for the seller. &lt;p&gt;If you don&#39;t want to change the name of the campaign, specify the current campaign name in this field.&lt;p&gt;You can use any alphanumeric characters in the name, except the less than (&amp;lt;) or greater than (&amp;gt;) characters.&lt;/p&gt;&lt;b&gt;Max length: &lt;/b&gt;80 characters. | [optional] 
**end_date** | **str** | The date and time the campaign ends, in UTC format (&lt;code&gt;yyyy-MM-ddThh:mm:ssZ&lt;/code&gt;). If this field is omitted, the campaign will have no defined end date, and will not end until the seller makes a decision to end the campaign with an &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/endCampaign\&quot;&gt;endCampaign&lt;/a&gt; call, or if they update the campaign at a later time with an end date.&lt;p&gt;If you want to change only the end date of the campaign, you must specify the current campaign name, set the &lt;b&gt;endDate&lt;/b&gt; as desired, and set the &lt;b&gt;startDate&lt;/b&gt; to the actual start date of the campaign. This applies if the campaign status is &lt;code&gt;RUNNING&lt;/code&gt; or &lt;code&gt;PAUSED&lt;/code&gt;. You can retrieve the &lt;b&gt;startDate&lt;/b&gt; using the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate\&quot;&gt;getCampaign&lt;/a&gt; method.&lt;/p&gt; &lt;p&gt;Note that if you do not set a new end date in this call, any current endDate value will be set to null. To preserve the currently-set end date, you must specify the value again in your request.&lt;/p&gt; | [optional] 
**start_date** | **str** | The new start date for the campaign, in UTC format (&lt;code&gt;yyyy-MM-ddThh:mm:ssZ&lt;/code&gt;).&lt;p&gt;If the campaign status is &lt;code&gt;RUNNING&lt;/code&gt; or &lt;code&gt;PAUSED&lt;/code&gt;, the &lt;b&gt;startDate&lt;/b&gt; must be specified and must be the actual start date of the campaign, even if you are only changing the &lt;b&gt;endDate&lt;/b&gt;. You can retrieve the campaign&#39;s &lt;b&gt;startDate&lt;/b&gt; using the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaign#response.startDate\&quot;&gt;getCampaign&lt;/a&gt; method.&lt;/p&gt;&lt;p&gt;On the date specified, the service derives the keywords for each listing in the campaign, creates an ad for each listing, and associates each new ad with the campaign. The campaign starts after this process is completed. The amount of time it takes the service to start the campaign depends on the number of listings in the campaign.&lt;/p&gt;  &lt;p&gt;Call &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/campaign/methods/getCampaigns\&quot;&gt;getCampaigns&lt;/a&gt; to retrieve the &lt;b&gt;campaign_id&lt;/b&gt; and the campaign status (&lt;code&gt;RUNNING&lt;/code&gt;, &lt;code&gt;PAUSED&lt;/code&gt;, &lt;code&gt;ENDED&lt;/code&gt;, and so on) for all the seller&#39;s campaigns.&lt;/p&gt; | [optional] 

## Example

```python
from openapi_client.models.update_campaign_identification_request import UpdateCampaignIdentificationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCampaignIdentificationRequest from a JSON string
update_campaign_identification_request_instance = UpdateCampaignIdentificationRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCampaignIdentificationRequest.to_json())

# convert the object into a dict
update_campaign_identification_request_dict = update_campaign_identification_request_instance.to_dict()
# create an instance of UpdateCampaignIdentificationRequest from a dict
update_campaign_identification_request_from_dict = UpdateCampaignIdentificationRequest.from_dict(update_campaign_identification_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


