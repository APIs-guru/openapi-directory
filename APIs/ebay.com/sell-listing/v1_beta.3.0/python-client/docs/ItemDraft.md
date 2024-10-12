# ItemDraft

The type that defines the fields for the listing details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_id** | **str** | The ID of the leaf category associated with this item. A leaf category is the lowest level in that category and has no children. Note: If you submit both a category ID and an EPID, eBay determines the best category based on the EPID and uses that. The category ID will be ignored. | [optional] 
**charity** | [**Charity**](Charity.md) |  | [optional] 
**condition** | **str** | The enumeration value passed in here sets the condition of the item, such as NEW or USED_EXCELLENT. See ConditionEnum for the full list of supported values. Supported item conditions can vary by eBay category. To see which item conditions are supported for a category, you can use the getItemConditionPolicies method of the Metadata API. Note: The &#39;Manufacturer Refurbished&#39; item condition is no longer a valid item condition in any eBay marketplace, and to reflect this change, the pre-existing MANUFACTURER_REFURBISHED enumeration value has been replaced by the CERTIFIED_REFURBISHED enumeration value. CR-eligible sellers should make a note to start using CERTIFIED_REFURBISHED from this point forward. To list an item as &#39;Certified Refurbished&#39;, a seller must be pre-qualified by eBay for this feature. Any seller who is not eligible for this feature will be blocked if they try to create a new listing or revise an existing listing with this item condition. Any seller that is interested in eligibility requirements to list with &#39;Certified Refurbished&#39; should see the Certified refurbished program page in Seller Center. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/listing/types/api:ConditionEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**format** | **str** | The format of the listing. Valid Values: FIXED_PRICE and AUCTION For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/listing/types/api:ListingFormatEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**pricing_summary** | [**PricingSummary**](PricingSummary.md) |  | [optional] 
**product** | [**Product**](Product.md) |  | [optional] 

## Example

```python
from openapi_client.models.item_draft import ItemDraft

# TODO update the JSON string below
json = "{}"
# create an instance of ItemDraft from a JSON string
item_draft_instance = ItemDraft.from_json(json)
# print the JSON string representation of the object
print(ItemDraft.to_json())

# convert the object into a dict
item_draft_dict = item_draft_instance.to_dict()
# create an instance of ItemDraft from a dict
item_draft_from_dict = ItemDraft.from_dict(item_draft_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


