# PaymentDispute

This type is used by the base response of the <strong>getPaymentDispute</strong> method. The <strong>getPaymentDispute</strong> method retrieves detailed information on a specific payment dispute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**SimpleAmount**](SimpleAmount.md) |  | [optional] 
**available_choices** | **List[str]** | The value(s) returned in this array indicate the choices that the seller has when responding to the payment dispute. Once the seller has responded to the payment dispute, this field will no longer be shown, and instead, the &lt;strong&gt;sellerResponse&lt;/strong&gt; field will show the decision that the seller made. | [optional] 
**buyer_provided** | [**InfoFromBuyer**](InfoFromBuyer.md) |  | [optional] 
**buyer_username** | **str** | This is the eBay user ID of the buyer that initiated the payment dispute. | [optional] 
**closed_date** | **str** | The timestamp in this field shows the date/time when the payment dispute was closed, so this field is only returned for payment disputes in the &lt;code&gt;CLOSED&lt;/code&gt; state.&lt;br&gt;&lt;br&gt;The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: &lt;em&gt;yyyy-MM-ddThh:mm.ss.sssZ&lt;/em&gt;. An example would be &lt;code&gt;2019-08-04T19:09:02.768Z&lt;/code&gt;. | [optional] 
**evidence** | [**List[DisputeEvidence]**](DisputeEvidence.md) | This container shows any evidence that has been provided by the seller to contest the payment dispute. Evidence may include shipment tracking information, proof of authentication documentation, image(s) to proof that an item is as described, or financial documentation/invoice.&lt;br&gt;&lt;br&gt;This container is only returned if the seller has provided at least one document used as evidence against the payment dispute. | [optional] 
**evidence_requests** | [**List[EvidenceRequest]**](EvidenceRequest.md) | This container is returned if one or more evidence documents are being requested from the seller. | [optional] 
**line_items** | [**List[OrderLineItems]**](OrderLineItems.md) | This array is used to identify one or more order line items associated with the payment dispute. There will always be at least one &lt;b&gt;itemId&lt;/b&gt;/&lt;b&gt;lineItemId&lt;/b&gt; pair returned in this array. | [optional] 
**monetary_transactions** | [**List[MonetaryTransaction]**](MonetaryTransaction.md) | This array provide details about one or more monetary transactions that occur as part of a payment dispute. This array is only returned once one or more monetary transacations occur with a payment dispute. | [optional] 
**note** | **str** | This field shows information that the seller provides about the dispute, such as the basis for the dispute, any relevant evidence, tracking numbers, and so forth.&lt;br&gt;&lt;br&gt;This field is limited to 1000 characters. | [optional] 
**open_date** | **str** | The timestamp in this field shows the date/time when the payment dispute was opened. This field is returned for payment disputes in all states.&lt;br&gt;&lt;br&gt;The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: &lt;em&gt;yyyy-MM-ddThh:mm.ss.sssZ&lt;/em&gt;. An example would be &lt;code&gt;2019-08-04T19:09:02.768Z&lt;/code&gt;. | [optional] 
**order_id** | **str** | This is the unique identifier of the order involved in the payment dispute. | [optional] 
**payment_dispute_id** | **str** | This is the unique identifier of the payment dispute. This is the same identifier that is passed in to the call URI. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. | [optional] 
**payment_dispute_status** | **str** | The enumeration value in this field gives the current status of the payment dispute. The status of a payment dispute partially determines other fields that are returned in the response. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeStateEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**reason** | **str** | The enumeration value in this field gives the reason why the buyer initiated the payment dispute. See &lt;strong&gt;DisputeReasonEnum&lt;/strong&gt; type for a description of the supported reasons that buyers can give for initiating a payment dispute. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeReasonEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**resolution** | [**PaymentDisputeOutcomeDetail**](PaymentDisputeOutcomeDetail.md) |  | [optional] 
**respond_by_date** | **str** | The timestamp in this field shows the date/time when the seller must response to a payment dispute, so this field is only returned for payment disputes in the &lt;code&gt;ACTION_NEEDED&lt;/code&gt; state. For payment disputes that currently require action by the seller, that same seller should look at the &lt;strong&gt;availableChoices&lt;/strong&gt; array to see the available actions.&lt;br&gt;&lt;br&gt;The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: &lt;em&gt;yyyy-MM-ddThh:mm.ss.sssZ&lt;/em&gt;. An example would be &lt;code&gt;2019-08-04T19:09:02.768Z&lt;/code&gt;. | [optional] 
**return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] 
**revision** | **int** | This integer value indicates the revision number of the payment dispute. Each time an action is taken against a payment dispute, this integer value increases by 1. | [optional] 
**seller_response** | **str** | The enumeration value returned in this field indicates how the seller has responded to the payment dispute. The seller has the option of accepting the payment dispute and agreeing to issue a refund, accepting the payment dispute and agreeing to issue a refund as long as the buyer returns the item, or contesting the payment dispute. This field is returned as soon as the seller makes an initial decision on the payment dispute. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/api:SellerResponseEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.payment_dispute import PaymentDispute

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentDispute from a JSON string
payment_dispute_instance = PaymentDispute.from_json(json)
# print the JSON string representation of the object
print(PaymentDispute.to_json())

# convert the object into a dict
payment_dispute_dict = payment_dispute_instance.to_dict()
# create an instance of PaymentDispute from a dict
payment_dispute_from_dict = PaymentDispute.from_dict(payment_dispute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


