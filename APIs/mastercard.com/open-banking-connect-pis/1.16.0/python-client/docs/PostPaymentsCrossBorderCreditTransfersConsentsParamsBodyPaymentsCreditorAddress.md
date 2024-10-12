# PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAddress


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**building_number** | **str** |  | [optional] 
**city** | **str** |  | [optional] 
**country** | **str** | ISO 3166 ALPHA2 country code | [optional] 
**country_sub_division** | **str** |  | [optional] 
**postal_code** | **str** |  | [optional] 
**street** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.post_payments_cross_border_credit_transfers_consents_params_body_payments_creditor_address import PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAddress

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAddress from a JSON string
post_payments_cross_border_credit_transfers_consents_params_body_payments_creditor_address_instance = PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAddress.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAddress.to_json())

# convert the object into a dict
post_payments_cross_border_credit_transfers_consents_params_body_payments_creditor_address_dict = post_payments_cross_border_credit_transfers_consents_params_body_payments_creditor_address_instance.to_dict()
# create an instance of PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAddress from a dict
post_payments_cross_border_credit_transfers_consents_params_body_payments_creditor_address_from_dict = PostPaymentsCrossBorderCreditTransfersConsentsParamsBodyPaymentsCreditorAddress.from_dict(post_payments_cross_border_credit_transfers_consents_params_body_payments_creditor_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


