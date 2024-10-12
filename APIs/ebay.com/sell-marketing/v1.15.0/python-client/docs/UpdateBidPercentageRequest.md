# UpdateBidPercentageRequest

This type specifies the bid percentage for an ad campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bid_percentage** | **str** | The user-defined &lt;b&gt;bid percentage&lt;/b&gt; (also known as the &lt;i&gt;ad rate&lt;/i&gt;) sets the level that eBay increases the visibility in search results for the associated listing. The higher the &lt;b&gt;bidPercentage&lt;/b&gt; value, the more eBay promotes the listing.  &lt;br&gt;&lt;br&gt;The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. &lt;br&gt;&lt;br&gt;The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. &lt;br&gt;&lt;br&gt;The &lt;b&gt;bidPercentage&lt;/b&gt; is a single precision value that is guided by the following rules: &lt;ul&gt;&lt;li&gt;These values are &lt;b&gt;valid&lt;/b&gt;:&lt;br&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;4.1&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;5.0&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;5.5&lt;/code&gt;, ...&lt;/li&gt;  &lt;li&gt;These values are &lt;b&gt;not valid&lt;/b&gt;:&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;0.01&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;10.75&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;99.99&lt;/code&gt;,&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;and so on.&lt;/li&gt;&lt;/ul&gt;This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.&lt;br /&gt;&lt;br /&gt;If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Minimum value:&lt;/b&gt; 2.0 &lt;br&gt;&lt;b&gt;Maximum value:&lt;/b&gt; 100.0 | [optional] 

## Example

```python
from openapi_client.models.update_bid_percentage_request import UpdateBidPercentageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBidPercentageRequest from a JSON string
update_bid_percentage_request_instance = UpdateBidPercentageRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBidPercentageRequest.to_json())

# convert the object into a dict
update_bid_percentage_request_dict = update_bid_percentage_request_instance.to_dict()
# create an instance of UpdateBidPercentageRequest from a dict
update_bid_percentage_request_from_dict = UpdateBidPercentageRequest.from_dict(update_bid_percentage_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


