# PaymentDisputeActivity

This type is used by each recorded activity on a payment dispute, from creation to resolution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_date** | **str** | The timestamp in this field shows the date/time of the payment dispute activity.&lt;br&gt;&lt;br&gt;The timestamps returned here use the ISO-8601 24-hour date and time format, and the time zone used is Universal Coordinated Time (UTC), also known as Greenwich Mean Time (GMT), or Zulu. The ISO-8601 format looks like this: &lt;em&gt;yyyy-MM-ddThh:mm.ss.sssZ&lt;/em&gt;. An example would be &lt;code&gt;2019-08-04T19:09:02.768Z&lt;/code&gt;. | [optional] 
**activity_type** | **str** | This enumeration value indicates the type of activity that occured on the payment dispute. For example, a value of &lt;code&gt;DISPUTE_OPENED&lt;/code&gt; is returned when a payment disute is first created,  a value indicating the seller&#39;s decision on the dispute, such as &lt;code&gt;SELLER_CONTEST&lt;/code&gt;, is returned when seller makes a decision to accept or contest dispute, and a value of &lt;code&gt;DISPUTE_CLOSED&lt;/code&gt; is returned when a payment disute is resolved. See &lt;strong&gt;ActivityEnum&lt;/strong&gt; for an explanation of each of the values that may be returned here. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ActivityEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**actor** | **str** | This enumeration value indicates the actor that performed the action. Possible values include the &lt;code&gt;BUYER&lt;/code&gt;, &lt;code&gt;SELLER&lt;/code&gt;, &lt;code&gt;CS_AGENT&lt;/code&gt; (eBay customer service), or &lt;code&gt;SYSTEM&lt;/code&gt;. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ActorEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.payment_dispute_activity import PaymentDisputeActivity

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentDisputeActivity from a JSON string
payment_dispute_activity_instance = PaymentDisputeActivity.from_json(json)
# print the JSON string representation of the object
print(PaymentDisputeActivity.to_json())

# convert the object into a dict
payment_dispute_activity_dict = payment_dispute_activity_instance.to_dict()
# create an instance of PaymentDisputeActivity from a dict
payment_dispute_activity_from_dict = PaymentDisputeActivity.from_dict(payment_dispute_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


