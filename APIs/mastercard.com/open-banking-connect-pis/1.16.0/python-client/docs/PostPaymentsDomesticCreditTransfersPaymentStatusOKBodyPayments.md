# PostPaymentsDomesticCreditTransfersPaymentStatusOKBodyPayments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_reason_code** | **str** | Rejection reson code | [optional] 
**transaction_status** | **str** | Payment transaction status | 

## Example

```python
from openapi_client.models.post_payments_domestic_credit_transfers_payment_status_ok_body_payments import PostPaymentsDomesticCreditTransfersPaymentStatusOKBodyPayments

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsDomesticCreditTransfersPaymentStatusOKBodyPayments from a JSON string
post_payments_domestic_credit_transfers_payment_status_ok_body_payments_instance = PostPaymentsDomesticCreditTransfersPaymentStatusOKBodyPayments.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsDomesticCreditTransfersPaymentStatusOKBodyPayments.to_json())

# convert the object into a dict
post_payments_domestic_credit_transfers_payment_status_ok_body_payments_dict = post_payments_domestic_credit_transfers_payment_status_ok_body_payments_instance.to_dict()
# create an instance of PostPaymentsDomesticCreditTransfersPaymentStatusOKBodyPayments from a dict
post_payments_domestic_credit_transfers_payment_status_ok_body_payments_from_dict = PostPaymentsDomesticCreditTransfersPaymentStatusOKBodyPayments.from_dict(post_payments_domestic_credit_transfers_payment_status_ok_body_payments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


