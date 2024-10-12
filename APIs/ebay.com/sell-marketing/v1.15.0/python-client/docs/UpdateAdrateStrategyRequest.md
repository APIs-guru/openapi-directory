# UpdateAdrateStrategyRequest

A type that defines the request fields used to update the ad rate strategy for a Promoted Listings ad campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_rate_strategy** | **str** | The ad rate strategy that shall be applied to the campaign. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdRateStrategyEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**bid_percentage** | **str** | The user-defined &lt;b&gt;bid percentage&lt;/b&gt; (also known as the &lt;i&gt;ad rate&lt;/i&gt;) sets the level that eBay increases the visibility in search results for the associated listing. The higher the &lt;b&gt;bidPercentage&lt;/b&gt; value, the more eBay promotes the listing.  &lt;br&gt;&lt;br&gt;The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. &lt;br&gt;&lt;br&gt;The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. &lt;br&gt;&lt;br&gt;The &lt;b&gt;bidPercentage&lt;/b&gt; is a single precision value that is guided by the following rules: &lt;ul&gt;&lt;li&gt;These values are &lt;b&gt;valid&lt;/b&gt;:&lt;br&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;4.1&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;5.0&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;5.5&lt;/code&gt;, ...&lt;/li&gt;  &lt;li&gt;These values are &lt;b&gt;not valid&lt;/b&gt;:&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;0.01&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;10.75&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;99.99&lt;/code&gt;,&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;and so on.&lt;/li&gt;&lt;/ul&gt;This is the default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.&lt;br /&gt;&lt;br /&gt;If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Minimum value:&lt;/b&gt; 2.0 &lt;br&gt;&lt;b&gt;Maximum value:&lt;/b&gt; 100.0 | [optional] 
**dynamic_ad_rate_preferences** | [**List[DynamicAdRatePreference]**](DynamicAdRatePreference.md) | A field that indicates whether a single, user-defined bid percentage (also known as the &lt;i&gt;ad rate&lt;/i&gt;) should be used, or whether eBay should automatically adjust listings to maintain the daily suggested bid percentage.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;span style&#x3D;\&quot;color:#004680\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt;&lt;/span&gt; Dynamic adjustment is only applicable when the &lt;b&gt;adRateStrategy&lt;/b&gt; is set to &lt;code&gt;DYNAMIC&lt;/code&gt;.&lt;/span&gt;&lt;br /&gt;&lt;b&gt;Default:&lt;/b&gt; &lt;code&gt;FIXED&lt;/code&gt; | [optional] 

## Example

```python
from openapi_client.models.update_adrate_strategy_request import UpdateAdrateStrategyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateAdrateStrategyRequest from a JSON string
update_adrate_strategy_request_instance = UpdateAdrateStrategyRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateAdrateStrategyRequest.to_json())

# convert the object into a dict
update_adrate_strategy_request_dict = update_adrate_strategy_request_instance.to_dict()
# create an instance of UpdateAdrateStrategyRequest from a dict
update_adrate_strategy_request_from_dict = UpdateAdrateStrategyRequest.from_dict(update_adrate_strategy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


