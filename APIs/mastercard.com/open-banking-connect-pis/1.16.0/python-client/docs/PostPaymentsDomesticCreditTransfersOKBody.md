# PostPaymentsDomesticCreditTransfersOKBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent** | [**PaymentConsent**](PaymentConsent.md) |  | 
**original_request_info** | [**PostPaymentsDomesticCreditTransfersOKBodyOriginalRequestInfo**](PostPaymentsDomesticCreditTransfersOKBodyOriginalRequestInfo.md) |  | 
**transfer** | [**PostPaymentsDomesticCreditTransfersOKBodyTransfer**](PostPaymentsDomesticCreditTransfersOKBodyTransfer.md) |  | 

## Example

```python
from openapi_client.models.post_payments_domestic_credit_transfers_ok_body import PostPaymentsDomesticCreditTransfersOKBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsDomesticCreditTransfersOKBody from a JSON string
post_payments_domestic_credit_transfers_ok_body_instance = PostPaymentsDomesticCreditTransfersOKBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsDomesticCreditTransfersOKBody.to_json())

# convert the object into a dict
post_payments_domestic_credit_transfers_ok_body_dict = post_payments_domestic_credit_transfers_ok_body_instance.to_dict()
# create an instance of PostPaymentsDomesticCreditTransfersOKBody from a dict
post_payments_domestic_credit_transfers_ok_body_from_dict = PostPaymentsDomesticCreditTransfersOKBody.from_dict(post_payments_domestic_credit_transfers_ok_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


