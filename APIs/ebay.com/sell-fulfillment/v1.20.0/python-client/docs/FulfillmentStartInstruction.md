# FulfillmentStartInstruction

This type contains a set of specifications for processing a fulfillment of an order, including the type of fulfillment, shipping carrier and service, addressing details, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ebay_supported_fulfillment** | **bool** | This field is only returned if its value is &lt;code&gt;true&lt;/code&gt; and indicates that the fulfillment will be shipped via eBay&#39;s Global Shipping Program, eBay International Shipping, or the Authenticity Guarantee service program. &lt;br&gt;&lt;br&gt;For more information, see the &lt;a href&#x3D;\&quot;https://www.ebay.com/help/selling/shipping-items/setting-shipping-options/global-shipping-program?id&#x3D;4646 \&quot; target&#x3D;\&quot;_blank\&quot;&gt;Global Shipping Program&lt;/a&gt; help topic. | [optional] 
**final_destination_address** | [**Address**](Address.md) |  | [optional] 
**fulfillment_instructions_type** | **str** | The enumeration value returned in this field indicates the method of fulfillment that will be used to deliver this set of line items (this package) to the buyer. This field will have a value of &lt;code&gt;SHIP_TO&lt;/code&gt; if the &lt;b&gt;ebaySupportedFulfillment&lt;/b&gt; field is returned with a value of &lt;code&gt;true&lt;/code&gt;. See the &lt;strong&gt;FulfillmentInstructionsType&lt;/strong&gt; definition for more information about different fulfillment types. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:FulfillmentInstructionsType&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**max_estimated_delivery_date** | **str** | This is the estimated latest date that the fulfillment will be completed. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned ifthe value of the &lt;b&gt;fulfillmentInstructionsType&lt;/b&gt; field is &lt;code&gt;DIGITAL&lt;/code&gt; or &lt;code&gt;PREPARE_FOR_PICKUP&lt;/code&gt;.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Format:&lt;/b&gt; &lt;code&gt;[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z&lt;/code&gt; &lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; &lt;code&gt;2015-08-04T19:09:02.768Z&lt;/code&gt; | [optional] 
**min_estimated_delivery_date** | **str** | This is the estimated earliest date that the fulfillment will be completed. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned if  the value of the &lt;b&gt;fulfillmentInstructionsType&lt;/b&gt; field is &lt;code&gt;DIGITAL&lt;/code&gt; or &lt;code&gt;PREPARE_FOR_PICKUP&lt;/code&gt;.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Format:&lt;/b&gt; &lt;code&gt;[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z&lt;/code&gt; &lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; &lt;code&gt;2015-08-04T19:09:02.768Z&lt;/code&gt; | [optional] 
**pickup_step** | [**PickupStep**](PickupStep.md) |  | [optional] 
**shipping_step** | [**ShippingStep**](ShippingStep.md) |  | [optional] 

## Example

```python
from openapi_client.models.fulfillment_start_instruction import FulfillmentStartInstruction

# TODO update the JSON string below
json = "{}"
# create an instance of FulfillmentStartInstruction from a JSON string
fulfillment_start_instruction_instance = FulfillmentStartInstruction.from_json(json)
# print the JSON string representation of the object
print(FulfillmentStartInstruction.to_json())

# convert the object into a dict
fulfillment_start_instruction_dict = fulfillment_start_instruction_instance.to_dict()
# create an instance of FulfillmentStartInstruction from a dict
fulfillment_start_instruction_from_dict = FulfillmentStartInstruction.from_dict(fulfillment_start_instruction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


