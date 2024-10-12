# RefreshSubscriptionResponse

Message for response when you refresh a subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription** | [**Subscription**](Subscription.md) |  | [optional] 

## Example

```python
from openapi_client.models.refresh_subscription_response import RefreshSubscriptionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshSubscriptionResponse from a JSON string
refresh_subscription_response_instance = RefreshSubscriptionResponse.from_json(json)
# print the JSON string representation of the object
print(RefreshSubscriptionResponse.to_json())

# convert the object into a dict
refresh_subscription_response_dict = refresh_subscription_response_instance.to_dict()
# create an instance of RefreshSubscriptionResponse from a dict
refresh_subscription_response_from_dict = RefreshSubscriptionResponse.from_dict(refresh_subscription_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


