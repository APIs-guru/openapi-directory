# Order

This type contains the details of an order, including information about the buyer, order history, shipping fulfillments, line items, costs, payments, and order fulfillment status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buyer** | [**Buyer**](Buyer.md) |  | [optional] 
**buyer_checkout_notes** | **str** | This field contains any comments that the buyer left for the seller about the order during checkout process. This field is only returned if a buyer left comments at checkout time.  | [optional] 
**cancel_status** | [**CancelStatus**](CancelStatus.md) |  | [optional] 
**creation_date** | **str** | The date and time that the order was created. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. &lt;br&gt;&lt;br&gt;&lt;b&gt;Format:&lt;/b&gt; &lt;code&gt;[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z&lt;/code&gt; &lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; &lt;code&gt;2015-08-04T19:09:02.768Z&lt;/code&gt; | [optional] 
**ebay_collect_and_remit_tax** | **bool** | This field is only returned if &lt;code&gt;true&lt;/code&gt;, and indicates that eBay will collect tax (US state-mandated sales tax, Federal and Provincial Sales Tax in Canada, &#39;Goods and Services&#39; tax in Canada, Australia, and New Zealand, and VAT collected for UK and EU countries,) for at least one line item in the order, and remit the tax to the taxing authority of the buyer&#39;s residence. If this field is returned, the seller should search for one or more &lt;strong&gt;ebayCollectAndRemitTaxes&lt;/strong&gt; containers at the line item level to get more information about the type of tax and the amount. | [optional] 
**fulfillment_hrefs** | **List[str]** | This array contains a list of one or more &lt;strong&gt;getShippingFulfillment&lt;/strong&gt; call URIs that can be used to retrieve shipping fulfillments that have been set up for the order. | [optional] 
**fulfillment_start_instructions** | [**List[FulfillmentStartInstruction]**](FulfillmentStartInstruction.md) | This container consists of a set of specifications for fulfilling the order, including the type of fulfillment, shipping carrier and service, shipping address, and estimated delivery window. These instructions are derived from the buyer&#39;s and seller&#39;s eBay account preferences, the listing parameters, and the buyer&#39;s checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.&lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; Although this container is presented as an array, it currently returns only one set of fulfillment specifications. Additional array members will be supported in future functionality.&lt;/span&gt; | [optional] 
**last_modified_date** | **str** | The date and time that the order was last modified. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. &lt;br&gt;&lt;br&gt;&lt;b&gt;Format:&lt;/b&gt; &lt;code&gt;[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z&lt;/code&gt; &lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; &lt;code&gt;2015-08-04T19:09:02.768Z&lt;/code&gt; | [optional] 
**legacy_order_id** | **str** | The unique identifier of the order in legacy format, as traditionally used by the Trading API (and other legacy APIs). Both the &lt;b&gt;orderId&lt;/b&gt; field and this field are always returned. | [optional] 
**line_items** | [**List[LineItem]**](LineItem.md) | This array contains the details for all line items that comprise the order. | [optional] 
**order_fulfillment_status** | **str** | The degree to which fulfillment of the order is complete. See the &lt;strong&gt;OrderFulfillmentStatus&lt;/strong&gt; type definition for more information about each possible fulfillment state. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:OrderFulfillmentStatus&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**order_id** | **str** | The unique identifier of the order. Both the &lt;b&gt;legacyOrderId&lt;/b&gt; field (traditionally used by Trading and other legacy APIS) and this field are always returned. | [optional] 
**order_payment_status** | **str** | The enumeration value returned in this field indicates the current payment status of an order, or in case of a refund request, the current status of the refund. See the &lt;strong&gt;OrderPaymentStatusEnum&lt;/strong&gt; type definition for more information about each possible payment/refund state. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:OrderPaymentStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**payment_summary** | [**PaymentSummary**](PaymentSummary.md) |  | [optional] 
**pricing_summary** | [**PricingSummary**](PricingSummary.md) |  | [optional] 
**program** | [**Program**](Program.md) |  | [optional] 
**sales_record_reference** | **str** | An eBay-generated identifier that is used to identify and manage orders through the Selling Manager and Selling Manager Pro tools. This order identifier can also be found on the Orders grid page and in the Sales Record pages in Seller Hub. A &lt;strong&gt;salesRecordReference&lt;/strong&gt; number is only generated and returned at the order level, and not at the order line item level.&lt;br&gt;&lt;br&gt; In cases where the seller does not have a Selling Manager or Selling Manager Pro subscription nor access to Seller Hub, this field may not be returned. | [optional] 
**seller_id** | **str** | The unique eBay user ID of the seller who sold the order. | [optional] 
**total_fee_basis_amount** | [**Amount**](Amount.md) |  | [optional] 
**total_marketplace_fee** | [**Amount**](Amount.md) |  | [optional] 

## Example

```python
from openapi_client.models.order import Order

# TODO update the JSON string below
json = "{}"
# create an instance of Order from a JSON string
order_instance = Order.from_json(json)
# print the JSON string representation of the object
print(Order.to_json())

# convert the object into a dict
order_dict = order_instance.to_dict()
# create an instance of Order from a dict
order_from_dict = Order.from_dict(order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


