# CreateAdsByInventoryReferenceRequest

This type defines the fields needed to create ads by inventory reference ID request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group_id** | **str** | &lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt; This field is not currently in use. Ad groups are only applicable to Promoted Listings Advanced (PLA) ad campaigns that use the Cost Per Click (CPC) funding model. See &lt;a href&#x3D;\&quot;/api-docs/sell/static/marketing/pl-overview.html#funding-model\&quot;&gt;Funding Models&lt;/a&gt; in the &lt;i&gt;Promoted Listings Playbook&lt;/i&gt; for more information.&lt;/span&gt; | [optional] 
**bid_percentage** | **str** | The user-defined &lt;b&gt;bid percentage&lt;/b&gt; (also known as the &lt;i&gt;ad rate&lt;/i&gt;) sets the level that eBay increases the visibility in search results for the associated listing. The higher the &lt;b&gt;bidPercentage&lt;/b&gt; value, the more eBay promotes the listing.&lt;br /&gt;&lt;br /&gt;&lt;i&gt;Required if&lt;/i&gt; the campaign&#39;s funding model is Cost Per Sale (CPS).&lt;br /&gt;&lt;br /&gt;The value specified here is also used to calculate the Promoted Listings fee. This percentage value is multiplied by the final sales price to determine the fee.&lt;br /&gt;&lt;br /&gt;The Promoted Listings fee is determined at the time the transaction completes and the seller is assessed the fee only when an item sells through a Promoted Listings ad campaign.&lt;br /&gt;&lt;br /&gt;The &lt;b&gt;bidPercentage&lt;/b&gt; is a single precision value that is guided by the following rules: &lt;ul&gt;&lt;li&gt;These values are &lt;b&gt;valid&lt;/b&gt;:&lt;br&gt;&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;4.1&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;5.0&lt;/code&gt;,&amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;5.5&lt;/code&gt;, ...&lt;/li&gt;  &lt;li&gt;These values are &lt;b&gt;not valid&lt;/b&gt;:&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;0.01&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;10.75&lt;/code&gt;, &amp;nbsp;&amp;nbsp;&amp;nbsp;&lt;code&gt;99.99&lt;/code&gt;,&lt;br /&gt; &amp;nbsp;&amp;nbsp;&amp;nbsp;and so on.&lt;/li&gt;&lt;/ul&gt;This is default bid percentage for the campaigns using the Cost Per Sale (CPS) funding model, and this value will be overridden by any ads in the campaign that have their own set bid percentages.&lt;br /&gt;&lt;br /&gt;If a bid percentage is not provided for an ad, eBay uses the default bid percentage of the associated campaign.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Minimum value:&lt;/b&gt; 2.0 &lt;br&gt;&lt;b&gt;Maximum value:&lt;/b&gt; 100.0 | [optional] 
**inventory_reference_id** | **str** | An ID that identifies a single-item listing or multiple-variation listing that is managed with the &lt;a href&#x3D;\&quot;/api-docs/sell/inventory/resources/methods\&quot; title&#x3D;\&quot;Inventory API Reference\&quot;&gt;Inventory API&lt;/a&gt;. &lt;p&gt;The &lt;i&gt;inventory reference ID&lt;/i&gt; is a seller-defined value that can be either an &lt;b&gt;SKU&lt;/b&gt; for a single-item listing or an &lt;b&gt;inventoryItemGroupKey&lt;/b&gt; for a multiple-value listing.&lt;/p&gt;  &lt;p&gt;An &lt;i&gt;inventoryItemGroupKey&lt;/i&gt; is a value that the seller defines to indicate a listing that&#39;s the parent of an inventory item group (a multiple-variation listing, such as a listing for a shirt that&#39;s available in multiple sizes and colors).&lt;/p&gt;  &lt;p&gt;You must always specify both an &lt;b&gt;inventoryReferenceId&lt;/b&gt; and an &lt;b&gt;inventoryReferenceType&lt;/b&gt; to indicate an item that&#39;s managed with the Inventory API.&lt;/p&gt; | [optional] 
**inventory_reference_type** | **str** | Indicates the type of item the &lt;b&gt;inventoryReferenceId&lt;/b&gt; references. The item can be either an &lt;code&gt;INVENTORY_ITEM&lt;/code&gt; or &lt;code&gt;INVENTORY_ITEM_GROUP&lt;/code&gt;. &lt;p&gt;You must always pair an &lt;b&gt;inventoryReferenceId&lt;/b&gt; with and &lt;b&gt;inventoryReferenceType&lt;/b&gt;.&lt;/p&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:InventoryReferenceTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.create_ads_by_inventory_reference_request import CreateAdsByInventoryReferenceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAdsByInventoryReferenceRequest from a JSON string
create_ads_by_inventory_reference_request_instance = CreateAdsByInventoryReferenceRequest.from_json(json)
# print the JSON string representation of the object
print(CreateAdsByInventoryReferenceRequest.to_json())

# convert the object into a dict
create_ads_by_inventory_reference_request_dict = create_ads_by_inventory_reference_request_instance.to_dict()
# create an instance of CreateAdsByInventoryReferenceRequest from a dict
create_ads_by_inventory_reference_request_from_dict = CreateAdsByInventoryReferenceRequest.from_dict(create_ads_by_inventory_reference_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


