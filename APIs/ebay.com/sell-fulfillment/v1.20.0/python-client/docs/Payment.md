# Payment

This type is used to provide details about the seller payments for an order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Amount**](Amount.md) |  | [optional] 
**payment_date** | **str** | The date and time that the payment was received by the seller. This field will not be returned if buyer has yet to pay for the order. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. &lt;br&gt;&lt;br&gt;&lt;b&gt;Format:&lt;/b&gt; &lt;code&gt;[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z&lt;/code&gt; &lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; &lt;code&gt;2015-08-04T19:09:02.768Z&lt;/code&gt; | [optional] 
**payment_holds** | [**List[PaymentHold]**](PaymentHold.md) | This container is only returned if eBay is temporarily holding the seller&#39;s funds for the order. If a payment hold has been placed on the order, this container includes the reason for the payment hold, the expected release date of the funds into the seller&#39;s account, the current state of the hold, and as soon as the payment hold has been released, the actual release date. | [optional] 
**payment_method** | **str** | The payment method used to pay for the order. See the &lt;strong&gt;PaymentMethodTypeEnum&lt;/strong&gt; type for more information on the payment methods. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:PaymentMethodTypeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**payment_reference_id** | **str** | This field is only returned if payment has been made by the buyer, and the &lt;strong&gt;paymentMethod&lt;/strong&gt; is &lt;code&gt;ESCROW&lt;/code&gt;. This field contains a special ID for ESCROW. | [optional] 
**payment_status** | **str** | The enumeration value returned in this field indicates the status of the payment for the order. See the &lt;strong&gt;PaymentStatusEnum&lt;/strong&gt; type definition for more information on the possible payment states. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:PaymentStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.payment import Payment

# TODO update the JSON string below
json = "{}"
# create an instance of Payment from a JSON string
payment_instance = Payment.from_json(json)
# print the JSON string representation of the object
print(Payment.to_json())

# convert the object into a dict
payment_dict = payment_instance.to_dict()
# create an instance of Payment from a dict
payment_from_dict = Payment.from_dict(payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


