# SubscriptionGet200Response

Subscription details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SubscriptionList200ResponseValueInnerProperties**](SubscriptionList200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription_get200_response import SubscriptionGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionGet200Response from a JSON string
subscription_get200_response_instance = SubscriptionGet200Response.from_json(json)
# print the JSON string representation of the object
print(SubscriptionGet200Response.to_json())

# convert the object into a dict
subscription_get200_response_dict = subscription_get200_response_instance.to_dict()
# create an instance of SubscriptionGet200Response from a dict
subscription_get200_response_from_dict = SubscriptionGet200Response.from_dict(subscription_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


