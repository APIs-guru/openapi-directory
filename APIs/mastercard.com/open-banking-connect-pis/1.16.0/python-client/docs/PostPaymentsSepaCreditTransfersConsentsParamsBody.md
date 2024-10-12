# PostPaymentsSepaCreditTransfersConsentsParamsBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payments** | [**PostPaymentsSepaCreditTransfersConsentsParamsBodyPayments**](PostPaymentsSepaCreditTransfersConsentsParamsBodyPayments.md) |  | 
**request_info** | [**PostPaymentsSepaCreditTransfersConsentsParamsBodyRequestInfo**](PostPaymentsSepaCreditTransfersConsentsParamsBodyRequestInfo.md) |  | 

## Example

```python
from openapi_client.models.post_payments_sepa_credit_transfers_consents_params_body import PostPaymentsSepaCreditTransfersConsentsParamsBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsSepaCreditTransfersConsentsParamsBody from a JSON string
post_payments_sepa_credit_transfers_consents_params_body_instance = PostPaymentsSepaCreditTransfersConsentsParamsBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsSepaCreditTransfersConsentsParamsBody.to_json())

# convert the object into a dict
post_payments_sepa_credit_transfers_consents_params_body_dict = post_payments_sepa_credit_transfers_consents_params_body_instance.to_dict()
# create an instance of PostPaymentsSepaCreditTransfersConsentsParamsBody from a dict
post_payments_sepa_credit_transfers_consents_params_body_from_dict = PostPaymentsSepaCreditTransfersConsentsParamsBody.from_dict(post_payments_sepa_credit_transfers_consents_params_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


