# Ad

A type that defines the fields for an ad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_id** | **str** | A unique eBay-assigned ID for an ad group in a campaign that uses the Cost Per Click (CPC) funding model. This ID is created after a successful &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/resources/adgroup/methods/createAdGroup\&quot;&gt;createAdGroup&lt;/a&gt; call, and all ad groups must be associated with a CPC campaign. | [optional] 
**ad_id** | **str** | A unique eBay-assigned ID that is generated when the ad is created. | [optional] 
**ad_status** | **str** | The current status of the CPC ad.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Valid Values:&lt;/b&gt;&lt;ul&gt;&lt;li&gt;&lt;code&gt;ACTIVE&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;PAUSED&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;ARCHIVED&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.&lt;/span&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**alerts** | [**List[Alert]**](Alert.md) | An array containing alert messages for the ad. | [optional] 
**bid_percentage** | **str** | The user-defined &lt;b&gt;bid percentage&lt;/b&gt; (also known as the &lt;i&gt;ad rate&lt;/i&gt;) sets the level that eBay increases the visibility in search results for the associated listing. The higher the &lt;b&gt;bidPercentage&lt;/b&gt; value, the more eBay promotes the listing.  &lt;br&gt;&lt;br&gt;The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee. &lt;br&gt;&lt;br&gt;The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign. &lt;br&gt;&lt;br&gt;The &lt;b&gt;bidPercentage&lt;/b&gt; is a single precision value that is guided by the following rules: &lt;ul&gt;&lt;li&gt;These values are &lt;b&gt;valid&lt;/b&gt;:&lt;br&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;4.1&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;5.0&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;5.5&lt;/code&gt;, ...&lt;/li&gt;  &lt;li&gt;These values are &lt;b&gt;not valid&lt;/b&gt;:&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;0.01&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;10.75&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;99.99&lt;/code&gt;,&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;and so on.&lt;/li&gt;&lt;/ul&gt;This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.&lt;br /&gt;&lt;br /&gt;If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt;This field will always be returned for campaigns that use the Cost Per Sale (CPS) funding model. It will not be returned for campaigns that use the Cost Per Click (CPC) funding model.&lt;/span&gt;&lt;br /&gt;&lt;b&gt;Minimum value:&lt;/b&gt; 2.0 &lt;br&gt;&lt;b&gt;Maximum value:&lt;/b&gt; 100.0 | [optional] 
**inventory_reference_id** | **str** | An ID that identifies a single-item listing or multiple-variation listing that is managed with the &lt;a href&#x3D;\&quot;/api-docs/sell/inventory/resources/methods\&quot; title&#x3D;\&quot;Inventory API Reference\&quot;&gt;Inventory API&lt;/a&gt;. &lt;p&gt;The &lt;i&gt;inventory reference ID&lt;/i&gt; is a seller-defined value that can be either an &lt;b&gt;SKU&lt;/b&gt; for a single-item listing or an &lt;b&gt;inventoryItemGroupKey&lt;/b&gt; for a multiple-value listing.&lt;/p&gt;  &lt;p&gt;An &lt;i&gt;inventoryItemGroupKey&lt;/i&gt; is a value that the seller defines to indicate a listing that&#39;s the parent of an inventory item group (a multiple-variation listing, such as a listing for a shirt that&#39;s available in multiple sizes and colors).&lt;/p&gt;&lt;p&gt;This field is only returned if the ad is associated with a SKU or an inventory item group value.&lt;/p&gt; | [optional] 
**inventory_reference_type** | **str** | The enumeration value returned here indicates the type of listing the inventoryReferenceId references. The value returned here will be &lt;code&gt;INVENTORY_ITEM&lt;/code&gt; for a single-variation listing, or &lt;code&gt;INVENTORY_ITEM_GROUP&lt;/code&gt; for a multiple-variation listing. &lt;p&gt;This field is only returned if the ad is associated with a SKU or an inventory item group value.&lt;/p&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**listing_id** | **str** | A unique eBay-assigned ID that is generated when a listing is created. | [optional] 

## Example

```python
from openapi_client.models.ad import Ad

# TODO update the JSON string below
json = "{}"
# create an instance of Ad from a JSON string
ad_instance = Ad.from_json(json)
# print the JSON string representation of the object
print(Ad.to_json())

# convert the object into a dict
ad_dict = ad_instance.to_dict()
# create an instance of Ad from a dict
ad_from_dict = Ad.from_dict(ad_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


