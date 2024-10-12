# ProductAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_name** | **str** | Defines product’s attribute name separated with a comma in Magento | [optional] 
**attribute_set_name** | **str** | Defines product’s attribute set name in Magento | [optional] [default to 'Default']
**avail_from** | **str** | Allows to schedule a time in the future that the item becomes available. The value should be greater than the current date and time. | [optional] 
**available_for_sale** | **bool** | Specifies the set of visible/invisible products for sale | [optional] [default to True]
**available_for_view** | **bool** | Specifies the set of visible/invisible products for users | [optional] [default to True]
**backorder_status** | **str** | Set backorder status | [optional] 
**barcode** | **str** | A barcode is a unique code composed of numbers used as a product identifier. | [optional] 
**best_offer** | **List[str]** | The price at which Best Offers are automatically accepted.&lt;hr&gt;&lt;div style&#x3D;\&quot;font-style:normal\&quot;&gt;Param structure:&lt;div style&#x3D;\&quot;margin-left: 2%;\&quot;&gt;&lt;code style&#x3D;\&quot;padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;\&quot;&gt;best_offer[&lt;b&gt;minimum_offer_price&lt;/b&gt;] &#x3D; decimal&lt;/br&gt;best_offer[&lt;b&gt;auto_accept_price&lt;/b&gt;] &#x3D; decimal&lt;/br&gt;&lt;/code&gt;&lt;/div&gt;&lt;/div&gt; | [optional] 
**brand_name** | **str** | Retrieves brands specified by brand name | [optional] 
**categories_ids** | **str** | Defines product add that is specified by comma-separated categories id | [optional] 
**category_id** | **str** | Defines product add that is specified by category id | [optional] 
**clear_cache** | **bool** | Is cache clear required | [optional] [default to True]
**condition** | **str** | The human-readable label for the condition (e.g., \&quot;New\&quot;). | [optional] 
**cost_price** | **float** | Defines new product&#39;s cost price | [optional] 
**country_of_origin** | **str** | The country where the inventory item was made | [optional] 
**created_at** | **str** | Defines the date of entity creation | [optional] 
**description** | **str** | Defines product&#39;s description that has to be added | 
**downloadable** | **bool** | Defines whether the product is downloadable | [optional] [default to False]
**ean** | **str** | European Article Number. An EAN is a unique 8 or 13-digit identifier that many industries (such as book publishers) use to identify products. | [optional] 
**files** | [**List[ProductAddFilesInner]**](ProductAddFilesInner.md) | File Url | [optional] 
**group_prices** | [**List[ProductAddGroupPricesInner]**](ProductAddGroupPricesInner.md) | Defines product&#39;s group prices | [optional] 
**gtin** | **str** | Global Trade Item Number. An GTIN is an identifier for trade items. | [optional] 
**harmonized_system_code** | **str** | Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes | [optional] 
**height** | **float** | Defines product&#39;s height | [optional] 
**image_name** | **str** | Defines image&#39;s name | [optional] 
**image_url** | **str** | Image Url | [optional] 
**isbn** | **str** | International Standard Book Number. An ISBN is a unique identifier for books. | [optional] 
**lang_id** | **str** | Language id | [optional] 
**length** | **float** | Defines product&#39;s length | [optional] 
**listing_duration** | **str** | Describes the number of days the seller wants the listing to be active. Look at cart.info method response for allowed values. | [optional] 
**listing_type** | **str** | Indicates the selling format of the marketplace listing. | [optional] [default to 'FixedPrice']
**manage_stock** | **bool** | Defines inventory tracking for product | [optional] 
**manufacturer** | **str** | Defines product&#39;s manufacturer | [optional] 
**marketplace_item_properties** | **str** | String containing the JSON representation of the supplied data | [optional] [default to 'false']
**meta_description** | **str** | Defines unique meta description of a entity | [optional] 
**meta_keywords** | **str** | Defines unique meta keywords for each entity | [optional] 
**meta_title** | **str** | Defines unique meta title for each entity | [optional] 
**model** | **str** | Defines product&#39;s model that has to be added | 
**mpn** | **str** | Manufacturer Part Number. A MPN is an identifier of a particular part design or material used. | [optional] 
**name** | **str** | Defines product&#39;s name that has to be added | 
**old_price** | **float** | Defines product&#39;s old price | [optional] 
**ordered_count** | **int** | Defines how many times the product was ordered | [optional] [default to 0]
**package_details** | **List[str]** | If the seller is subscribed to \&quot;Business Policies\&quot;, use the seller_profiles instead of the shipping_details, payment_methods and return_accepted params.&lt;hr&gt;&lt;div style&#x3D;\&quot;font-style:normal\&quot;&gt;Param structure:&lt;div style&#x3D;\&quot;margin-left: 2%;\&quot;&gt;&lt;code style&#x3D;\&quot;padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;\&quot;&gt;package_details[&lt;b&gt;measure_unit&lt;/b&gt;] &#x3D; string&lt;/br&gt; Allowed measure_unit values: [English or Metric] &lt;/br&gt; Default: Metric&lt;/br&gt;package_details[&lt;b&gt;weigh_unit&lt;/b&gt;] &#x3D; string&lt;/br&gt; Allowed weigh_unit values: [kg, g, lbs, oz]&lt;/br&gt;package_details[&lt;b&gt;package_depth&lt;/b&gt;] &#x3D; decimal&lt;/br&gt;package_details[&lt;b&gt;package_length&lt;/b&gt;] &#x3D; decimal&lt;/br&gt;package_details[&lt;b&gt;package_width&lt;/b&gt;] &#x3D; decimal&lt;/br&gt;package_details[&lt;b&gt;weight_major&lt;/b&gt;] &#x3D; decimal&lt;/br&gt;package_details[&lt;b&gt;weight_minor&lt;/b&gt;] &#x3D; decimal&lt;/br&gt;package_details[&lt;b&gt;shipping_package&lt;/b&gt;] &#x3D; string&lt;/br&gt; See cart.info method, param &#x60;eBay_shipping_package_details&#x60;&lt;/code&gt;&lt;/div&gt;&lt;/div&gt; | [optional] 
**payment_methods** | **List[str]** | Identifies the payment method (such as PayPal) that the seller will accept when the buyer pays for the item. Look at cart.info method response for allowed values.&lt;hr&gt;&lt;div style&#x3D;\&quot;font-style:normal\&quot;&gt;Param structure:&lt;div style&#x3D;\&quot;margin-left: 2%;\&quot;&gt;&lt;code style&#x3D;\&quot;padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;\&quot;&gt;payment_methods[0] &#x3D; string&lt;/br&gt;payment_methods[1] &#x3D; string&lt;/br&gt;&lt;/code&gt;&lt;/div&gt;&lt;/div&gt; | [optional] 
**paypal_email** | **str** | Valid PayPal email address for the PayPal account that the seller will use if they offer PayPal as a payment method for the listing. | [optional] 
**price** | **float** | Defines product&#39;s price that has to be added | 
**product_class** | **str** | A categorization for the product | [optional] 
**quantity** | **float** | Defines product&#39;s quantity that has to be added | [optional] [default to 0]
**return_accepted** | **bool** | Indicates whether the seller allows the buyer to return the item. | [optional] 
**sales_tax** | **List[str]** | Percent of an item&#39;s price to be charged as the sales tax for the order. Look at cart.info method response for allowed values.&lt;hr&gt;&lt;div style&#x3D;\&quot;font-style:normal\&quot;&gt;Param structure:&lt;div style&#x3D;\&quot;margin-left: 2%;\&quot;&gt;&lt;code style&#x3D;\&quot;padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;\&quot;&gt;sales_tax[&lt;b&gt;tax_percent&lt;/b&gt;] &#x3D; decimal (##.###)&lt;/br&gt;sales_tax[&lt;b&gt;tax_state&lt;/b&gt;] &#x3D; string&lt;/br&gt;sales_tax[&lt;b&gt;shipping_inc_in_tax&lt;/b&gt;] &#x3D; bool&lt;/br&gt;&lt;/code&gt;&lt;/div&gt;&lt;/div&gt; | [optional] 
**search_keywords** | **str** | Defines unique search keywords | [optional] 
**seller_profiles** | [**ProductAddSellerProfiles**](ProductAddSellerProfiles.md) |  | [optional] 
**seo_url** | **str** | Defines unique URL for SEO | [optional] 
**shipping_details** | [**List[ProductAddShippingDetailsInner]**](ProductAddShippingDetailsInner.md) | The shipping details, including flat and calculated shipping costs and shipping insurance costs. Look at cart.info method response for allowed values.&lt;hr&gt;&lt;div style&#x3D;\&quot;font-style:normal\&quot;&gt;Param structure:&lt;div style&#x3D;\&quot;margin-left: 2%;\&quot;&gt;&lt;code style&#x3D;\&quot;padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;\&quot;&gt;shipping_details[0][&lt;b&gt;shipping_type&lt;/b&gt;] &#x3D; string &lt;/br&gt;shipping_details[0][&lt;b&gt;shipping_service&lt;/b&gt;] &#x3D; string&lt;/br&gt;shipping_details[0][&lt;b&gt;shipping_cost&lt;/b&gt;] &#x3D; decimal&lt;/br&gt;shipping_details[1][&lt;b&gt;shipping_type&lt;/b&gt;] &#x3D; string &lt;/br&gt;shipping_details[1][&lt;b&gt;shipping_service&lt;/b&gt;] &#x3D; string&lt;/br&gt;shipping_details[1][&lt;b&gt;shipping_cost&lt;/b&gt;] &#x3D; decimal&lt;/br&gt;&lt;/code&gt;&lt;/div&gt;&lt;/div&gt; | [optional] 
**shipping_template_id** | **int** | The numeric ID of the shipping template associated with the products in Etsy. | [optional] [default to 0]
**short_description** | **str** | Defines short description | [optional] 
**sku** | **str** | Defines product&#39;s sku that has to be added | [optional] 
**special_price** | **float** | Defines product&#39;s model that has to be added | [optional] 
**specifics** | **List[str]** | An array of Item Specific Name/Value pairs used by the seller to provide descriptive details of an item in a structured manner.         &lt;hr&gt;         &lt;div style&#x3D;\&quot;font-style:normal\&quot;&gt;Param structure:           &lt;div style&#x3D;\&quot;margin-left: 2%;\&quot;&gt;             &lt;code style&#x3D;\&quot;padding:0; background-color:#ffffff;font-size:85%;font-family:monospace;\&quot;&gt;               specifics[int][&lt;b&gt;name&lt;/b&gt;] &#x3D; string&lt;/br&gt;               specifics[int][&lt;b&gt;value&lt;/b&gt;] &#x3D; string&lt;/br&gt;             &lt;/code&gt;           &lt;/div&gt;         &lt;/div&gt; | [optional] 
**sprice_create** | **str** | Defines the date of special price creation | [optional] 
**sprice_expire** | **str** | Defines the term of special price offer duration | [optional] 
**sprice_modified** | **str** | Defines the date of special price modification | [optional] 
**status** | **str** | Defines product&#39;s status | [optional] 
**store_id** | **str** | Store Id | [optional] 
**stores_ids** | **str** | Assign product to the stores that is specified by comma-separated stores&#39; id | [optional] [default to '0']
**tags** | **str** | Product tags | [optional] 
**tax_class_id** | **str** | Defines tax classes where entity has to be added | [optional] 
**taxable** | **bool** | Specifies whether a tax is charged | [optional] [default to True]
**tier_prices** | [**List[ProductAddTierPricesInner]**](ProductAddTierPricesInner.md) | Defines product&#39;s tier prices | [optional] 
**type** | **str** | Defines product&#39;s type | [optional] [default to 'simple']
**upc** | **str** | Universal Product Code. A UPC (UPC-A) is a commonly used identifer for many different products. | [optional] 
**url** | **str** | Defines unique product&#39;s URL | [optional] 
**viewed_count** | **int** | Specifies the number of product&#39;s reviews | [optional] [default to 0]
**visible** | **str** | Set visibility status | [optional] 
**warehouse_id** | **str** | This parameter is used for selecting a warehouse where you need to set/modify a product quantity. | [optional] 
**weight** | **float** | Weight | [optional] [default to 0]
**weight_unit** | **str** | Weight Unit | [optional] 
**wholesale_price** | **float** | Defines product&#39;s sale price | [optional] 
**width** | **float** | Defines product&#39;s width | [optional] 

## Example

```python
from openapi_client.models.product_add import ProductAdd

# TODO update the JSON string below
json = "{}"
# create an instance of ProductAdd from a JSON string
product_add_instance = ProductAdd.from_json(json)
# print the JSON string representation of the object
print(ProductAdd.to_json())

# convert the object into a dict
product_add_dict = product_add_instance.to_dict()
# create an instance of ProductAdd from a dict
product_add_from_dict = ProductAdd.from_dict(product_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


