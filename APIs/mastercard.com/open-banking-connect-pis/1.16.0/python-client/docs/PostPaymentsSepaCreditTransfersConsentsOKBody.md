# PostPaymentsSepaCreditTransfersConsentsOKBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PostPaymentsSepaCreditTransfersConsentsOKBodyLinks**](PostPaymentsSepaCreditTransfersConsentsOKBodyLinks.md) |  | [optional] 
**additional_data** | [**PostPaymentsCrossBorderCreditTransfersConsentsOKBodyAdditionalData**](PostPaymentsCrossBorderCreditTransfersConsentsOKBodyAdditionalData.md) |  | [optional] 
**aspsp_sca_approach** | **str** |  | [optional] 
**consent_request_id** | **str** |  | [optional] 
**original_request_info** | [**PostPaymentsSepaCreditTransfersConsentsOKBodyOriginalRequestInfo**](PostPaymentsSepaCreditTransfersConsentsOKBodyOriginalRequestInfo.md) |  | 

## Example

```python
from openapi_client.models.post_payments_sepa_credit_transfers_consents_ok_body import PostPaymentsSepaCreditTransfersConsentsOKBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsSepaCreditTransfersConsentsOKBody from a JSON string
post_payments_sepa_credit_transfers_consents_ok_body_instance = PostPaymentsSepaCreditTransfersConsentsOKBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsSepaCreditTransfersConsentsOKBody.to_json())

# convert the object into a dict
post_payments_sepa_credit_transfers_consents_ok_body_dict = post_payments_sepa_credit_transfers_consents_ok_body_instance.to_dict()
# create an instance of PostPaymentsSepaCreditTransfersConsentsOKBody from a dict
post_payments_sepa_credit_transfers_consents_ok_body_from_dict = PostPaymentsSepaCreditTransfersConsentsOKBody.from_dict(post_payments_sepa_credit_transfers_consents_ok_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


