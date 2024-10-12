# PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**building_number** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**country** | **str** | ISO 3166 ALPHA2 country code | 
**country_sub_division** | **str** |  | [optional] 
**postal_code** | **str** |  | [optional] 
**street** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.post_payments_sepa_credit_transfers_consents_params_body_payments_creditor_address import PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAddress

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAddress from a JSON string
post_payments_sepa_credit_transfers_consents_params_body_payments_creditor_address_instance = PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAddress.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAddress.to_json())

# convert the object into a dict
post_payments_sepa_credit_transfers_consents_params_body_payments_creditor_address_dict = post_payments_sepa_credit_transfers_consents_params_body_payments_creditor_address_instance.to_dict()
# create an instance of PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAddress from a dict
post_payments_sepa_credit_transfers_consents_params_body_payments_creditor_address_from_dict = PostPaymentsSepaCreditTransfersConsentsParamsBodyPaymentsCreditorAddress.from_dict(post_payments_sepa_credit_transfers_consents_params_body_payments_creditor_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


