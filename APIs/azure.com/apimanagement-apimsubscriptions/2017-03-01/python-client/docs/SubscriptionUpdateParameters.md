# SubscriptionUpdateParameters

Parameters supplied to the Update subscription operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date** | **datetime** | Subscription expiration date. The setting is for audit purposes only and the subscription is not automatically expired. The subscription lifecycle can be managed by using the &#x60;state&#x60; property. The date conforms to the following format: &#x60;yyyy-MM-ddTHH:mm:ssZ&#x60; as specified by the ISO 8601 standard. | [optional] 
**name** | **str** | Subscription name. | [optional] 
**primary_key** | **str** | Primary subscription key. | [optional] 
**product_id** | **str** | Product identifier path: /products/{productId} | [optional] 
**secondary_key** | **str** | Secondary subscription key. | [optional] 
**state** | **str** | Subscription state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated. | [optional] 
**state_comment** | **str** | Comments describing subscription state change by the administrator. | [optional] 
**user_id** | **str** | User identifier path: /users/{uid} | [optional] 

## Example

```python
from openapi_client.models.subscription_update_parameters import SubscriptionUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionUpdateParameters from a JSON string
subscription_update_parameters_instance = SubscriptionUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SubscriptionUpdateParameters.to_json())

# convert the object into a dict
subscription_update_parameters_dict = subscription_update_parameters_instance.to_dict()
# create an instance of SubscriptionUpdateParameters from a dict
subscription_update_parameters_from_dict = SubscriptionUpdateParameters.from_dict(subscription_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


