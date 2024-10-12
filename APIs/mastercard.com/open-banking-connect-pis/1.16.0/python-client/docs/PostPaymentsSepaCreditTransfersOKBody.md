# PostPaymentsSepaCreditTransfersOKBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent** | [**SepaPaymentConsent**](SepaPaymentConsent.md) |  | 
**original_request_info** | [**PostPaymentsSepaCreditTransfersOKBodyOriginalRequestInfo**](PostPaymentsSepaCreditTransfersOKBodyOriginalRequestInfo.md) |  | 
**transfer** | [**PostPaymentsSepaCreditTransfersOKBodyTransfer**](PostPaymentsSepaCreditTransfersOKBodyTransfer.md) |  | 

## Example

```python
from openapi_client.models.post_payments_sepa_credit_transfers_ok_body import PostPaymentsSepaCreditTransfersOKBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsSepaCreditTransfersOKBody from a JSON string
post_payments_sepa_credit_transfers_ok_body_instance = PostPaymentsSepaCreditTransfersOKBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsSepaCreditTransfersOKBody.to_json())

# convert the object into a dict
post_payments_sepa_credit_transfers_ok_body_dict = post_payments_sepa_credit_transfers_ok_body_instance.to_dict()
# create an instance of PostPaymentsSepaCreditTransfersOKBody from a dict
post_payments_sepa_credit_transfers_ok_body_from_dict = PostPaymentsSepaCreditTransfersOKBody.from_dict(post_payments_sepa_credit_transfers_ok_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


