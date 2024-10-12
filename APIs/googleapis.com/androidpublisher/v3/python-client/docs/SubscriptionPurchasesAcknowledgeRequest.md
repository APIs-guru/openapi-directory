# SubscriptionPurchasesAcknowledgeRequest

Request for the purchases.subscriptions.acknowledge API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**developer_payload** | **str** | Payload to attach to the purchase. | [optional] 

## Example

```python
from openapi_client.models.subscription_purchases_acknowledge_request import SubscriptionPurchasesAcknowledgeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionPurchasesAcknowledgeRequest from a JSON string
subscription_purchases_acknowledge_request_instance = SubscriptionPurchasesAcknowledgeRequest.from_json(json)
# print the JSON string representation of the object
print(SubscriptionPurchasesAcknowledgeRequest.to_json())

# convert the object into a dict
subscription_purchases_acknowledge_request_dict = subscription_purchases_acknowledge_request_instance.to_dict()
# create an instance of SubscriptionPurchasesAcknowledgeRequest from a dict
subscription_purchases_acknowledge_request_from_dict = SubscriptionPurchasesAcknowledgeRequest.from_dict(subscription_purchases_acknowledge_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


