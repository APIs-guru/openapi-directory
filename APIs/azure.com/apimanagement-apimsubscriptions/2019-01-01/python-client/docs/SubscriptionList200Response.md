# SubscriptionList200Response

Paged Subscriptions list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[SubscriptionList200ResponseValueInner]**](SubscriptionList200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.subscription_list200_response import SubscriptionList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionList200Response from a JSON string
subscription_list200_response_instance = SubscriptionList200Response.from_json(json)
# print the JSON string representation of the object
print(SubscriptionList200Response.to_json())

# convert the object into a dict
subscription_list200_response_dict = subscription_list200_response_instance.to_dict()
# create an instance of SubscriptionList200Response from a dict
subscription_list200_response_from_dict = SubscriptionList200Response.from_dict(subscription_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


