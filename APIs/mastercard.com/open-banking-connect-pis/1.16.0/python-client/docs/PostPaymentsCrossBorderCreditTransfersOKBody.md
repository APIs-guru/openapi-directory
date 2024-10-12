# PostPaymentsCrossBorderCreditTransfersOKBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent** | [**PaymentConsent**](PaymentConsent.md) |  | 
**original_request_info** | [**PostPaymentsCrossBorderCreditTransfersOKBodyOriginalRequestInfo**](PostPaymentsCrossBorderCreditTransfersOKBodyOriginalRequestInfo.md) |  | 
**transfer** | [**PostPaymentsCrossBorderCreditTransfersOKBodyTransfer**](PostPaymentsCrossBorderCreditTransfersOKBodyTransfer.md) |  | [optional] 

## Example

```python
from openapi_client.models.post_payments_cross_border_credit_transfers_ok_body import PostPaymentsCrossBorderCreditTransfersOKBody

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsCrossBorderCreditTransfersOKBody from a JSON string
post_payments_cross_border_credit_transfers_ok_body_instance = PostPaymentsCrossBorderCreditTransfersOKBody.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsCrossBorderCreditTransfersOKBody.to_json())

# convert the object into a dict
post_payments_cross_border_credit_transfers_ok_body_dict = post_payments_cross_border_credit_transfers_ok_body_instance.to_dict()
# create an instance of PostPaymentsCrossBorderCreditTransfersOKBody from a dict
post_payments_cross_border_credit_transfers_ok_body_from_dict = PostPaymentsCrossBorderCreditTransfersOKBody.from_dict(post_payments_cross_border_credit_transfers_ok_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


