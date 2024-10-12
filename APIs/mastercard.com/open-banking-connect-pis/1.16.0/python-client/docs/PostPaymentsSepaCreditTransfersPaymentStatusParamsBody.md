# PostPaymentsSepaCreditTransfersPaymentStatusParamsBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **str** | Payment identification | 
**request_info** | [**PostPaymentsSepaCreditTransfersPaymentStatusParamsBodyRequestInfo**](PostPaymentsSepaCreditTransfersPaymentStatusParamsBodyRequestInfo.md) |  | 

## Example

```python
from openapi_client.models.post_payments_sepa_credit_transfers_payment_status_params_body import PostPaymentsSepaCreditTransfersPaymentStatusParamsBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsSepaCreditTransfersPaymentStatusParamsBody from a JSON string
post_payments_sepa_credit_transfers_payment_status_params_body_instance = PostPaymentsSepaCreditTransfersPaymentStatusParamsBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsSepaCreditTransfersPaymentStatusParamsBody.to_json())

# convert the object into a dict
post_payments_sepa_credit_transfers_payment_status_params_body_dict = post_payments_sepa_credit_transfers_payment_status_params_body_instance.to_dict()
# create an instance of PostPaymentsSepaCreditTransfersPaymentStatusParamsBody from a dict
post_payments_sepa_credit_transfers_payment_status_params_body_from_dict = PostPaymentsSepaCreditTransfersPaymentStatusParamsBody.from_dict(post_payments_sepa_credit_transfers_payment_status_params_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


