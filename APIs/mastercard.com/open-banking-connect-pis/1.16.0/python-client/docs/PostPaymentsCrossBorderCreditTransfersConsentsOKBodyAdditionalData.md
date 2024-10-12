# PostPaymentsCrossBorderCreditTransfersConsentsOKBodyAdditionalData

Returning additional data related to the consent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**raw_consent** | **str** | Raw Consent, available only for specific standards and returned only if requestInfo.flag contained &#39;Return.Raw.Consent&#39; | [optional] 

## Example

```python
from openapi_client.models.post_payments_cross_border_credit_transfers_consents_ok_body_additional_data import PostPaymentsCrossBorderCreditTransfersConsentsOKBodyAdditionalData

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsCrossBorderCreditTransfersConsentsOKBodyAdditionalData from a JSON string
post_payments_cross_border_credit_transfers_consents_ok_body_additional_data_instance = PostPaymentsCrossBorderCreditTransfersConsentsOKBodyAdditionalData.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsCrossBorderCreditTransfersConsentsOKBodyAdditionalData.to_json())

# convert the object into a dict
post_payments_cross_border_credit_transfers_consents_ok_body_additional_data_dict = post_payments_cross_border_credit_transfers_consents_ok_body_additional_data_instance.to_dict()
# create an instance of PostPaymentsCrossBorderCreditTransfersConsentsOKBodyAdditionalData from a dict
post_payments_cross_border_credit_transfers_consents_ok_body_additional_data_from_dict = PostPaymentsCrossBorderCreditTransfersConsentsOKBodyAdditionalData.from_dict(post_payments_cross_border_credit_transfers_consents_ok_body_additional_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


