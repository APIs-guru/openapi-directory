# CancelRequest

This type contains information about a buyer request to cancel an order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_completed_date** | **str** | The date and time that the order cancellation was completed, if applicable. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is not returned until the cancellation request has actually been approved by the seller.&lt;br&gt;&lt;br&gt;&lt;b&gt;Format:&lt;/b&gt; &lt;code&gt;[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z&lt;/code&gt; &lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; &lt;code&gt;2015-08-04T19:09:02.768Z&lt;/code&gt; | [optional] 
**cancel_initiator** | **str** | This string value indicates the party who made the initial cancellation request. Typically, either the &#39;Buyer&#39; or &#39;Seller&#39;. If a cancellation request has been made, this field should be returned. | [optional] 
**cancel_reason** | **str** | The reason why the &lt;b&gt;cancelInitiator&lt;/b&gt; initiated the cancellation request. Cancellation reasons for a buyer might include &#39;order placed by mistake&#39; or &#39;order won&#39;t arrive in time&#39;. For a seller, a typical cancellation reason is &#39;out of stock&#39;. If a cancellation request has been made, this field should be returned. | [optional] 
**cancel_request_id** | **str** | The unique identifier of the order cancellation request. This field is returned for each cancellation request. | [optional] 
**cancel_request_state** | **str** | The current stage or condition of the cancellation request. This field is returned for each cancellation request. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/sel:CancelRequestStateEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**cancel_requested_date** | **str** | The date and time that the order cancellation was requested. This timestamp is in ISO 8601 format, which uses the 24-hour Universal Coordinated Time (UTC) clock. This field is returned for each cancellation request.&lt;br&gt;&lt;br&gt;&lt;b&gt;Format:&lt;/b&gt; &lt;code&gt;[YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z&lt;/code&gt; &lt;br&gt;&lt;b&gt;Example:&lt;/b&gt; &lt;code&gt;2015-08-04T19:09:02.768Z&lt;/code&gt; | [optional] 

## Example

```python
from openapi_client.models.cancel_request import CancelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CancelRequest from a JSON string
cancel_request_instance = CancelRequest.from_json(json)
# print the JSON string representation of the object
print(CancelRequest.to_json())

# convert the object into a dict
cancel_request_dict = cancel_request_instance.to_dict()
# create an instance of CancelRequest from a dict
cancel_request_from_dict = CancelRequest.from_dict(cancel_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


