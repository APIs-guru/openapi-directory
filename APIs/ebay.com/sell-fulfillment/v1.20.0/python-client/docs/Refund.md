# Refund

This is the base type of the <b>issueRefund</b> response payload. As long as the <b>issueRefund</b> method does not trigger an error, a response payload will be returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refund_id** | **str** | The unique identifier of the order refund. This value is returned unless the refund operation fails (&lt;b&gt;refundStatus&lt;/b&gt; value shows &lt;code&gt;FAILED&lt;/code&gt;). This identifier can be used to track the status of the refund through a &lt;b&gt;getOrder&lt;/b&gt; or &lt;b&gt;getOrders&lt;/b&gt; call. For order-level refunds, check the &lt;b&gt;paymentSummary.refunds.refundId&lt;/b&gt; field in the &lt;b&gt;getOrder&lt;/b&gt;/&lt;b&gt;getOrders&lt;/b&gt; response, and for line item level refunds, check the &lt;b&gt;lineItems.refunds.refundId&lt;/b&gt; field(s) in the &lt;b&gt;getOrder&lt;/b&gt;/&lt;b&gt;getOrders&lt;/b&gt; response. | [optional] 
**refund_status** | **str** | The value returned in this field indicates the success or failure of the refund operation. A successful &lt;b&gt;issueRefund&lt;/b&gt; operation should result in a value of &lt;code&gt;PENDING&lt;/code&gt;. A failed &lt;b&gt;issueRefund&lt;/b&gt; operation should result in a value of &lt;code&gt;FAILED&lt;/code&gt;, and an HTTP status code and/or and API error code may also get returned to possibly indicate the issue.&lt;br&gt;&lt;br&gt;The refunds issued through this method are processed asynchronously, so the refund will not show as &#39;Refunded&#39; right away. A seller will have to make a subsequent &lt;a href&#x3D;\&quot;https://developer.ebay.com/api-docs/sell/fulfillment/resources/order/methods/getOrder\&quot; target&#x3D;\&quot;_blank\&quot;&gt;getOrder&lt;/a&gt; call to check the status of the refund.  The status of an order refund can be found in the &lt;a href&#x3D;\&quot;https://developer.ebay.com/api-docs/sell/fulfillment/resources/order/methods/getOrder#response.paymentSummary.refunds.refundStatus\&quot; target&#x3D;\&quot;_blank\&quot;&gt;paymentSummary.refunds.refundStatus&lt;/a&gt; field of the &lt;a href&#x3D;\&quot;https://developer.ebay.com/api-docs/sell/fulfillment/resources/order/methods/getOrder\&quot; target&#x3D;\&quot;_blank\&quot;&gt;getOrder&lt;/a&gt; response. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:RefundStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.refund import Refund

# TODO update the JSON string below
json = "{}"
# create an instance of Refund from a JSON string
refund_instance = Refund.from_json(json)
# print the JSON string representation of the object
print(Refund.to_json())

# convert the object into a dict
refund_dict = refund_instance.to_dict()
# create an instance of Refund from a dict
refund_from_dict = Refund.from_dict(refund_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


