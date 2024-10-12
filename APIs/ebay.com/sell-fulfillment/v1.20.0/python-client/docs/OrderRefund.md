# OrderRefund

This type contains information about a refund issued for an order. This does not include line item level refunds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Amount**](Amount.md) |  | [optional] 
**refund_date** | **str** | The date and time that the refund was issued. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the refund has been issued. &lt;br&gt;&lt;br&gt;&lt;b&gt;Format:&lt;/b&gt; &lt;code&gt;[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z&lt;/code&gt; &lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; &lt;code&gt;2015-08-04T19:09:02.768Z&lt;/code&gt; | [optional] 
**refund_id** | **str** | Unique identifier of a refund that was initiated for an order through the &lt;b&gt;issueRefund&lt;/b&gt; method. If the &lt;b&gt;issueRefund&lt;/b&gt; method was used to issue one or more refunds at the line item level, these refund identifiers are returned at the line item level instead (&lt;b&gt;lineItems.refunds.refundId&lt;/b&gt; field).&lt;br&gt;&lt;br&gt; A &lt;b&gt;refundId&lt;/b&gt; value is returned in the response of the &lt;b&gt;issueRefund&lt;/b&gt; method, and this same value will be returned in the &lt;b&gt;getOrders&lt;/b&gt; and &lt;b&gt;getOrders&lt;/b&gt; responses for pending and completed refunds. For other refunds, see the &lt;b&gt;refundReferenceId&lt;/b&gt; field. | [optional] 
**refund_reference_id** | **str** | The eBay-generated unique identifier for the refund. This field is not returned until the refund has been issued. | [optional] 
**refund_status** | **str** | This enumeration value indicates the current status of the refund to the buyer. This container is always returned for each refund. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:RefundStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.order_refund import OrderRefund

# TODO update the JSON string below
json = "{}"
# create an instance of OrderRefund from a JSON string
order_refund_instance = OrderRefund.from_json(json)
# print the JSON string representation of the object
print(OrderRefund.to_json())

# convert the object into a dict
order_refund_dict = order_refund_instance.to_dict()
# create an instance of OrderRefund from a dict
order_refund_from_dict = OrderRefund.from_dict(order_refund_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


