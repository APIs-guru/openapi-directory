# TransferBillingSubscriptionResultProperties

Transfer billing subscription result properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_subscription_name** | **str** | The destination billing subscription id. | [optional] 

## Example

```python
from openapi_client.models.transfer_billing_subscription_result_properties import TransferBillingSubscriptionResultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TransferBillingSubscriptionResultProperties from a JSON string
transfer_billing_subscription_result_properties_instance = TransferBillingSubscriptionResultProperties.from_json(json)
# print the JSON string representation of the object
print(TransferBillingSubscriptionResultProperties.to_json())

# convert the object into a dict
transfer_billing_subscription_result_properties_dict = transfer_billing_subscription_result_properties_instance.to_dict()
# create an instance of TransferBillingSubscriptionResultProperties from a dict
transfer_billing_subscription_result_properties_from_dict = TransferBillingSubscriptionResultProperties.from_dict(transfer_billing_subscription_result_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


