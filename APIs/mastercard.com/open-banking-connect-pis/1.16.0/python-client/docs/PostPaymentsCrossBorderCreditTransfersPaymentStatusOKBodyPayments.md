# PostPaymentsCrossBorderCreditTransfersPaymentStatusOKBodyPayments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_reason_code** | **str** | Rejection reson code | [optional] 
**transaction_status** | **str** | Payment transaction status | 

## Example

```python
from openapi_client.models.post_payments_cross_border_credit_transfers_payment_status_ok_body_payments import PostPaymentsCrossBorderCreditTransfersPaymentStatusOKBodyPayments

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsCrossBorderCreditTransfersPaymentStatusOKBodyPayments from a JSON string
post_payments_cross_border_credit_transfers_payment_status_ok_body_payments_instance = PostPaymentsCrossBorderCreditTransfersPaymentStatusOKBodyPayments.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsCrossBorderCreditTransfersPaymentStatusOKBodyPayments.to_json())

# convert the object into a dict
post_payments_cross_border_credit_transfers_payment_status_ok_body_payments_dict = post_payments_cross_border_credit_transfers_payment_status_ok_body_payments_instance.to_dict()
# create an instance of PostPaymentsCrossBorderCreditTransfersPaymentStatusOKBodyPayments from a dict
post_payments_cross_border_credit_transfers_payment_status_ok_body_payments_from_dict = PostPaymentsCrossBorderCreditTransfersPaymentStatusOKBodyPayments.from_dict(post_payments_cross_border_credit_transfers_payment_status_ok_body_payments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


