# PaymentDetail

Information about payment related to a reservation order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | Shows the Account that is charged for this payment. | [optional] 
**billing_currency_total** | [**Price**](Price.md) |  | [optional] 
**due_date** | **date** | Date when the payment needs to be done. | [optional] 
**extended_status_info** | [**ExtendedStatusInfo**](ExtendedStatusInfo.md) |  | [optional] 
**payment_date** | **date** | Date when the transaction is completed. Is null when it is scheduled. | [optional] 
**pricing_currency_total** | [**Price**](Price.md) |  | [optional] 
**status** | [**PaymentStatus**](PaymentStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.payment_detail import PaymentDetail

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentDetail from a JSON string
payment_detail_instance = PaymentDetail.from_json(json)
# print the JSON string representation of the object
print(PaymentDetail.to_json())

# convert the object into a dict
payment_detail_dict = payment_detail_instance.to_dict()
# create an instance of PaymentDetail from a dict
payment_detail_from_dict = PaymentDetail.from_dict(payment_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


