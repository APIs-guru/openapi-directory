# PostPaymentsCrossBorderCreditTransfersPaymentStatusParamsBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **str** | Payment identification | 
**request_info** | [**PostPaymentsCrossBorderCreditTransfersPaymentStatusParamsBodyRequestInfo**](PostPaymentsCrossBorderCreditTransfersPaymentStatusParamsBodyRequestInfo.md) |  | 

## Example

```python
from openapi_client.models.post_payments_cross_border_credit_transfers_payment_status_params_body import PostPaymentsCrossBorderCreditTransfersPaymentStatusParamsBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsCrossBorderCreditTransfersPaymentStatusParamsBody from a JSON string
post_payments_cross_border_credit_transfers_payment_status_params_body_instance = PostPaymentsCrossBorderCreditTransfersPaymentStatusParamsBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsCrossBorderCreditTransfersPaymentStatusParamsBody.to_json())

# convert the object into a dict
post_payments_cross_border_credit_transfers_payment_status_params_body_dict = post_payments_cross_border_credit_transfers_payment_status_params_body_instance.to_dict()
# create an instance of PostPaymentsCrossBorderCreditTransfersPaymentStatusParamsBody from a dict
post_payments_cross_border_credit_transfers_payment_status_params_body_from_dict = PostPaymentsCrossBorderCreditTransfersPaymentStatusParamsBody.from_dict(post_payments_cross_border_credit_transfers_payment_status_params_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


