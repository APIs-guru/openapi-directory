# PaymentDisputeOutcomeDetail

This type is used by the <strong>resolution</strong> container that is returned for payment disputes that have been resolved.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fees** | [**SimpleAmount**](SimpleAmount.md) |  | [optional] 
**protected_amount** | [**SimpleAmount**](SimpleAmount.md) |  | [optional] 
**protection_status** | **str** | This enumeration value indicates if the seller is fully protected, partially protected, or not protected by eBay for the payment dispute. This field is always returned once the payment dispute is resolved. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/api:ProtectionStatusEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**reason_for_closure** | **str** | The enumeration value returned in this field indicates the outcome of the payment dispute for the seller. This field is always returned once the payment dispute is resolved. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/fulfillment/types/api:OutcomeEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**recoup_amount** | [**SimpleAmount**](SimpleAmount.md) |  | [optional] 
**total_fee_credit** | [**SimpleAmount**](SimpleAmount.md) |  | [optional] 

## Example

```python
from openapi_client.models.payment_dispute_outcome_detail import PaymentDisputeOutcomeDetail

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentDisputeOutcomeDetail from a JSON string
payment_dispute_outcome_detail_instance = PaymentDisputeOutcomeDetail.from_json(json)
# print the JSON string representation of the object
print(PaymentDisputeOutcomeDetail.to_json())

# convert the object into a dict
payment_dispute_outcome_detail_dict = payment_dispute_outcome_detail_instance.to_dict()
# create an instance of PaymentDisputeOutcomeDetail from a dict
payment_dispute_outcome_detail_from_dict = PaymentDisputeOutcomeDetail.from_dict(payment_dispute_outcome_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


