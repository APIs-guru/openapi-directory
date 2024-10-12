# SubscriptionCreateParameterProperties

Parameters supplied to the Create subscription operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Subscription name. | 
**primary_key** | **str** | Primary subscription key. If not specified during request key will be generated automatically. | [optional] 
**product_id** | **str** | Product (product id path) for which subscription is being created in form /products/{productId} | 
**secondary_key** | **str** | Secondary subscription key. If not specified during request key will be generated automatically. | [optional] 
**state** | **str** | Initial subscription state. If no value is specified, subscription is created with Submitted state. Possible states are * active – the subscription is active, * suspended – the subscription is blocked, and the subscriber cannot call any APIs of the product, * submitted – the subscription request has been made by the developer, but has not yet been approved or rejected, * rejected – the subscription request has been denied by an administrator, * cancelled – the subscription has been cancelled by the developer or administrator, * expired – the subscription reached its expiration date and was deactivated. | [optional] 
**user_id** | **str** | User (user id path) for whom subscription is being created in form /users/{uid} | 

## Example

```python
from openapi_client.models.subscription_create_parameter_properties import SubscriptionCreateParameterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionCreateParameterProperties from a JSON string
subscription_create_parameter_properties_instance = SubscriptionCreateParameterProperties.from_json(json)
# print the JSON string representation of the object
print(SubscriptionCreateParameterProperties.to_json())

# convert the object into a dict
subscription_create_parameter_properties_dict = subscription_create_parameter_properties_instance.to_dict()
# create an instance of SubscriptionCreateParameterProperties from a dict
subscription_create_parameter_properties_from_dict = SubscriptionCreateParameterProperties.from_dict(subscription_create_parameter_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


