# SubscriptionUpdateRequest

Subscription update details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SubscriptionUpdateRequestProperties**](SubscriptionUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscription_update_request import SubscriptionUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionUpdateRequest from a JSON string
subscription_update_request_instance = SubscriptionUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(SubscriptionUpdateRequest.to_json())

# convert the object into a dict
subscription_update_request_dict = subscription_update_request_instance.to_dict()
# create an instance of SubscriptionUpdateRequest from a dict
subscription_update_request_from_dict = SubscriptionUpdateRequest.from_dict(subscription_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


