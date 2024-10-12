# Product

 Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_image_links** | **List[str]** | Additional URLs of images of the item. | [optional] 
**additional_product_types** | **List[str]** | Additional categories of the item (formatted as in products data specification). | [optional] 
**adult** | **bool** | Should be set to true if the item is targeted towards adults. | [optional] 
**adwords_grouping** | **str** | Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise. | [optional] 
**adwords_labels** | **List[str]** | Similar to adwords_grouping, but only works on CPC. | [optional] 
**adwords_redirect** | **str** | Allows advertisers to override the item URL when the product is shown within the context of Product Ads. | [optional] 
**age_group** | **str** | Target age group of the item. Acceptable values are: - \&quot;&#x60;adult&#x60;\&quot; - \&quot;&#x60;infant&#x60;\&quot; - \&quot;&#x60;kids&#x60;\&quot; - \&quot;&#x60;newborn&#x60;\&quot; - \&quot;&#x60;toddler&#x60;\&quot; - \&quot;&#x60;youngAdult&#x60;\&quot;  | [optional] 
**aspects** | [**List[ProductAspect]**](ProductAspect.md) | Deprecated. Do not use. | [optional] 
**availability** | **str** | Availability status of the item. Acceptable values are: - \&quot;&#x60;in stock&#x60;\&quot; - \&quot;&#x60;out of stock&#x60;\&quot; - \&quot;&#x60;preorder&#x60;\&quot;  | [optional] 
**availability_date** | **str** | The day a pre-ordered product becomes available for delivery, in ISO 8601 format. | [optional] 
**brand** | **str** | Brand of the item. | [optional] 
**canonical_link** | **str** | URL for the canonical version of your item&#39;s landing page. | [optional] 
**channel** | **str** | Required. The item&#39;s channel (online or local). Acceptable values are: - \&quot;&#x60;local&#x60;\&quot; - \&quot;&#x60;online&#x60;\&quot;  | [optional] 
**color** | **str** | Color of the item. | [optional] 
**condition** | **str** | Condition or state of the item. Acceptable values are: - \&quot;&#x60;new&#x60;\&quot; - \&quot;&#x60;refurbished&#x60;\&quot; - \&quot;&#x60;used&#x60;\&quot;  | [optional] 
**content_language** | **str** | Required. The two-letter ISO 639-1 language code for the item. | [optional] 
**cost_of_goods_sold** | [**Price**](Price.md) |  | [optional] 
**custom_attributes** | [**List[CustomAttribute]**](CustomAttribute.md) | A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (e.g., &#x60;{ \&quot;name\&quot;: \&quot;size type\&quot;, \&quot;value\&quot;: \&quot;regular\&quot; }&#x60;). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google (formerly known as Shopping Actions). | [optional] 
**custom_groups** | [**List[CustomGroup]**](CustomGroup.md) | A list of custom (merchant-provided) custom attribute groups. | [optional] 
**custom_label0** | **str** | Custom label 0 for custom grouping of items in a Shopping campaign. | [optional] 
**custom_label1** | **str** | Custom label 1 for custom grouping of items in a Shopping campaign. | [optional] 
**custom_label2** | **str** | Custom label 2 for custom grouping of items in a Shopping campaign. | [optional] 
**custom_label3** | **str** | Custom label 3 for custom grouping of items in a Shopping campaign. | [optional] 
**custom_label4** | **str** | Custom label 4 for custom grouping of items in a Shopping campaign. | [optional] 
**description** | **str** | Description of the item. | [optional] 
**destinations** | [**List[ProductDestination]**](ProductDestination.md) | Specifies the intended destinations for the product. | [optional] 
**display_ads_id** | **str** | An identifier for an item for dynamic remarketing campaigns. | [optional] 
**display_ads_link** | **str** | URL directly to your item&#39;s landing page for dynamic remarketing campaigns. | [optional] 
**display_ads_similar_ids** | **List[str]** | Advertiser-specified recommendations. | [optional] 
**display_ads_title** | **str** | Title of an item for dynamic remarketing campaigns. | [optional] 
**display_ads_value** | **float** | Offer margin for dynamic remarketing campaigns. | [optional] 
**energy_efficiency_class** | **str** | The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - \&quot;&#x60;A&#x60;\&quot; - \&quot;&#x60;A+&#x60;\&quot; - \&quot;&#x60;A++&#x60;\&quot; - \&quot;&#x60;A+++&#x60;\&quot; - \&quot;&#x60;B&#x60;\&quot; - \&quot;&#x60;C&#x60;\&quot; - \&quot;&#x60;D&#x60;\&quot; - \&quot;&#x60;E&#x60;\&quot; - \&quot;&#x60;F&#x60;\&quot; - \&quot;&#x60;G&#x60;\&quot;  | [optional] 
**expiration_date** | **str** | Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in &#x60;productstatuses&#x60; as &#x60;googleExpirationDate&#x60; and might be earlier if &#x60;expirationDate&#x60; is too far in the future. | [optional] 
**gender** | **str** | Target gender of the item. Acceptable values are: - \&quot;&#x60;female&#x60;\&quot; - \&quot;&#x60;male&#x60;\&quot; - \&quot;&#x60;unisex&#x60;\&quot;  | [optional] 
**google_product_category** | **str** | Google&#39;s category of the item (see [Google product taxonomy](https://support.google.com/merchants/answer/1705911)). When querying products, this field will contain the user provided value. There is currently no way to get back the auto assigned google product categories through the API. | [optional] 
**gtin** | **str** | Global Trade Item Number (GTIN) of the item. | [optional] 
**id** | **str** | The REST ID of the product. Content API methods that operate on products take this as their &#x60;productId&#x60; parameter. The REST ID for a product is of the form channel:contentLanguage: targetCountry: offerId. | [optional] 
**identifier_exists** | **bool** | False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada. | [optional] 
**image_link** | **str** | URL of an image of the item. | [optional] 
**installment** | [**Installment**](Installment.md) |  | [optional] 
**is_bundle** | **bool** | Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price. | [optional] 
**item_group_id** | **str** | Shared identifier for all variants of the same product. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#product&#x60;\&quot; | [optional] 
**link** | **str** | URL directly linking to your item&#39;s page on your website. | [optional] 
**loyalty_points** | [**LoyaltyPoints**](LoyaltyPoints.md) |  | [optional] 
**material** | **str** | The material of which the item is made. | [optional] 
**max_energy_efficiency_class** | **str** | The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - \&quot;&#x60;A&#x60;\&quot; - \&quot;&#x60;A+&#x60;\&quot; - \&quot;&#x60;A++&#x60;\&quot; - \&quot;&#x60;A+++&#x60;\&quot; - \&quot;&#x60;B&#x60;\&quot; - \&quot;&#x60;C&#x60;\&quot; - \&quot;&#x60;D&#x60;\&quot; - \&quot;&#x60;E&#x60;\&quot; - \&quot;&#x60;F&#x60;\&quot; - \&quot;&#x60;G&#x60;\&quot;  | [optional] 
**max_handling_time** | **str** | Maximal product handling time (in business days). | [optional] 
**min_energy_efficiency_class** | **str** | The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - \&quot;&#x60;A&#x60;\&quot; - \&quot;&#x60;A+&#x60;\&quot; - \&quot;&#x60;A++&#x60;\&quot; - \&quot;&#x60;A+++&#x60;\&quot; - \&quot;&#x60;B&#x60;\&quot; - \&quot;&#x60;C&#x60;\&quot; - \&quot;&#x60;D&#x60;\&quot; - \&quot;&#x60;E&#x60;\&quot; - \&quot;&#x60;F&#x60;\&quot; - \&quot;&#x60;G&#x60;\&quot;  | [optional] 
**min_handling_time** | **str** | Minimal product handling time (in business days). | [optional] 
**mobile_link** | **str** | URL for the mobile-optimized version of your item&#39;s landing page. | [optional] 
**mpn** | **str** | Manufacturer Part Number (MPN) of the item. | [optional] 
**multipack** | **str** | The number of identical products in a merchant-defined multipack. | [optional] 
**offer_id** | **str** | Required. A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed specification for details. *Note:* Content API methods that operate on products take the REST ID of the product, *not* this identifier. | [optional] 
**online_only** | **bool** | Deprecated. | [optional] 
**pattern** | **str** | The item&#39;s pattern (e.g. polka dots). | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 
**product_type** | **str** | Your category of the item (formatted as in products data specification). | [optional] 
**promotion_ids** | **List[str]** | The unique ID of a promotion. | [optional] 
**sale_price** | [**Price**](Price.md) |  | [optional] 
**sale_price_effective_date** | **str** | Date range during which the item is on sale (see products data specification ). | [optional] 
**sell_on_google_quantity** | **str** | The quantity of the product that is available for selling on Google. Supported only for online products. | [optional] 
**shipping** | [**List[ProductShipping]**](ProductShipping.md) | Shipping rules. | [optional] 
**shipping_height** | [**ProductShippingDimension**](ProductShippingDimension.md) |  | [optional] 
**shipping_label** | **str** | The shipping label of the product, used to group product in account-level shipping rules. | [optional] 
**shipping_length** | [**ProductShippingDimension**](ProductShippingDimension.md) |  | [optional] 
**shipping_weight** | [**ProductShippingWeight**](ProductShippingWeight.md) |  | [optional] 
**shipping_width** | [**ProductShippingDimension**](ProductShippingDimension.md) |  | [optional] 
**size_system** | **str** | System in which the size is specified. Recommended for apparel items. Acceptable values are: - \&quot;&#x60;AU&#x60;\&quot; - \&quot;&#x60;BR&#x60;\&quot; - \&quot;&#x60;CN&#x60;\&quot; - \&quot;&#x60;DE&#x60;\&quot; - \&quot;&#x60;EU&#x60;\&quot; - \&quot;&#x60;FR&#x60;\&quot; - \&quot;&#x60;IT&#x60;\&quot; - \&quot;&#x60;JP&#x60;\&quot; - \&quot;&#x60;MEX&#x60;\&quot; - \&quot;&#x60;UK&#x60;\&quot; - \&quot;&#x60;US&#x60;\&quot;  | [optional] 
**size_type** | **str** | The cut of the item. Recommended for apparel items. Acceptable values are: - \&quot;&#x60;big and tall&#x60;\&quot; - \&quot;&#x60;maternity&#x60;\&quot; - \&quot;&#x60;oversize&#x60;\&quot; - \&quot;&#x60;petite&#x60;\&quot; - \&quot;&#x60;plus&#x60;\&quot; - \&quot;&#x60;regular&#x60;\&quot;  | [optional] 
**sizes** | **List[str]** | Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same &#x60;itemGroupId&#x60; value (see size definition). | [optional] 
**source** | **str** | The source of the offer, i.e., how the offer was created. Acceptable values are: - \&quot;&#x60;api&#x60;\&quot; - \&quot;&#x60;crawl&#x60;\&quot; - \&quot;&#x60;feed&#x60;\&quot;  | [optional] 
**target_country** | **str** | Required. The CLDR territory code for the item. | [optional] 
**taxes** | [**List[ProductTax]**](ProductTax.md) | Tax information. | [optional] 
**title** | **str** | Title of the item. | [optional] 
**unit_pricing_base_measure** | [**ProductUnitPricingBaseMeasure**](ProductUnitPricingBaseMeasure.md) |  | [optional] 
**unit_pricing_measure** | [**ProductUnitPricingMeasure**](ProductUnitPricingMeasure.md) |  | [optional] 
**validated_destinations** | **List[str]** | Deprecated. The read-only list of intended destinations which passed validation. | [optional] 
**warnings** | [**List[Error]**](Error.md) | Read-only warnings. | [optional] 

## Example

```python
from openapi_client.models.product import Product

# TODO update the JSON string below
json = "{}"
# create an instance of Product from a JSON string
product_instance = Product.from_json(json)
# print the JSON string representation of the object
print(Product.to_json())

# convert the object into a dict
product_dict = product_instance.to_dict()
# create an instance of Product from a dict
product_from_dict = Product.from_dict(product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


