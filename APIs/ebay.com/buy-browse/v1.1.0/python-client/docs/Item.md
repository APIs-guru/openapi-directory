# Item

The details of an item that can be purchased.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_images** | [**List[Image]**](Image.md) | An array of containers with the URLs for the images that are in addition to the primary image. The primary image is returned in the image.imageUrl field. | [optional] 
**adult_only** | **bool** | This indicates if the item is for adults only. For more information about adult-only items on eBay, see Adult items policy for sellers and Adult-Only items on eBay for buyers. | [optional] 
**age_group** | **str** | (Primary Item Aspect) The age group for which the product is recommended. For example, newborn, infant, toddler, kids, adult, etc. All the item aspects, including this aspect, are returned in the localizedAspects container. | [optional] 
**available_coupons** | [**List[AvailableCoupon]**](AvailableCoupon.md) | A list of available coupons for the item. | [optional] 
**bid_count** | **int** | This integer value indicates the total number of bids that have been placed against an auction item. This field is returned only for auction items. | [optional] 
**brand** | **str** | (Primary Item Aspect) The name brand of the item, such as Nike, Apple, etc. All the item aspects, including this aspect, are returned in the localizedAspects container. | [optional] 
**buying_options** | **List[str]** | A comma separated list of all the purchase options available for the item. The values returned are: FIXED_PRICE - Indicates the buyer can purchase the item for a set price using the Buy It Now button. AUCTION - Indicates the buyer can place a bid for the item. After the first bid is placed, this becomes a live auction item and is the only buying option for this item. BEST_OFFER - Indicates the buyer can send the seller a price they&#39;re willing to pay for the item. The seller can accept, reject, or send a counter offer. For more information on how this works, see Making a Best Offer. Code so that your app gracefully handles any future changes to this list. | [optional] 
**category_id** | **str** | The ID of the leaf category for this item. A leaf category is the lowest level in that category and has no children. | [optional] 
**category_path** | **str** | Text that shows the category hierarchy of the item. For example: Computers/Tablets &amp;amp; Networking, Laptops &amp;amp; Netbooks, PC Laptops &amp;amp; Netbooks | [optional] 
**color** | **str** | (Primary Item Aspect) Text describing the color of the item. All the item aspects, including this aspect, are returned in the localizedAspects container. | [optional] 
**condition** | **str** | A short text description for the condition of the item, such as New or Used. For a list of condition names, see Item Condition IDs and Names. Code so that your app gracefully handles any future changes to this list. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of &#39;Certified Refurbished&#39;, but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to &#39;Manufacturer Refurbished&#39;. | [optional] 
**condition_description** | **str** | A full text description for the condition of the item. This field elaborates on the value specified in the condition field and provides full details for the condition of the item. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of &#39;Certified Refurbished&#39;, but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to &#39;Manufacturer Refurbished&#39;. | [optional] 
**condition_id** | **str** | The identifier of the condition of the item. For example, 1000 is the identifier for NEW. For a list of condition names and IDs, see Item Condition IDs and Names. Code so that your app gracefully handles any future changes to this list. Note: In the US and Australian marketplaces, Condition ID 2000 now maps to an item condition of &#39;Certified Refurbished&#39;, but this item condition is only available for use for a select number of US and Australian sellers. For all other marketplaces besides the US and Australia, Condition ID 2000 still maps to &#39;Manufacturer Refurbished&#39;. | [optional] 
**current_bid_price** | [**ConvertedAmount**](ConvertedAmount.md) |  | [optional] 
**description** | **str** | The full description of the item that was created by the seller. This can be plain text or rich content and can be very large. | [optional] 
**eligible_for_inline_checkout** | **bool** | This field indicates if the item can be purchased using the Buy Order API. If the value of this field is true, this indicates that the item can be purchased using the Order API. If the value of this field is false, this indicates that the item cannot be purchased using the Order API and must be purchased on the eBay site. | [optional] 
**enabled_for_guest_checkout** | **bool** | This indicates if the item can be purchased using Guest Checkout in the Order API. You can use this flag to exclude items from your inventory that are not eligible for Guest Checkout, such as gift cards. | [optional] 
**energy_efficiency_class** | **str** | This indicates the European energy efficiency rating (EEK) of the item. This field is returned only if the seller specified the energy efficiency rating. The rating is a set of energy efficiency classes from A to G, where &#39;A&#39; is the most energy efficient and &#39;G&#39; is the least efficient. This rating helps buyers choose between various models. When the manufacturer&#39;s specifications for this item are available, the link to this information is returned in the productFicheWebUrl field. | [optional] 
**epid** | **str** | An EPID is the eBay product identifier of a product from the eBay product catalog. This indicates the product in which the item belongs. | [optional] 
**estimated_availabilities** | [**List[EstimatedAvailability]**](EstimatedAvailability.md) | The estimated number of this item that are available for purchase. Because the quantity of an item can change several times within a second, it is impossible to return the exact quantity. So instead of returning quantity, the estimated availability of the item is returned. | [optional] 
**gender** | **str** | (Primary Item Aspect) The gender for the item. This is used for items that could vary by gender, such as clothing. For example: male, female, or unisex. All the item aspects, including this aspect, are returned in the localizedAspects container. | [optional] 
**gtin** | **str** | The unique Global Trade Item number of the item as defined by https://www.gtin.info. This can be a UPC (Universal Product Code), EAN (European Article Number), or an ISBN (International Standard Book Number) value. | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**inferred_epid** | **str** | The ePID (eBay Product ID of a product from the eBay product catalog) for the item, which has been programmatically determined by eBay using the item&#39;s title, aspects, and other data. If the seller provided an ePID for the item, the seller&#39;s value is returned in the epid field. Note: This field is returned only for authorized Partners. | [optional] 
**item_affiliate_web_url** | **str** | The URL of the View Item page of the item, which includes the affiliate tracking ID. This field is only returned if the eBay partner enables affiliate tracking for the item by including the X-EBAY-C-ENDUSERCTX request header in the method. Note: eBay Partner Network, in order to be commissioned for your sales, you must use this URL to forward your buyer to the ebay.com site. | [optional] 
**item_end_date** | **str** | The date and time up to which the items can be purchased. This value is returned in UTC format (yyyy-MM-ddThh:mm:ss.sssZ), which you can convert into the local time of the buyer. Note: This field is not returned for Good &#39;Til Cancelled (GTC) listings. | [optional] 
**item_id** | **str** | The unique RESTful identifier of the item. | [optional] 
**item_location** | [**Address**](Address.md) |  | [optional] 
**item_web_url** | **str** | The URL of the View Item page of the item. This enables you to include a &amp;quot;Report Item on eBay&amp;quot; link that takes the buyer to the View Item page on eBay. From there they can report any issues regarding this item to eBay. | [optional] 
**legacy_item_id** | **str** | The unique identifier of the eBay listing that contains the item. This is the traditional/legacy ID that is often seen in the URL of the listing View Item page. | [optional] 
**localized_aspects** | [**List[TypedNameValue]**](TypedNameValue.md) | An array of containers that show the complete list of the aspect name/value pairs that describe the variation of the item. | [optional] 
**lot_size** | **int** | The number of items in a lot. In other words, a lot size is the number of items that are being sold together. A lot is a set of two or more items included in a single listing that must be purchased together in a single order line item. All the items in the lot are the same but there can be multiple items in a single lot, such as the package of batteries shown in the example below. Item Lot Definition Lot Size A package of 24 AA batteries A box of 10 packages 10 A P235/75-15 Goodyear tire 4 tires 4 Fashion Jewelry Rings Package of 100 assorted rings 100 Note: Lots are not supported in all categories. | [optional] 
**marketing_price** | [**MarketingPrice**](MarketingPrice.md) |  | [optional] 
**material** | **str** | (Primary Item Aspect) Text describing what the item is made of. For example, silk. All the item aspects, including this aspect, are returned in the localizedAspects container. | [optional] 
**minimum_price_to_bid** | [**ConvertedAmount**](ConvertedAmount.md) |  | [optional] 
**mpn** | **str** | The manufacturer&#39;s part number, which is a unique number that identifies a specific product. To identify the product, this is always used along with brand. | [optional] 
**pattern** | **str** | (Primary Item Aspect) Text describing the pattern used on the item. For example, paisley. All the item aspects, including this aspect, are returned in the localizedAspects container. | [optional] 
**payment_methods** | [**List[PaymentMethod]**](PaymentMethod.md) | The payment methods for the item, including the payment method types, brands, and instructions for the buyer. | [optional] 
**price** | [**ConvertedAmount**](ConvertedAmount.md) |  | [optional] 
**price_display_condition** | **str** | Indicates when in the buying flow the item&#39;s price can appear for minimum advertised price (MAP) items, which is the lowest price a retailer can advertise/show for this item. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/gct:PriceDisplayConditionEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**primary_item_group** | [**ItemGroupSummary**](ItemGroupSummary.md) |  | [optional] 
**primary_product_review_rating** | [**ReviewRating**](ReviewRating.md) |  | [optional] 
**product** | [**Product**](Product.md) |  | [optional] 
**product_fiche_web_url** | **str** | The URL of a page containing the manufacturer&#39;s specification of this item, which helps buyers make a purchasing decision. This information is available only for items that include the European energy efficiency rating (EEK) but is not available for all items with an EEK rating and is returned only if this information is available. The EEK rating of the item is returned in the energyEfficiencyClass field. | [optional] 
**qualified_programs** | **List[str]** | An array of the qualified programs available for the item, such as EBAY_PLUS. eBay Plus is a premium account option for buyers, which provides benefits such as fast free domestic shipping and free returns on selected items. Top-Rated eBay sellers must opt in to eBay Plus to be able to offer the program on qualifying listings. Sellers must commit to next-day delivery of those items. Note: eBay Plus is available only to buyers in Germany, Austria, and Australia marketplaces. | [optional] 
**quantity_limit_per_buyer** | **int** | The maximum number for a specific item that one buyer can purchase. | [optional] 
**reserve_price_met** | **bool** | This indicates if the reserve price of the item has been met. A reserve price is set by the seller and is the minimum amount the seller is willing to sell the item for. If the highest bid is not equal to or higher than the reserve price when the auction ends, the listing ends and the item is not sold. Note: This is returned only for auctions that have a reserve price. | [optional] 
**return_terms** | [**ItemReturnTerms**](ItemReturnTerms.md) |  | [optional] 
**seller** | [**SellerDetail**](SellerDetail.md) |  | [optional] 
**seller_item_revision** | **str** | An identifier generated/incremented when a seller revises the item. There are two types of item revisions: Seller changes, such as changing the title eBay system changes, such as changing the quantity when an item is purchased This ID is changed only when the seller makes a change to the item. This means you cannot use this value to determine if the quantity has changed. | [optional] 
**ship_to_locations** | [**ShipToLocations**](ShipToLocations.md) |  | [optional] 
**shipping_options** | [**List[ShippingOption]**](ShippingOption.md) | An array of shipping options containers that have the details about cost, carrier, etc. of one shipping option. | [optional] 
**short_description** | **str** | This text string is derived from the item condition and the item aspects (such as size, color, capacity, model, brand, etc.). | [optional] 
**size** | **str** | (Primary Item Aspect) The size of the item. For example, &#39;7&#39; for a size 7 shoe. All the item aspects, including this aspect, are returned in the localizedAspects container. | [optional] 
**size_system** | **str** | (Primary Item Aspect) The sizing system of the country. All the item aspects, including this aspect, are returned in the localizedAspects container. Valid Values: AU (Australia), BR (Brazil), CN (China), DE (Germany), EU (European Union), FR (France), IT (Italy), JP (Japan), MX (Mexico), US (USA), UK (United Kingdom) Code so that your app gracefully handles any future changes to this list. | [optional] 
**size_type** | **str** | (Primary Item Aspect) Text describing a size group in which the item would be included, such as regular, petite, plus, big-and-tall or maternity. All the item aspects, including this aspect, are returned in the localizedAspects container. | [optional] 
**subtitle** | **str** | A subtitle is optional and allows the seller to provide more information about the product, possibly including keywords that may assist with search results. | [optional] 
**taxes** | [**List[Taxes]**](Taxes.md) | The container for the tax information for the item. | [optional] 
**title** | **str** | The seller-created title of the item. Maximum Length: 80 characters | [optional] 
**top_rated_buying_experience** | **bool** | This indicates if the item a top-rated plus item. There are three benefits of a top-rated plus item; a minimum 30-day money-back return policy, shipping the items in 1 business day with tracking provided, and the added comfort of knowing this item is from experienced sellers with the highest buyer ratings. See the Top Rated Plus Items and Becoming a Top Rated Seller and qualifying for Top Rated Plus help topics for more information. | [optional] 
**unique_bidder_count** | **int** | This integer value indicates the number of different eBay users who have placed one or more bids on an auction item. This field is only applicable to auction items. | [optional] 
**unit_price** | [**ConvertedAmount**](ConvertedAmount.md) |  | [optional] 
**unit_pricing_measure** | **str** | The designation, such as size, weight, volume, count, etc., that was used to specify the quantity of the item. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &amp;quot;unitPricingMeasure&amp;quot;: &amp;quot;100g&amp;quot;, &amp;quot;unitPrice&amp;quot;: { &amp;nbsp;&amp;nbsp;&amp;quot;value&amp;quot;: &amp;quot;7.99&amp;quot;, &amp;nbsp;&amp;nbsp;&amp;quot;currency&amp;quot;: &amp;quot;GBP&amp;quot; | [optional] 
**warnings** | [**List[Error]**](Error.md) | An array of warning messages. These types of errors do not prevent the method from executing but should be checked. | [optional] 

## Example

```python
from openapi_client.models.item import Item

# TODO update the JSON string below
json = "{}"
# create an instance of Item from a JSON string
item_instance = Item.from_json(json)
# print the JSON string representation of the object
print(Item.to_json())

# convert the object into a dict
item_dict = item_instance.to_dict()
# create an instance of Item from a dict
item_from_dict = Item.from_dict(item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


