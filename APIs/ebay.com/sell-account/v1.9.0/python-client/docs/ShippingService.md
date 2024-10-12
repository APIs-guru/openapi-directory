# ShippingService

This type is used by the <b>shippingServices</b> array, an array that provides details about every domestic and international shipping service option that is defined for the policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_shipping_cost** | [**Amount**](Amount.md) |  | [optional] 
**buyer_responsible_for_pickup** | **bool** | This field should be included and set to &lt;code&gt;true&lt;/code&gt; for a motor vehicle listing if it will be the buyer&#39;s responsibility to pick up the purchased motor vehicle after full payment is made. &lt;br /&gt;&lt;br /&gt;This field is only applicable to motor vehicle listings. In the majority of motor vehicle listings, the seller does make the buyer responsible for pickup or shipment of the vehicle. &lt;br/&gt;&lt;br/&gt;This field is returned if set.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Default&lt;/b&gt;: false | [optional] 
**buyer_responsible_for_shipping** | **bool** | This field should be included and set to &lt;code&gt;true&lt;/code&gt; for a motor vehicle listing if it will be the buyer&#39;s responsibility to arrange for shipment of a purchased motor vehicle after full payment is made. &lt;br /&gt;&lt;br /&gt;This field is only applicable to motor vehicle listings. In the majority of motor vehicle listings, the seller does make the buyer responsible for pickup or shipment of the vehicle. &lt;br/&gt;&lt;br/&gt;This field is returned if set.&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Default&lt;/b&gt;: false | [optional] 
**cash_on_delivery_fee** | [**Amount**](Amount.md) |  | [optional] 
**free_shipping** | **bool** | This field is included and set to &lt;code&gt;true&lt;/code&gt; if the seller offers a free shipping option to the buyer. &lt;br /&gt;&lt;br /&gt;This field can only be included and set to &lt;code&gt;true&lt;/code&gt; for the first domestic shipping service option specified in the &lt;b&gt;shippingServices&lt;/b&gt; container (it is ignored if set for subsequent shipping services or for any international shipping service option). &lt;br /&gt;&lt;br /&gt;The first specified shipping service option has a &lt;b&gt;sortOrder&lt;/b&gt; value of &lt;code&gt;1&lt;/code&gt; or if the &lt;b&gt;sortOrderId&lt;/b&gt; field is not used, it is the shipping service option that&#39;s specified first in the &lt;b&gt;shippingServices&lt;/b&gt; container.&lt;br/&gt;&lt;br/&gt;This container is returned if set. | [optional] 
**ship_to_locations** | [**RegionSet**](RegionSet.md) |  | [optional] 
**shipping_carrier_code** | **str** | This field sets/indicates the shipping carrier, such as &lt;code&gt;USPS&lt;/code&gt;, &lt;code&gt;FedEx&lt;/code&gt;, or &lt;code&gt;UPS&lt;/code&gt;. Although this field uses the &lt;b&gt;string&lt;/b&gt; type, the seller must pass in a pre-defined enumeration value here. &lt;br /&gt;&lt;br /&gt;For a full list of shipping carrier enum values for a specified eBay marketplace, the &lt;b&gt;GeteBayDetails&lt;/b&gt; call of the &lt;b&gt;Trading API&lt;/b&gt; can be used, and the &lt;b&gt;DetailName&lt;/b&gt; field&#39;s value should be set to &lt;code&gt;ShippingCarrierDetails&lt;/code&gt;. The enum values for each shipping carriers can be found in each &lt;b&gt;ShippingCarrierDetails.ShippingCarrier&lt;/b&gt; field in the response payload.&lt;br/&gt;&lt;br/&gt; This field is actually optional, as the shipping carrier is also tied into the &lt;b&gt;shippingServiceCode&lt;/b&gt; enum value, and that field is required for every specified shipping service option.&lt;br/&gt;&lt;br/&gt;This field is returned if set. | [optional] 
**shipping_cost** | [**Amount**](Amount.md) |  | [optional] 
**shipping_service_code** | **str** | This field sets/indicates the domestic or international shipping service option, such as &lt;code&gt;USPSPriority&lt;/code&gt;, &lt;code&gt;FedEx2Day&lt;/code&gt;, or &lt;code&gt;UPS3rdDay&lt;/code&gt;. Although this field uses the &lt;b&gt;string&lt;/b&gt; type, the seller must pass in a pre-defined enumeration value here. &lt;br /&gt;&lt;br /&gt;For a full list of shipping service option enum values for a specified eBay marketplace, the &lt;b&gt;GeteBayDetails&lt;/b&gt; call of the &lt;b&gt;Trading API&lt;/b&gt; can be used, and the &lt;b&gt;DetailName&lt;/b&gt; field&#39;s value should be set to &lt;code&gt;ShippingServiceDetails&lt;/code&gt;. &lt;br /&gt;&lt;br /&gt;The enum values for each shipping service option can be found in each &lt;b&gt;ShippingServiceDetails.ShippingService&lt;/b&gt; field in the response payload. The seller must make sure that the shipping service option is still valid, which is indicated by a &lt;code&gt;true&lt;/code&gt; value in the corresponding &lt;b&gt;ValidForSellingFlow&lt;/b&gt; boolean field. International shipping service options are typically returned at the top of the response payload, and are indicated by an &lt;b&gt;InternationalService&lt;/b&gt; boolean field that reads &lt;code&gt;true&lt;/code&gt;. &lt;br /&gt;&lt;br /&gt;The &lt;b&gt;InternationalService&lt;/b&gt; boolean field is not returned at all for domestic shipping service options. &lt;br/&gt;&lt;br/&gt; This field is required for every specified shipping service option.&lt;br/&gt;&lt;br/&gt;This field is returned if set. | [optional] 
**sort_order** | **int** | The integer value set in this field controls the order of the corresponding domestic or international shipping service option in the View Item and Checkout pages. &lt;br/&gt;&lt;br/&gt;Sellers can specify up to four domestic shipping services (in four separate &lt;b&gt;shippingService&lt;/b&gt; containers), so valid values are 1, 2, 3, and 4. A shipping service option with a &lt;b&gt;sortOrder&lt;/b&gt; value of &lt;code&gt;1&lt;/code&gt; appears at the top of View Item and Checkout pages. Conversely, a shipping service option with a &lt;b&gt;sortOrder&lt;/b&gt; value of &lt;code&gt;1&lt;/code&gt; appears at the bottom of the list. &lt;br/&gt;&lt;br/&gt;Sellers can specify up to five international shipping services (in five separate &lt;b&gt;shippingService&lt;/b&gt; containers), so valid values for international shipping services are 1, 2, 3, 4, and 5. Similarly to domestic shipping service options, the &lt;b&gt;sortOrder&lt;/b&gt; value of a international shipping service option controls the placement of that shipping service option in the View Item and Checkout pages. &lt;br/&gt;&lt;br/&gt;If the &lt;b&gt;sortOrder&lt;/b&gt; field is not supplied, the order of domestic and international shipping service options is determined by the order in which they are listed in the API call. &lt;br/&gt;&lt;br/&gt;&lt;b&gt;Min&lt;/b&gt;: 1. &lt;b&gt;Max&lt;/b&gt;: 4 (for domestic shipping service) or 5 (for international shipping service). | [optional] 
**surcharge** | [**Amount**](Amount.md) |  | [optional] 

## Example

```python
from openapi_client.models.shipping_service import ShippingService

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingService from a JSON string
shipping_service_instance = ShippingService.from_json(json)
# print the JSON string representation of the object
print(ShippingService.to_json())

# convert the object into a dict
shipping_service_dict = shipping_service_instance.to_dict()
# create an instance of ShippingService from a dict
shipping_service_from_dict = ShippingService.from_dict(shipping_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


