# RevokeSubscriptionPurchaseRequest

Request for the purchases.subscriptionsv2.revoke API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**revocation_context** | [**RevocationContext**](RevocationContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.revoke_subscription_purchase_request import RevokeSubscriptionPurchaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RevokeSubscriptionPurchaseRequest from a JSON string
revoke_subscription_purchase_request_instance = RevokeSubscriptionPurchaseRequest.from_json(json)
# print the JSON string representation of the object
print(RevokeSubscriptionPurchaseRequest.to_json())

# convert the object into a dict
revoke_subscription_purchase_request_dict = revoke_subscription_purchase_request_instance.to_dict()
# create an instance of RevokeSubscriptionPurchaseRequest from a dict
revoke_subscription_purchase_request_from_dict = RevokeSubscriptionPurchaseRequest.from_dict(revoke_subscription_purchase_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


