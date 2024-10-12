# Status


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audit_info** | [**AuditInfo**](AuditInfo.md) |  | [optional] 
**comment_id** | **str** | Identifier of the comment added.  Conditional field, only present when comment text was provided in the request. | [optional] 
**initiator** | **str** | Party that initiated the status update. Valid values:&lt;br /&gt;    \&quot;I\&quot; - Issuer.&lt;br /&gt;    \&quot;W\&quot; - Token Requestor (including Wallet Provider).&lt;br /&gt;    \&quot;C\&quot; - Cardholder.&lt;br /&gt;    \&quot;P\&quot; - Mobile PIN Validation service.&lt;br /&gt;    \&quot;M\&quot; - Mobile PIN Change Validation service. | [optional] 
**reason_code** | **str** | Reason for the status update.  Valid values:&lt;br /&gt;    \&quot;A\&quot; ? Cardholder successfully authenticated using a mobile App prior to activation.&lt;br /&gt;    \&quot;C\&quot; ? Cardholder successfully authenticated with a customer service agent prior to activation. (For &#39;Token Activate&#39;).&lt;br /&gt;    \&quot;C\&quot; ? Account closed. (For &#39;Token Delete&#39;).&lt;br /&gt;    \&quot;F\&quot; ? Cardholder reported token device found or not stolen.&lt;br /&gt;    \&quot;L\&quot; ? Cardholder reported/confirmed token device lost.&lt;br /&gt;    \&quot;S\&quot; ? Cardholder reported/confirmed token device stolen.&lt;br /&gt;    \&quot;T\&quot; ? Issuer or cardholder reported fraudulent/then confirmed no fraudulent token transactions.&lt;br /&gt;    \&quot;Z\&quot; ? Other. | [optional] 
**status_code** | **str** | The status of the Token. Valid values:&lt;br /&gt;    \&quot;U\&quot; - Unmapped. The token has not yet been linked to the Account PAN. The process of tokenization is ?In Progress?.&lt;br /&gt;    \&quot;A\&quot; - Active. The token is linked to the Account PAN and may initiate new transactions to be authorized.&lt;br /&gt;    \&quot;S\&quot; - Suspended. The token is linked to the Account PAN but may not perform transactions at the request of one or more suspenders.&lt;br /&gt;    \&quot;D\&quot; - Deleted. The token is logically deleted but is still linked to the Account PAN for the purposes of post-authorization transaction processing. | [optional] 
**status_date_time** | **str** | Date and time the status was updated. String, ISO 8691 format - YYYY-MM-DDThh:mm:ssTZD . | [optional] 
**status_description** | **str** | Description of the current status. | [optional] 

## Example

```python
from openapi_client.models.status import Status

# TODO update the JSON string below
json = "{}"
# create an instance of Status from a JSON string
status_instance = Status.from_json(json)
# print the JSON string representation of the object
print(Status.to_json())

# convert the object into a dict
status_dict = status_instance.to_dict()
# create an instance of Status from a dict
status_from_dict = Status.from_dict(status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


