# PostPaymentsCrossBorderCreditTransfersOKBodyTransfer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **str** | PI / Transfer identification | [optional] 
**status_reason_code** | **str** | Rejection reson code | [optional] 
**transaction_status** | **str** | Status of the payment | [optional] 

## Example

```python
from openapi_client.models.post_payments_cross_border_credit_transfers_ok_body_transfer import PostPaymentsCrossBorderCreditTransfersOKBodyTransfer

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsCrossBorderCreditTransfersOKBodyTransfer from a JSON string
post_payments_cross_border_credit_transfers_ok_body_transfer_instance = PostPaymentsCrossBorderCreditTransfersOKBodyTransfer.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsCrossBorderCreditTransfersOKBodyTransfer.to_json())

# convert the object into a dict
post_payments_cross_border_credit_transfers_ok_body_transfer_dict = post_payments_cross_border_credit_transfers_ok_body_transfer_instance.to_dict()
# create an instance of PostPaymentsCrossBorderCreditTransfersOKBodyTransfer from a dict
post_payments_cross_border_credit_transfers_ok_body_transfer_from_dict = PostPaymentsCrossBorderCreditTransfersOKBodyTransfer.from_dict(post_payments_cross_border_credit_transfers_ok_body_transfer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


