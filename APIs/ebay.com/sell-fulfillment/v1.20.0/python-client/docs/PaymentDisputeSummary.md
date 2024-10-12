# PaymentDisputeSummary

This type is used by each payment dispute that is returned with the <strong>getPaymentDisputeSummaries</strong> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**SimpleAmount**](SimpleAmount.md) |  | [optional] 
**buyer_username** | **str** | This is the buyer&#39;s eBay user ID. This field is returned for all payment disputes returned in the response. | [optional] 
**closed_date** | **str** | The timestamp in this field shows the date/time when the payment dispute was closed, so this field is only returned for payment disputes in the &lt;code&gt;CLOSED&lt;/code&gt; state.&lt;br&gt;&lt;br&gt;The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: &lt;em&gt;yyyy-MM-ddThh:mm.ss.sssZ&lt;/em&gt;. An example would be &lt;code&gt;2019-08-04T19:09:02.768Z&lt;/code&gt;. | [optional] 
**open_date** | **str** | The timestamp in this field shows the date/time when the payment dispute was opened. This field is returned for payment disputes in all states.&lt;br&gt;&lt;br&gt;The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: &lt;em&gt;yyyy-MM-ddThh:mm.ss.sssZ&lt;/em&gt;. An example would be &lt;code&gt;2019-08-04T19:09:02.768Z&lt;/code&gt;. | [optional] 
**order_id** | **str** | This is the unique identifier of the order involved in the payment dispute. | [optional] 
**payment_dispute_id** | **str** | This is the unique identifier of the payment dispute. This identifier is automatically created by eBay once the payment dispute comes into the eBay system. This identifier is passed in at the end of the &lt;strong&gt;getPaymentDispute&lt;/strong&gt; call URI to retrieve a specific payment dispute. The &lt;strong&gt;getPaymentDispute&lt;/strong&gt; method returns more details about a payment dispute than the &lt;strong&gt;getPaymentDisputeSummaries&lt;/strong&gt; method. | [optional] 
**payment_dispute_status** | **str** | The enumeration value in this field gives the current status of the payment dispute. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeStateEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**reason** | **str** | The enumeration value in this field gives the reason why the buyer initiated the payment dispute. See &lt;strong&gt;DisputeReasonEnum&lt;/strong&gt; type for a description of the supported reasons that buyers can give for initiating a payment dispute. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/api:DisputeReasonEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**respond_by_date** | **str** | The timestamp in this field shows the date/time when the seller must response to a payment dispute, so this field is only returned for payment disputes in the &lt;code&gt;ACTION_NEEDED&lt;/code&gt; state. For payment disputes that require action by the seller, that same seller must call &lt;strong&gt;getPaymentDispute&lt;/strong&gt; to see the next action(s) that they can take against the payment dispute.&lt;br&gt;&lt;br&gt;The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: &lt;em&gt;yyyy-MM-ddThh:mm.ss.sssZ&lt;/em&gt;. An example would be &lt;code&gt;2019-08-04T19:09:02.768Z&lt;/code&gt;. | [optional] 

## Example

```python
from openapi_client.models.payment_dispute_summary import PaymentDisputeSummary

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentDisputeSummary from a JSON string
payment_dispute_summary_instance = PaymentDisputeSummary.from_json(json)
# print the JSON string representation of the object
print(PaymentDisputeSummary.to_json())

# convert the object into a dict
payment_dispute_summary_dict = payment_dispute_summary_instance.to_dict()
# create an instance of PaymentDisputeSummary from a dict
payment_dispute_summary_from_dict = PaymentDisputeSummary.from_dict(payment_dispute_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


