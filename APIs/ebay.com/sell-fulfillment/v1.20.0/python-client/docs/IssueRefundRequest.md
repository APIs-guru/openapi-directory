# IssueRefundRequest

The base type used by the request payload of the <b>issueRefund</b> method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | This free-text field allows the seller to clarify why the refund is being issued to the buyer.&lt;br&gt;&lt;br&gt;&lt;b&gt;Max Length&lt;/b&gt;: 100 | [optional] 
**order_level_refund_amount** | [**SimpleAmount**](SimpleAmount.md) |  | [optional] 
**reason_for_refund** | **str** | The enumeration value passed into this field indicates the reason for the refund. One of the defined enumeration values in the &lt;b&gt;ReasonForRefundEnum&lt;/b&gt; type must be used.&lt;br&gt;&lt;br&gt;This field is required, and it is highly recommended that sellers use the correct refund reason, especially in the case of a buyer-requested cancellation or &#39;buyer remorse&#39; return to indicate that there was nothing wrong with the item(s) or with the shipment of the order.&lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; If issuing refunds for more than one order line item, keep in mind that the refund reason must be the same for each of the order line items. If the refund reason is different for one or more order line items in an order, the seller would need to make separate &lt;b&gt;issueRefund&lt;/b&gt; calls, one for each refund reason. &lt;/span&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ReasonForRefundEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**refund_items** | [**List[RefundItem]**](RefundItem.md) | The &lt;b&gt;refundItems&lt;/b&gt; array is only required if the seller is issuing a refund for one or more individual order line items in a multiple line item order. Otherwise, the seller just uses the &lt;b&gt;orderLevelRefundAmount&lt;/b&gt; container to specify the amount of the refund for the entire order. | [optional] 

## Example

```python
from openapi_client.models.issue_refund_request import IssueRefundRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IssueRefundRequest from a JSON string
issue_refund_request_instance = IssueRefundRequest.from_json(json)
# print the JSON string representation of the object
print(IssueRefundRequest.to_json())

# convert the object into a dict
issue_refund_request_dict = issue_refund_request_instance.to_dict()
# create an instance of IssueRefundRequest from a dict
issue_refund_request_from_dict = IssueRefundRequest.from_dict(issue_refund_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


