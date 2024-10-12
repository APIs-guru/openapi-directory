# ItemSummary

The type that defines the fields for the details of a specific item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_images** | [**List[Image]**](Image.md) | An array of containers with the URLs for the images that are in addition to the primary image. The primary image is returned in the image.imageUrl field. | [optional] 
**adult_only** | **bool** | This indicates if the item is for adults only. For more information about adult-only items on eBay, see Adult items policy for sellers and Adult-Only items on eBay for buyers. | [optional] 
**available_coupons** | **bool** | This boolean attribute indicates if coupons are available for the item. | [optional] 
**bid_count** | **int** | This integer value indicates the total number of bids that have been placed for an auction item. This field is only returned for auction items. | [optional] 
**buying_options** | **List[str]** | A comma separated list of all the purchase options available for the item. Values Returned: FIXED_PRICE - Indicates the buyer can purchase the item for a set price using the Buy It Now button. AUCTION - Indicates the buyer can place a bid for the item. After the first bid is placed, this becomes a live auction item and is the only buying option for this item. BEST_OFFER - Items where the buyer can send the seller a price they&#39;re willing to pay for the item. The seller can accept, reject, or send a counter offer. For details about Best Offer, see Best Offer. Code so that your app gracefully handles any future changes to this list. | [optional] 
**categories** | [**List[Category]**](Category.md) | This container returns the primary category ID of the item (as well as the secondary category if the item was listed in two categories). | [optional] 
**compatibility_match** | **str** | This indicates how well the item matches the compatibility_filter product attributes. Valid Values: EXACT or POSSIBLE Code so that your app gracefully handles any future changes to this list. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/gct:CompatibilityMatchEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**compatibility_properties** | [**List[CompatibilityProperty]**](CompatibilityProperty.md) | This container returns only the product attributes that are compatible with the item. These attributes were specified in the compatibility_filter in the request. This means that if you passed in 5 attributes and only 4 are compatible, only those 4 are returned. If none of the attributes are compatible, this container is not returned. | [optional] 
**condition** | **str** | The text describing the condition of the item, such as New or Used. For a list of condition names, see Item Condition IDs and Names. Code so that your app gracefully handles any future changes to this list. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of &#39;Certified Refurbished&#39;, but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to &#39;Manufacturer Refurbished&#39;. | [optional] 
**condition_id** | **str** | The identifier of the condition of the item. For example, 1000 is the identifier for NEW. For a list of condition names and IDs, see Item Condition IDs and Names. Code so that your app gracefully handles any future changes to this list. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of &#39;Certified Refurbished&#39;, but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to &#39;Manufacturer Refurbished&#39;. | [optional] 
**current_bid_price** | [**ConvertedAmount**](ConvertedAmount.md) |  | [optional] 
**distance_from_pickup_location** | [**TargetLocation**](TargetLocation.md) |  | [optional] 
**energy_efficiency_class** | **str** | This indicates the European energy efficiency rating (EEK) of the item. Energy efficiency ratings apply to products listed by commercial vendors in electronics categories only. Currently, this field is only applicable for the Germany site, and is only returned if the seller specified the energy efficiency rating through item specifics at listing time. Rating values include A+++, A++, A+, A, B, C, D, E, F, and G. | [optional] 
**epid** | **str** | An ePID is the eBay product identifier of a product from the eBay product catalog. This indicates the product in which the item belongs. | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**item_affiliate_web_url** | **str** | The URL to the View Item page of the item, which includes the affiliate tracking ID. This field is only returned if the seller enables affiliate tracking for the item by including the X-EBAY-C-ENDUSERCTX request header in the method. Note: eBay Partner Network, in order to receive a commission for your sales, you must use this URL to forward your buyer to the ebay.com site. | [optional] 
**item_group_href** | **str** | The HATEOAS reference of the parent page of the item group. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. Note: This field is returned only for item groups. | [optional] 
**item_group_type** | **str** | The indicates the item group type. An item group is an item that has various aspect differences, such as color, size, storage capacity, etc. Currently only the SELLER_DEFINED_VARIATIONS is supported and indicates this is an item group created by the seller. Note: This field is returned only for item groups. Code so that your app gracefully handles any future changes to this list. | [optional] 
**item_href** | **str** | The URI for the Browse API getItem method, which can be used to retrieve more details about items in the search results. | [optional] 
**item_id** | **str** | The unique RESTful identifier of the item. | [optional] 
**item_location** | [**ItemLocationImpl**](ItemLocationImpl.md) |  | [optional] 
**item_web_url** | **str** | The URL to the View Item page of the item. This enables you to include a &amp;quot;Report Item on eBay&amp;quot; hyperlink that takes the buyer to the View Item page on eBay. From there they can report any issues regarding this item to eBay. | [optional] 
**legacy_item_id** | **str** | The unique identifier of the eBay listing that contains the item. This is the traditional/legacy ID that is often seen in the URL of the listing View Item page. | [optional] 
**marketing_price** | [**MarketingPrice**](MarketingPrice.md) |  | [optional] 
**pickup_options** | [**List[PickupOptionSummary]**](PickupOptionSummary.md) | This container returns the local pickup options available to the buyer. This container is only returned if the user is searching for local pickup items and set the local pickup filters in the method request. | [optional] 
**price** | [**ConvertedAmount**](ConvertedAmount.md) |  | [optional] 
**price_display_condition** | **str** | Indicates when in the buying flow the item&#39;s price can appear for minimum advertised price (MAP) items, which is the lowest price a retailer can advertise/show for this item. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/gct:PriceDisplayConditionEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**qualified_programs** | **List[str]** | An array of the qualified programs available for the item, such as EBAY_PLUS. eBay Plus is a premium account option for buyers, which provides benefits such as fast free domestic shipping and free returns on selected items. Top-Rated eBay sellers must opt in to eBay Plus to be able to offer the program on qualifying listings. Sellers must commit to next-day delivery of those items. Note: eBay Plus is available only to buyers in Germany, Austria, and Australia marketplaces. | [optional] 
**seller** | [**Seller**](Seller.md) |  | [optional] 
**shipping_options** | [**List[ShippingOptionSummary]**](ShippingOptionSummary.md) | This container returns the shipping options available to ship the item. | [optional] 
**short_description** | **str** | This text string is derived from the item condition and the item aspects (such as size, color, capacity, model, brand, etc.). Sometimes the title doesn&#39;t give enough information but the description is too big. Surfacing the shortDescription can often provide buyers with the additional information that could help them make a buying decision. For example: &amp;quot; title&amp;quot;: &amp;quot;Petrel U42W FPV Drone RC Quadcopter w/HD Camera Live Video One Key Off / Landing&amp;quot;, &amp;quot;shortDescription&amp;quot;: &amp;quot;1 U42W Quadcopter. Syma X5SW-V3 Wifi FPV RC Drone Quadcopter 2.4Ghz 6-Axis Gyro with Headless Mode. Syma X20 Pocket Drone 2.4Ghz Mini RC Quadcopter Headless Mode Altitude Hold. One Key Take Off / Landing function: allow beginner to easy to fly the drone without any skill.&amp;quot;, Restriction: This field is returned by the search method only when fieldgroups &#x3D; EXTENDED. | [optional] 
**thumbnail_images** | [**List[Image]**](Image.md) | An array of thumbnail images for the item. | [optional] 
**title** | **str** | The seller-created title of the item. Maximum Length: 80 characters | [optional] 
**unit_price** | [**ConvertedAmount**](ConvertedAmount.md) |  | [optional] 
**unit_pricing_measure** | **str** | The designation, such as size, weight, volume, count, etc., that was used to specify the quantity of the item. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &amp;quot;unitPricingMeasure&amp;quot;: &amp;quot;100g&amp;quot;, &amp;quot;unitPrice&amp;quot;: { &amp;nbsp;&amp;nbsp;&amp;quot;value&amp;quot;: &amp;quot;7.99&amp;quot;, &amp;nbsp;&amp;nbsp;&amp;quot;currency&amp;quot;: &amp;quot;GBP&amp;quot; | [optional] 

## Example

```python
from openapi_client.models.item_summary import ItemSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ItemSummary from a JSON string
item_summary_instance = ItemSummary.from_json(json)
# print the JSON string representation of the object
print(ItemSummary.to_json())

# convert the object into a dict
item_summary_dict = item_summary_instance.to_dict()
# create an instance of ItemSummary from a dict
item_summary_from_dict = ItemSummary.from_dict(item_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


