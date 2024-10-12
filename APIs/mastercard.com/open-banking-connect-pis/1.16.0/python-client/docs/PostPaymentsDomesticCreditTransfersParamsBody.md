# PostPaymentsDomesticCreditTransfersParamsBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_info** | [**PostPaymentsDomesticCreditTransfersParamsBodyRequestInfo**](PostPaymentsDomesticCreditTransfersParamsBodyRequestInfo.md) |  | 

## Example

```python
from openapi_client.models.post_payments_domestic_credit_transfers_params_body import PostPaymentsDomesticCreditTransfersParamsBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsDomesticCreditTransfersParamsBody from a JSON string
post_payments_domestic_credit_transfers_params_body_instance = PostPaymentsDomesticCreditTransfersParamsBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsDomesticCreditTransfersParamsBody.to_json())

# convert the object into a dict
post_payments_domestic_credit_transfers_params_body_dict = post_payments_domestic_credit_transfers_params_body_instance.to_dict()
# create an instance of PostPaymentsDomesticCreditTransfersParamsBody from a dict
post_payments_domestic_credit_transfers_params_body_from_dict = PostPaymentsDomesticCreditTransfersParamsBody.from_dict(post_payments_domestic_credit_transfers_params_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


