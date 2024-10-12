# PostPaymentsSepaCreditTransfersPaymentStatusParamsBodyRequestInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspsp_id** | **str** | Identification of ASPSP | 
**consent_id** | **str** | Consent identification | 
**merchant** | [**Merchant**](Merchant.md) |  | [optional] 
**x_request_id** | **str** | Request id given by the client | 

## Example

```python
from openapi_client.models.post_payments_sepa_credit_transfers_payment_status_params_body_request_info import PostPaymentsSepaCreditTransfersPaymentStatusParamsBodyRequestInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsSepaCreditTransfersPaymentStatusParamsBodyRequestInfo from a JSON string
post_payments_sepa_credit_transfers_payment_status_params_body_request_info_instance = PostPaymentsSepaCreditTransfersPaymentStatusParamsBodyRequestInfo.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsSepaCreditTransfersPaymentStatusParamsBodyRequestInfo.to_json())

# convert the object into a dict
post_payments_sepa_credit_transfers_payment_status_params_body_request_info_dict = post_payments_sepa_credit_transfers_payment_status_params_body_request_info_instance.to_dict()
# create an instance of PostPaymentsSepaCreditTransfersPaymentStatusParamsBodyRequestInfo from a dict
post_payments_sepa_credit_transfers_payment_status_params_body_request_info_from_dict = PostPaymentsSepaCreditTransfersPaymentStatusParamsBodyRequestInfo.from_dict(post_payments_sepa_credit_transfers_payment_status_params_body_request_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


