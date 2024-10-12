# PostPaymentsDomesticCreditTransfersConsentsOKBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PostPaymentsDomesticCreditTransfersConsentsOKBodyLinks**](PostPaymentsDomesticCreditTransfersConsentsOKBodyLinks.md) |  | [optional] 
**additional_data** | [**PostPaymentsCrossBorderCreditTransfersConsentsOKBodyAdditionalData**](PostPaymentsCrossBorderCreditTransfersConsentsOKBodyAdditionalData.md) |  | [optional] 
**aspsp_sca_approach** | **str** |  | [optional] 
**consent_request_id** | **str** |  | [optional] 
**original_request_info** | [**PostPaymentsDomesticCreditTransfersConsentsOKBodyOriginalRequestInfo**](PostPaymentsDomesticCreditTransfersConsentsOKBodyOriginalRequestInfo.md) |  | 

## Example

```python
from openapi_client.models.post_payments_domestic_credit_transfers_consents_ok_body import PostPaymentsDomesticCreditTransfersConsentsOKBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsDomesticCreditTransfersConsentsOKBody from a JSON string
post_payments_domestic_credit_transfers_consents_ok_body_instance = PostPaymentsDomesticCreditTransfersConsentsOKBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsDomesticCreditTransfersConsentsOKBody.to_json())

# convert the object into a dict
post_payments_domestic_credit_transfers_consents_ok_body_dict = post_payments_domestic_credit_transfers_consents_ok_body_instance.to_dict()
# create an instance of PostPaymentsDomesticCreditTransfersConsentsOKBody from a dict
post_payments_domestic_credit_transfers_consents_ok_body_from_dict = PostPaymentsDomesticCreditTransfersConsentsOKBody.from_dict(post_payments_domestic_credit_transfers_consents_ok_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


