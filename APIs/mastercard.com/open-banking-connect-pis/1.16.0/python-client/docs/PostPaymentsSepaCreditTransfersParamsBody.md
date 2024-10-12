# PostPaymentsSepaCreditTransfersParamsBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_info** | [**PostPaymentsSepaCreditTransfersParamsBodyRequestInfo**](PostPaymentsSepaCreditTransfersParamsBodyRequestInfo.md) |  | 

## Example

```python
from openapi_client.models.post_payments_sepa_credit_transfers_params_body import PostPaymentsSepaCreditTransfersParamsBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsSepaCreditTransfersParamsBody from a JSON string
post_payments_sepa_credit_transfers_params_body_instance = PostPaymentsSepaCreditTransfersParamsBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsSepaCreditTransfersParamsBody.to_json())

# convert the object into a dict
post_payments_sepa_credit_transfers_params_body_dict = post_payments_sepa_credit_transfers_params_body_instance.to_dict()
# create an instance of PostPaymentsSepaCreditTransfersParamsBody from a dict
post_payments_sepa_credit_transfers_params_body_from_dict = PostPaymentsSepaCreditTransfersParamsBody.from_dict(post_payments_sepa_credit_transfers_params_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


