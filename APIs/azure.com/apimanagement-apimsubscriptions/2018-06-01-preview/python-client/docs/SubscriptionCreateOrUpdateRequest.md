# SubscriptionCreateOrUpdateRequest

Subscription create details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SubscriptionCreateOrUpdateRequestProperties**](SubscriptionCreateOrUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.subscription_create_or_update_request import SubscriptionCreateOrUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionCreateOrUpdateRequest from a JSON string
subscription_create_or_update_request_instance = SubscriptionCreateOrUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(SubscriptionCreateOrUpdateRequest.to_json())

# convert the object into a dict
subscription_create_or_update_request_dict = subscription_create_or_update_request_instance.to_dict()
# create an instance of SubscriptionCreateOrUpdateRequest from a dict
subscription_create_or_update_request_from_dict = SubscriptionCreateOrUpdateRequest.from_dict(subscription_create_or_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


