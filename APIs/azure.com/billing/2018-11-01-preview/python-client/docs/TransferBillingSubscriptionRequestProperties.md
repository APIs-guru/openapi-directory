# TransferBillingSubscriptionRequestProperties

Request parameters to transfer billing subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_billing_profile_id** | **str** | The destination billing profile id. | [optional] 
**destination_invoice_section_id** | **str** | The destination invoice section id. | [optional] 

## Example

```python
from openapi_client.models.transfer_billing_subscription_request_properties import TransferBillingSubscriptionRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TransferBillingSubscriptionRequestProperties from a JSON string
transfer_billing_subscription_request_properties_instance = TransferBillingSubscriptionRequestProperties.from_json(json)
# print the JSON string representation of the object
print(TransferBillingSubscriptionRequestProperties.to_json())

# convert the object into a dict
transfer_billing_subscription_request_properties_dict = transfer_billing_subscription_request_properties_instance.to_dict()
# create an instance of TransferBillingSubscriptionRequestProperties from a dict
transfer_billing_subscription_request_properties_from_dict = TransferBillingSubscriptionRequestProperties.from_dict(transfer_billing_subscription_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


