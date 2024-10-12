# Product

 Required product attributes are primarily defined by the product data specification. See the Product Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_image_links** | **List[str]** | Additional URLs of images of the item. | [optional] 
**additional_size_type** | **str** | Additional cut of the item. Used together with size_type to represent combined size types for apparel items. | [optional] 
**ads_grouping** | **str** | Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise. | [optional] 
**ads_labels** | **List[str]** | Similar to ads_grouping, but only works on CPC. | [optional] 
**ads_redirect** | **str** | Allows advertisers to override the item URL when the product is shown within the context of Product Ads. | [optional] 
**adult** | **bool** | Should be set to true if the item is targeted towards adults. | [optional] 
**age_group** | **str** | Target age group of the item. | [optional] 
**availability** | **str** | Availability status of the item. | [optional] 
**availability_date** | **str** | The day a pre-ordered product becomes available for delivery, in ISO 8601 format. | [optional] 
**brand** | **str** | Brand of the item. | [optional] 
**canonical_link** | **str** | URL for the canonical version of your item&#39;s landing page. | [optional] 
**certifications** | [**List[ProductCertification]**](ProductCertification.md) | Product [certification](https://support.google.com/merchants/answer/13528839), introduced for EU energy efficiency labeling compliance using the [EU EPREL](https://eprel.ec.europa.eu/screen/home) database. | [optional] 
**channel** | **str** | Required. The item&#39;s channel (online or local). Acceptable values are: - \&quot;&#x60;local&#x60;\&quot; - \&quot;&#x60;online&#x60;\&quot;  | [optional] 
**cloud_export_additional_properties** | [**List[CloudExportAdditionalProperties]**](CloudExportAdditionalProperties.md) | Extra fields to export to the Cloud Retail program. | [optional] 
**color** | **str** | Color of the item. | [optional] 
**condition** | **str** | Condition or state of the item. | [optional] 
**content_language** | **str** | Required. The two-letter ISO 639-1 language code for the item. | [optional] 
**cost_of_goods_sold** | [**Price**](Price.md) |  | [optional] 
**custom_attributes** | [**List[CustomAttribute]**](CustomAttribute.md) | A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (for example, &#x60;{ \&quot;name\&quot;: \&quot;size type\&quot;, \&quot;value\&quot;: \&quot;regular\&quot; }&#x60;). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google (formerly known as Shopping Actions). | [optional] 
**custom_label0** | **str** | Custom label 0 for custom grouping of items in a Shopping campaign. | [optional] 
**custom_label1** | **str** | Custom label 1 for custom grouping of items in a Shopping campaign. | [optional] 
**custom_label2** | **str** | Custom label 2 for custom grouping of items in a Shopping campaign. | [optional] 
**custom_label3** | **str** | Custom label 3 for custom grouping of items in a Shopping campaign. | [optional] 
**custom_label4** | **str** | Custom label 4 for custom grouping of items in a Shopping campaign. | [optional] 
**description** | **str** | Description of the item. | [optional] 
**disclosure_date** | **str** | The date time when an offer becomes visible in search results across Google’s YouTube surfaces, in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format. See [Disclosure date](https://support.google.com/merchants/answer/13034208) for more information. | [optional] 
**display_ads_id** | **str** | An identifier for an item for dynamic remarketing campaigns. | [optional] 
**display_ads_link** | **str** | URL directly to your item&#39;s landing page for dynamic remarketing campaigns. | [optional] 
**display_ads_similar_ids** | **List[str]** | Advertiser-specified recommendations. | [optional] 
**display_ads_title** | **str** | Title of an item for dynamic remarketing campaigns. | [optional] 
**display_ads_value** | **float** | Offer margin for dynamic remarketing campaigns. | [optional] 
**energy_efficiency_class** | **str** | The energy efficiency class as defined in EU directive 2010/30/EU. | [optional] 
**excluded_destinations** | **List[str]** | The list of destinations to exclude for this target (corresponds to cleared check boxes in Merchant Center). Products that are excluded from all destinations for more than 7 days are automatically deleted. | [optional] 
**expiration_date** | **str** | Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in &#x60;productstatuses&#x60; as &#x60;googleExpirationDate&#x60; and might be earlier if &#x60;expirationDate&#x60; is too far in the future. | [optional] 
**external_seller_id** | **str** | Required for multi-seller accounts. Use this attribute if you&#39;re a marketplace uploading products for various sellers to your multi-seller account. | [optional] 
**feed_label** | **str** | Feed label for the item. Either &#x60;targetCountry&#x60; or &#x60;feedLabel&#x60; is required. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-). | [optional] 
**gender** | **str** | Target gender of the item. | [optional] 
**google_product_category** | **str** | Google&#39;s category of the item (see [Google product taxonomy](https://support.google.com/merchants/answer/1705911)). When querying products, this field will contain the user provided value. There is currently no way to get back the auto assigned google product categories through the API. | [optional] 
**gtin** | **str** | Global Trade Item Number (GTIN) of the item. | [optional] 
**id** | **str** | The REST ID of the product. Content API methods that operate on products take this as their &#x60;productId&#x60; parameter. The REST ID for a product has one of the 2 forms channel:contentLanguage: targetCountry: offerId or channel:contentLanguage:feedLabel: offerId. | [optional] 
**identifier_exists** | **bool** | False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada. | [optional] 
**image_link** | **str** | URL of an image of the item. | [optional] 
**included_destinations** | **List[str]** | The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in &#x60;excludedDestinations&#x60;. | [optional] 
**installment** | [**Installment**](Installment.md) |  | [optional] 
**is_bundle** | **bool** | Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price. | [optional] 
**item_group_id** | **str** | Shared identifier for all variants of the same product. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#product&#x60;\&quot; | [optional] 
**lifestyle_image_links** | **List[str]** | Additional URLs of lifestyle images of the item. Used to explicitly identify images that showcase your item in a real-world context. See the Help Center article for more information. | [optional] 
**link** | **str** | URL directly linking to your item&#39;s page on your website. | [optional] 
**link_template** | **str** | URL template for merchant hosted local storefront. | [optional] 
**loyalty_points** | [**LoyaltyPoints**](LoyaltyPoints.md) |  | [optional] 
**material** | **str** | The material of which the item is made. | [optional] 
**max_energy_efficiency_class** | **str** | The energy efficiency class as defined in EU directive 2010/30/EU. | [optional] 
**max_handling_time** | **str** | Maximal product handling time (in business days). | [optional] 
**min_energy_efficiency_class** | **str** | The energy efficiency class as defined in EU directive 2010/30/EU. | [optional] 
**min_handling_time** | **str** | Minimal product handling time (in business days). | [optional] 
**mobile_link** | **str** | URL for the mobile-optimized version of your item&#39;s landing page. | [optional] 
**mobile_link_template** | **str** | URL template for merchant hosted local storefront optimized for mobile devices. | [optional] 
**mpn** | **str** | Manufacturer Part Number (MPN) of the item. | [optional] 
**multipack** | **str** | The number of identical products in a merchant-defined multipack. | [optional] 
**offer_id** | **str** | Required. A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed specification for details. *Note:* Content API methods that operate on products take the REST ID of the product, *not* this identifier. | [optional] 
**pattern** | **str** | The item&#39;s pattern (for example, polka dots). | [optional] 
**pause** | **str** | Publication of this item should be temporarily paused. Acceptable values are: - \&quot;&#x60;ads&#x60;\&quot;  | [optional] 
**pickup_method** | **str** | The pick up option for the item. Acceptable values are: - \&quot;&#x60;buy&#x60;\&quot; - \&quot;&#x60;reserve&#x60;\&quot; - \&quot;&#x60;ship to store&#x60;\&quot; - \&quot;&#x60;not supported&#x60;\&quot;  | [optional] 
**pickup_sla** | **str** | Item store pickup timeline. Acceptable values are: - \&quot;&#x60;same day&#x60;\&quot; - \&quot;&#x60;next day&#x60;\&quot; - \&quot;&#x60;2-day&#x60;\&quot; - \&quot;&#x60;3-day&#x60;\&quot; - \&quot;&#x60;4-day&#x60;\&quot; - \&quot;&#x60;5-day&#x60;\&quot; - \&quot;&#x60;6-day&#x60;\&quot; - \&quot;&#x60;7-day&#x60;\&quot; - \&quot;&#x60;multi-week&#x60;\&quot;  | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 
**product_details** | [**List[ProductProductDetail]**](ProductProductDetail.md) | Technical specification or additional product details. | [optional] 
**product_height** | [**ProductDimension**](ProductDimension.md) |  | [optional] 
**product_highlights** | **List[str]** | Bullet points describing the most relevant highlights of a product. | [optional] 
**product_length** | [**ProductDimension**](ProductDimension.md) |  | [optional] 
**product_types** | **List[str]** | Categories of the item (formatted as in product data specification). | [optional] 
**product_weight** | [**ProductWeight**](ProductWeight.md) |  | [optional] 
**product_width** | [**ProductDimension**](ProductDimension.md) |  | [optional] 
**promotion_ids** | **List[str]** | The unique ID of a promotion. | [optional] 
**sale_price** | [**Price**](Price.md) |  | [optional] 
**sale_price_effective_date** | **str** | Date range during which the item is on sale (see product data specification ). | [optional] 
**sell_on_google_quantity** | **str** | The quantity of the product that is available for selling on Google. Supported only for online products. | [optional] 
**shipping** | [**List[ProductShipping]**](ProductShipping.md) | Shipping rules. | [optional] 
**shipping_height** | [**ProductShippingDimension**](ProductShippingDimension.md) |  | [optional] 
**shipping_label** | **str** | The shipping label of the product, used to group product in account-level shipping rules. | [optional] 
**shipping_length** | [**ProductShippingDimension**](ProductShippingDimension.md) |  | [optional] 
**shipping_weight** | [**ProductShippingWeight**](ProductShippingWeight.md) |  | [optional] 
**shipping_width** | [**ProductShippingDimension**](ProductShippingDimension.md) |  | [optional] 
**shopping_ads_excluded_countries** | **List[str]** | List of country codes (ISO 3166-1 alpha-2) to exclude the offer from Shopping Ads destination. Countries from this list are removed from countries configured in MC feed settings. | [optional] 
**size_system** | **str** | System in which the size is specified. Recommended for apparel items. | [optional] 
**size_type** | **str** | The cut of the item. Recommended for apparel items. | [optional] 
**sizes** | **List[str]** | Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same &#x60;itemGroupId&#x60; value (see size definition). | [optional] 
**source** | **str** | The source of the offer, that is, how the offer was created. Acceptable values are: - \&quot;&#x60;api&#x60;\&quot; - \&quot;&#x60;crawl&#x60;\&quot; - \&quot;&#x60;feed&#x60;\&quot;  | [optional] 
**subscription_cost** | [**ProductSubscriptionCost**](ProductSubscriptionCost.md) |  | [optional] 
**target_country** | **str** | Required. The CLDR territory code for the item&#39;s country of sale. | [optional] 
**tax_category** | **str** | The tax category of the product, used to configure detailed tax nexus in account-level tax settings. | [optional] 
**taxes** | [**List[ProductTax]**](ProductTax.md) | Tax information. | [optional] 
**title** | **str** | Title of the item. | [optional] 
**transit_time_label** | **str** | The transit time label of the product, used to group product in account-level transit time tables. | [optional] 
**unit_pricing_base_measure** | [**ProductUnitPricingBaseMeasure**](ProductUnitPricingBaseMeasure.md) |  | [optional] 
**unit_pricing_measure** | [**ProductUnitPricingMeasure**](ProductUnitPricingMeasure.md) |  | [optional] 
**virtual_model_link** | **str** | URL of the 3D model of the item to provide more visuals. | [optional] 

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


