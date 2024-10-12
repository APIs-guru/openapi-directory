# PostPaymentsDomesticCreditTransfersPaymentStatusParamsBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **str** | Payment identification | 
**request_info** | [**PostPaymentsDomesticCreditTransfersPaymentStatusParamsBodyRequestInfo**](PostPaymentsDomesticCreditTransfersPaymentStatusParamsBodyRequestInfo.md) |  | 

## Example

```python
from openapi_client.models.post_payments_domestic_credit_transfers_payment_status_params_body import PostPaymentsDomesticCreditTransfersPaymentStatusParamsBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsDomesticCreditTransfersPaymentStatusParamsBody from a JSON string
post_payments_domestic_credit_transfers_payment_status_params_body_instance = PostPaymentsDomesticCreditTransfersPaymentStatusParamsBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsDomesticCreditTransfersPaymentStatusParamsBody.to_json())

# convert the object into a dict
post_payments_domestic_credit_transfers_payment_status_params_body_dict = post_payments_domestic_credit_transfers_payment_status_params_body_instance.to_dict()
# create an instance of PostPaymentsDomesticCreditTransfersPaymentStatusParamsBody from a dict
post_payments_domestic_credit_transfers_payment_status_params_body_from_dict = PostPaymentsDomesticCreditTransfersPaymentStatusParamsBody.from_dict(post_payments_domestic_credit_transfers_payment_status_params_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


