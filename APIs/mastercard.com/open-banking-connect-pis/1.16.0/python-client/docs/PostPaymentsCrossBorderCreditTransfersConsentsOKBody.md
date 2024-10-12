# PostPaymentsCrossBorderCreditTransfersConsentsOKBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PostPaymentsCrossBorderCreditTransfersConsentsOKBodyLinks**](PostPaymentsCrossBorderCreditTransfersConsentsOKBodyLinks.md) |  | [optional] 
**additional_data** | [**PostPaymentsCrossBorderCreditTransfersConsentsOKBodyAdditionalData**](PostPaymentsCrossBorderCreditTransfersConsentsOKBodyAdditionalData.md) |  | [optional] 
**aspsp_sca_approach** | **str** |  | [optional] 
**consent_request_id** | **str** |  | [optional] 
**original_request_info** | [**PostPaymentsCrossBorderCreditTransfersConsentsOKBodyOriginalRequestInfo**](PostPaymentsCrossBorderCreditTransfersConsentsOKBodyOriginalRequestInfo.md) |  | 

## Example

```python
from openapi_client.models.post_payments_cross_border_credit_transfers_consents_ok_body import PostPaymentsCrossBorderCreditTransfersConsentsOKBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsCrossBorderCreditTransfersConsentsOKBody from a JSON string
post_payments_cross_border_credit_transfers_consents_ok_body_instance = PostPaymentsCrossBorderCreditTransfersConsentsOKBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsCrossBorderCreditTransfersConsentsOKBody.to_json())

# convert the object into a dict
post_payments_cross_border_credit_transfers_consents_ok_body_dict = post_payments_cross_border_credit_transfers_consents_ok_body_instance.to_dict()
# create an instance of PostPaymentsCrossBorderCreditTransfersConsentsOKBody from a dict
post_payments_cross_border_credit_transfers_consents_ok_body_from_dict = PostPaymentsCrossBorderCreditTransfersConsentsOKBody.from_dict(post_payments_cross_border_credit_transfers_consents_ok_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


