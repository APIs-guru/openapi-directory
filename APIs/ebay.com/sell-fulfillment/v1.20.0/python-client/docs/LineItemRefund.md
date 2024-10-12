# LineItemRefund

This type contains refund information for a line item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**Amount**](Amount.md) |  | [optional] 
**refund_date** | **str** | The date and time that the refund was issued for the line item. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the refund has been issued. &lt;br&gt;&lt;br&gt;&lt;b&gt;Format:&lt;/b&gt; &lt;code&gt;[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z&lt;/code&gt; &lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; &lt;code&gt;2015-08-04T19:09:02.768Z&lt;/code&gt; | [optional] 
**refund_id** | **str** | Unique identifier of a refund that was initiated for an order&#39;s line item through the &lt;b&gt;issueRefund&lt;/b&gt; method. If the &lt;b&gt;issueRefund&lt;/b&gt; method was used to issue a refund at the order level, this identifier is returned at the order level instead (&lt;b&gt;paymentSummary.refunds.refundId&lt;/b&gt; field).&lt;br&gt;&lt;br&gt; A &lt;b&gt;refundId&lt;/b&gt; value is returned in the response of the &lt;b&gt;issueRefund&lt;/b&gt; method, and this same value will be returned in the &lt;b&gt;getOrder&lt;/b&gt; and &lt;b&gt;getOrders&lt;/b&gt; responses for pending and completed refunds. | [optional] 
**refund_reference_id** | **str** | This field is reserved for internal or future use. | [optional] 

## Example

```python
from openapi_client.models.line_item_refund import LineItemRefund

# TODO update the JSON string below
json = "{}"
# create an instance of LineItemRefund from a JSON string
line_item_refund_instance = LineItemRefund.from_json(json)
# print the JSON string representation of the object
print(LineItemRefund.to_json())

# convert the object into a dict
line_item_refund_dict = line_item_refund_instance.to_dict()
# create an instance of LineItemRefund from a dict
line_item_refund_from_dict = LineItemRefund.from_dict(line_item_refund_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


