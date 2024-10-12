# PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**building_number** | **str** |  | 
**city** | **str** |  | 
**country** | **str** | ISO 3166 ALPHA2 country code | 
**country_sub_division** | **str** |  | [optional] 
**postal_code** | **str** |  | 
**street** | **str** |  | 

## Example

```python
from openapi_client.models.post_payments_domestic_credit_transfers_consents_params_body_payments_creditor_address import PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAddress

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAddress from a JSON string
post_payments_domestic_credit_transfers_consents_params_body_payments_creditor_address_instance = PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAddress.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAddress.to_json())

# convert the object into a dict
post_payments_domestic_credit_transfers_consents_params_body_payments_creditor_address_dict = post_payments_domestic_credit_transfers_consents_params_body_payments_creditor_address_instance.to_dict()
# create an instance of PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAddress from a dict
post_payments_domestic_credit_transfers_consents_params_body_payments_creditor_address_from_dict = PostPaymentsDomesticCreditTransfersConsentsParamsBodyPaymentsCreditorAddress.from_dict(post_payments_domestic_credit_transfers_consents_params_body_payments_creditor_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


