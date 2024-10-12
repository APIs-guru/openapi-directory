# PostPaymentsDomesticCreditTransfersPaymentStatusOKBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**original_request_info** | [**PostPaymentsDomesticCreditTransfersPaymentStatusOKBodyOriginalRequestInfo**](PostPaymentsDomesticCreditTransfersPaymentStatusOKBodyOriginalRequestInfo.md) |  | 
**payments** | [**PostPaymentsDomesticCreditTransfersPaymentStatusOKBodyPayments**](PostPaymentsDomesticCreditTransfersPaymentStatusOKBodyPayments.md) |  | [optional] 

## Example

```python
from openapi_client.models.post_payments_domestic_credit_transfers_payment_status_ok_body import PostPaymentsDomesticCreditTransfersPaymentStatusOKBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsDomesticCreditTransfersPaymentStatusOKBody from a JSON string
post_payments_domestic_credit_transfers_payment_status_ok_body_instance = PostPaymentsDomesticCreditTransfersPaymentStatusOKBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsDomesticCreditTransfersPaymentStatusOKBody.to_json())

# convert the object into a dict
post_payments_domestic_credit_transfers_payment_status_ok_body_dict = post_payments_domestic_credit_transfers_payment_status_ok_body_instance.to_dict()
# create an instance of PostPaymentsDomesticCreditTransfersPaymentStatusOKBody from a dict
post_payments_domestic_credit_transfers_payment_status_ok_body_from_dict = PostPaymentsDomesticCreditTransfersPaymentStatusOKBody.from_dict(post_payments_domestic_credit_transfers_payment_status_ok_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


