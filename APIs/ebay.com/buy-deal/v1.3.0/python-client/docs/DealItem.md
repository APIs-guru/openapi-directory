# DealItem

The detailed data returned for the deal item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_images** | [**List[Image]**](Image.md) | The additional images for the deal item. | [optional] 
**category_ancestor_ids** | **List[str]** | The IDs of the ancestors for the primary category. | [optional] 
**category_id** | **str** | The ID of the leaf category for the deal item. A leaf category is the lowest level in a category and has no children. | [optional] 
**commissionable** | **bool** | A boolean value specifying whether the listing has commission. | [optional] 
**deal_affiliate_web_url** | **str** | The deal associated with the item with affiliate attribution. | [optional] 
**deal_end_date** | **str** | The date after which the deal ends. | [optional] 
**deal_start_date** | **str** | The date on which the deal starts. | [optional] 
**deal_web_url** | **str** | The web URL for the deal associated with the item. | [optional] 
**energy_efficiency_class** | **str** | A string value specifying the Energy Efficiency class. | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**item_affiliate_web_url** | **str** | The item web URL with affiliate attribution. | [optional] 
**item_group_id** | **str** | The unique identifier for the deal item group. This is the parent item ID for the seller-defined variations. Note: This field is returned for multiple-SKU items. | [optional] 
**item_group_type** | **str** | An enumeration value that indicates the type of item group. An item group contains items that have various aspect differences, such as color, size, or storage capacity. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/deal/types/api:ItemGroupTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**item_id** | **str** | The unique identifier for the deal item. Note: This field is only returned for single-SKU items. | [optional] 
**item_web_url** | **str** | The web URL for the deal item. | [optional] 
**legacy_item_id** | **str** | The legacy item ID associated with the deal item. | [optional] 
**marketing_price** | [**MarketingPrice**](MarketingPrice.md) |  | [optional] 
**price** | [**Amount**](Amount.md) |  | [optional] 
**qualified_programs** | **List[str]** | A list of programs applicable to the item. | [optional] 
**shipping_options** | [**List[ShippingOption]**](ShippingOption.md) | The cost required to ship the deal item. | [optional] 
**title** | **str** | The title of the deal item. | [optional] 
**unit_price** | [**Amount**](Amount.md) |  | [optional] 
**unit_pricing_measure** | **str** | The designation used to specify the quantity of the deal item, such as size, weight, volume, and count. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &amp;quot;unitPricingMeasure&amp;quot;: &amp;quot;100g&amp;quot;, &amp;quot;unitPrice&amp;quot;: { &amp;nbsp;&amp;nbsp;&amp;quot;value&amp;quot;: &amp;quot;7.99&amp;quot;, &amp;nbsp;&amp;nbsp;&amp;quot;currency&amp;quot;: &amp;quot;GBP&amp;quot; | [optional] 

## Example

```python
from openapi_client.models.deal_item import DealItem

# TODO update the JSON string below
json = "{}"
# create an instance of DealItem from a JSON string
deal_item_instance = DealItem.from_json(json)
# print the JSON string representation of the object
print(DealItem.to_json())

# convert the object into a dict
deal_item_dict = deal_item_instance.to_dict()
# create an instance of DealItem from a dict
deal_item_from_dict = DealItem.from_dict(deal_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


