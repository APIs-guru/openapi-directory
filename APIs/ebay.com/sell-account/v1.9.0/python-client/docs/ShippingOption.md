# ShippingOption

This type is used by the <b>shippingOptions</b> array, which is used to provide detailed information on the domestic and international shipping options available for the policy. A separate <b>ShippingOption</b> object covers domestic shipping service options and international shipping service options (if the seller ships to international locations).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_type** | **str** | This field defines whether the shipping cost model is &lt;code&gt;FLAT_RATE&lt;/code&gt; (the same rate for all buyers, or buyers within a region if shipping rate tables are used) or &lt;code&gt;CALCULATED&lt;/code&gt; (the shipping rate varies by the ship-to location and size and weight of the package). &lt;br/&gt;&lt;br/&gt;This field is conditionally required if any shipping service options are specified (domestic and/or international). For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:ShippingCostTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**insurance_fee** | [**Amount**](Amount.md) |  | [optional] 
**insurance_offered** | **bool** | This field has been deprecated. &lt;br/&gt;&lt;br/&gt;Shipping insurance is offered only via a shipping carrier&#39;s shipping services and is no longer available via eBay shipping policies. | [optional] 
**option_type** | **str** | This field is used to indicate if the corresponding shipping service options (under &lt;b&gt;shippingServices&lt;/b&gt; array) are domestic or international shipping service options. This field is conditionally required if any shipping service options are specified (domestic and/or international). For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/account/types/api:ShippingOptionTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**package_handling_cost** | [**Amount**](Amount.md) |  | [optional] 
**rate_table_id** | **str** | This field is used if the seller wants to associate a domestic or international shipping rate table to the fulfillment business policy. The &lt;a href&#x3D;\&quot;/api-docs/sell/account/resources/rate_table/methods/getRateTables\&quot;&gt;getRateTables&lt;/a&gt; method can be used to retrieve shipping rate table IDs.&lt;br/&gt;&lt;br/&gt;With domestic and international shipping rate tables, the seller can set different shipping costs based on shipping regions and shipping speed/level of service (one-day, expedited, standard, economy). There are also options to additional per-weight and handling charges.&lt;br/&gt;&lt;br/&gt;Sellers need to be careful that shipping rate tables match the corresponding shipping service options. In other words, a domestic shipping rate table must not be specified in the same container where international shipping service options are being specified, and vice versa, and the shipping speed/level of service of the provided shipping service options should match the shipping speed/level of service options that are defined in the shipping rate tables. &lt;br /&gt;&lt;br /&gt;For example, if the corresponding shipping rate table defines costs for one-day shipping services, there should be at least one one-day shipping service option specified under the &lt;b&gt;shippingServices&lt;/b&gt; array.&lt;br/&gt;&lt;br/&gt;This field is returned if set. | [optional] 
**shipping_discount_profile_id** | **str** | This field is the unique identifier of a seller&#39;s domestic or international shipping discount profile. If a buyer satisfies the requirements of the discount rule, this buyer will receive a shipping discount for the order. &lt;br /&gt;&lt;br /&gt;The seller can create and manage shipping discount profiles using (Get/Set) &lt;b&gt;ShippingDiscountProfiles&lt;/b&gt; calls in the &lt;b&gt;Trading API&lt;/b&gt; or through the &lt;b&gt;Shipping Preferences&lt;/b&gt; in &lt;b&gt;My eBay&lt;/b&gt;. &lt;br/&gt;&lt;br/&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note: &lt;/b&gt;Initially, shipping discount profiles in the &lt;b&gt;Account API&lt;/b&gt; will &lt;i&gt;not&lt;/i&gt; be available to all sellers.&lt;/span&gt; | [optional] 
**shipping_promotion_offered** | **bool** | This boolean indicates whether or not the seller has set up a promotional shipping discount that will be available to buyers who satisfy the requirements of the shipping discount rule. &lt;br/&gt;&lt;br/&gt;The seller can create and manage shipping promotional discounts using (Get/Set) &lt;b&gt;ShippingDiscountProfiles&lt;/b&gt; calls in the &lt;b&gt;Trading API&lt;/b&gt; or through the &lt;b&gt;Shipping Preferences&lt;/b&gt; in &lt;b&gt;My eBay&lt;/b&gt;. &lt;br/&gt;&lt;br/&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note: &lt;/b&gt;Initially, shipping discount profiles in the &lt;b&gt;Account API&lt;/b&gt; will &lt;i&gt;not&lt;/i&gt; be available to all sellers.&lt;/span&gt; | [optional] 
**shipping_services** | [**List[ShippingService]**](ShippingService.md) | This array consists of the domestic or international shipping services options that are defined for the policy. The shipping service options defined under this array should match what is set in the corresponding &lt;b&gt;shippingOptions.optionType&lt;/b&gt; field (which controls whether domestic or international shipping service options are being defined). If a shipping rate table is being used, the specified shipping service options should also match the shipping rate table settings (domestic or international, shipping speed/level of service, etc.) &lt;br/&gt;&lt;br/&gt;Sellers can specify up to four domestic shipping services and up to five international shipping service options by using separate &lt;b&gt;shippingService&lt;/b&gt; containers for each. If the seller is using the Global Shipping Program as an international option, only a total of four international shipping service options (including GSP) can be offered. &lt;br/&gt;&lt;br/&gt; See &lt;a href&#x3D;\&quot;/api-docs/sell/static/seller-accounts/ht_shipping-setting-shipping-carrier-and-service-values.html\&quot; target&#x3D;\&quot;_blank\&quot;&gt;How to set up shipping carrier and shipping service values&lt;/a&gt;. &lt;br /&gt;&lt;br /&gt;To use the eBay standard envelope service (eSE), see &lt;a href&#x3D;\&quot;/api-docs/sell/static/seller-accounts/using-the-ebay-standard-envelope-service.html\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Using eBay standard envelope (eSE) service&lt;/a&gt;.&lt;br /&gt;&lt;br /&gt;This array is conditionally required if the seller is offering one or more domestic and/or international shipping service options. | [optional] 

## Example

```python
from openapi_client.models.shipping_option import ShippingOption

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingOption from a JSON string
shipping_option_instance = ShippingOption.from_json(json)
# print the JSON string representation of the object
print(ShippingOption.to_json())

# convert the object into a dict
shipping_option_dict = shipping_option_instance.to_dict()
# create an instance of ShippingOption from a dict
shipping_option_from_dict = ShippingOption.from_dict(shipping_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


