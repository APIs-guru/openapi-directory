# PostPaymentsSepaCreditTransfersPaymentStatusOKBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**original_request_info** | [**PostPaymentsSepaCreditTransfersPaymentStatusOKBodyOriginalRequestInfo**](PostPaymentsSepaCreditTransfersPaymentStatusOKBodyOriginalRequestInfo.md) |  | 
**payments** | [**PostPaymentsSepaCreditTransfersPaymentStatusOKBodyPayments**](PostPaymentsSepaCreditTransfersPaymentStatusOKBodyPayments.md) |  | [optional] 

## Example

```python
from openapi_client.models.post_payments_sepa_credit_transfers_payment_status_ok_body import PostPaymentsSepaCreditTransfersPaymentStatusOKBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsSepaCreditTransfersPaymentStatusOKBody from a JSON string
post_payments_sepa_credit_transfers_payment_status_ok_body_instance = PostPaymentsSepaCreditTransfersPaymentStatusOKBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsSepaCreditTransfersPaymentStatusOKBody.to_json())

# convert the object into a dict
post_payments_sepa_credit_transfers_payment_status_ok_body_dict = post_payments_sepa_credit_transfers_payment_status_ok_body_instance.to_dict()
# create an instance of PostPaymentsSepaCreditTransfersPaymentStatusOKBody from a dict
post_payments_sepa_credit_transfers_payment_status_ok_body_from_dict = PostPaymentsSepaCreditTransfersPaymentStatusOKBody.from_dict(post_payments_sepa_credit_transfers_payment_status_ok_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


