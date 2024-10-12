# PostPaymentsDomesticCreditTransfersOKBodyTransfer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payment_id** | **str** | PI / Transfer identification | 
**status_reason_code** | **str** | Rejection reson code | [optional] 
**transaction_status** | **str** | Status of the payment | 

## Example

```python
from openapi_client.models.post_payments_domestic_credit_transfers_ok_body_transfer import PostPaymentsDomesticCreditTransfersOKBodyTransfer

# TODO update the JSON string below
json = "{}"
# create an instance of PostPaymentsDomesticCreditTransfersOKBodyTransfer from a JSON string
post_payments_domestic_credit_transfers_ok_body_transfer_instance = PostPaymentsDomesticCreditTransfersOKBodyTransfer.from_json(json)
# print the JSON string representation of the object
print(PostPaymentsDomesticCreditTransfersOKBodyTransfer.to_json())

# convert the object into a dict
post_payments_domestic_credit_transfers_ok_body_transfer_dict = post_payments_domestic_credit_transfers_ok_body_transfer_instance.to_dict()
# create an instance of PostPaymentsDomesticCreditTransfersOKBodyTransfer from a dict
post_payments_domestic_credit_transfers_ok_body_transfer_from_dict = PostPaymentsDomesticCreditTransfersOKBodyTransfer.from_dict(post_payments_domestic_credit_transfers_ok_body_transfer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


