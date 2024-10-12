# NotificationRequest163

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_message** | **str** | Message a financial institution will associate to the transfer and may display | [optional] 
**mastercard_assigned_id** | **str** | Mastercard Assigned ID for tiered interchange calculations. Length: 6. Applicable only for P2M and MRF notifications.  | [optional] 
**merchant_category_code** | **str** | Merchant category code | [optional] 
**payment_facilitator_id** | **str** | Contains the Payment Facilitator ID. Length: 11. Applicable only for P2M and MRF notifications. | [optional] 
**payment_type** | **str** | MRF: Merchant Refund | 
**recipient** | [**Recipient165**](Recipient165.md) |  | [optional] 
**recipient_account_uri** | **str** | Recepient Account uri . Only accept format: pan:[16 digit] | 
**transaction_amount** | [**TransactionAmount164**](TransactionAmount164.md) |  | [optional] 
**transfer_status** | **str** | APPROVED or DECLINED | 

## Example

```python
from openapi_client.models.notification_request163 import NotificationRequest163

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRequest163 from a JSON string
notification_request163_instance = NotificationRequest163.from_json(json)
# print the JSON string representation of the object
print(NotificationRequest163.to_json())

# convert the object into a dict
notification_request163_dict = notification_request163_instance.to_dict()
# create an instance of NotificationRequest163 from a dict
notification_request163_from_dict = NotificationRequest163.from_dict(notification_request163_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


