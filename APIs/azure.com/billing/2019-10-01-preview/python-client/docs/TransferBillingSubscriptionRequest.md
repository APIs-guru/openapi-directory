# TransferBillingSubscriptionRequest

Request parameters to transfer billing subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TransferBillingSubscriptionRequestProperties**](TransferBillingSubscriptionRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.transfer_billing_subscription_request import TransferBillingSubscriptionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TransferBillingSubscriptionRequest from a JSON string
transfer_billing_subscription_request_instance = TransferBillingSubscriptionRequest.from_json(json)
# print the JSON string representation of the object
print(TransferBillingSubscriptionRequest.to_json())

# convert the object into a dict
transfer_billing_subscription_request_dict = transfer_billing_subscription_request_instance.to_dict()
# create an instance of TransferBillingSubscriptionRequest from a dict
transfer_billing_subscription_request_from_dict = TransferBillingSubscriptionRequest.from_dict(transfer_billing_subscription_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


