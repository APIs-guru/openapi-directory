# TransferBillingSubscriptionResult

Request parameters to transfer billing subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TransferBillingSubscriptionResultProperties**](TransferBillingSubscriptionResultProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.transfer_billing_subscription_result import TransferBillingSubscriptionResult

# TODO update the JSON string below
json = "{}"
# create an instance of TransferBillingSubscriptionResult from a JSON string
transfer_billing_subscription_result_instance = TransferBillingSubscriptionResult.from_json(json)
# print the JSON string representation of the object
print(TransferBillingSubscriptionResult.to_json())

# convert the object into a dict
transfer_billing_subscription_result_dict = transfer_billing_subscription_result_instance.to_dict()
# create an instance of TransferBillingSubscriptionResult from a dict
transfer_billing_subscription_result_from_dict = TransferBillingSubscriptionResult.from_dict(transfer_billing_subscription_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


