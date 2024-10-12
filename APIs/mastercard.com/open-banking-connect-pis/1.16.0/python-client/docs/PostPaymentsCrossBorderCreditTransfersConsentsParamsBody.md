# PostPaymentsCrossBorderCreditTransfersConsentsParamsBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payments** | [**PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPayments**](PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPayments.md) |  | 
**request_info** | [**PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyRequestInfo**](PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyRequestInfo.md) |  | 

## Example

```python
from openapi_client.models.post_payments_cross_border_credit_transfers_consents_params_body import PostPaymentsCrossBorderCreditTransfersConsentsParamsBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsCrossBorderCreditTransfersConsentsParamsBody from a JSON string
post_payments_cross_border_credit_transfers_consents_params_body_instance = PostPaymentsCrossBorderCreditTransfersConsentsParamsBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsCrossBorderCreditTransfersConsentsParamsBody.to_json())

# convert the object into a dict
post_payments_cross_border_credit_transfers_consents_params_body_dict = post_payments_cross_border_credit_transfers_consents_params_body_instance.to_dict()
# create an instance of PostPaymentsCrossBorderCreditTransfersConsentsParamsBody from a dict
post_payments_cross_border_credit_transfers_consents_params_body_from_dict = PostPaymentsCrossBorderCreditTransfersConsentsParamsBody.from_dict(post_payments_cross_border_credit_transfers_consents_params_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


