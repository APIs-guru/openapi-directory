# PaymentSummary

This type contains information about the various monetary exchanges that apply to the net balance due for the order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payments** | [**List[Payment]**](Payment.md) | This array consists of payment information for the order, including payment status, payment method, payment amount, and payment date. This array is always returned, although some of the fields under this container will not be returned until payment has been made. | [optional] 
**refunds** | [**List[OrderRefund]**](OrderRefund.md) | This array is always returned, but is returned as an empty array unless the seller has submitted a partial or full refund to the buyer for the order. If a refund has occurred, the refund amount and refund date will be shown for each refund. | [optional] 
**total_due_seller** | [**Amount**](Amount.md) |  | [optional] 

## Example

```python
from openapi_client.models.payment_summary import PaymentSummary

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentSummary from a JSON string
payment_summary_instance = PaymentSummary.from_json(json)
# print the JSON string representation of the object
print(PaymentSummary.to_json())

# convert the object into a dict
payment_summary_dict = payment_summary_instance.to_dict()
# create an instance of PaymentSummary from a dict
payment_summary_from_dict = PaymentSummary.from_dict(payment_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


