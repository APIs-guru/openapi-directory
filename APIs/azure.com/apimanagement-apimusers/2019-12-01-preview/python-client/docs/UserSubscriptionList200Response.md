# UserSubscriptionList200Response

Paged Subscriptions list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[UserSubscriptionList200ResponseValueInner]**](UserSubscriptionList200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.user_subscription_list200_response import UserSubscriptionList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UserSubscriptionList200Response from a JSON string
user_subscription_list200_response_instance = UserSubscriptionList200Response.from_json(json)
# print the JSON string representation of the object
print(UserSubscriptionList200Response.to_json())

# convert the object into a dict
user_subscription_list200_response_dict = user_subscription_list200_response_instance.to_dict()
# create an instance of UserSubscriptionList200Response from a dict
user_subscription_list200_response_from_dict = UserSubscriptionList200Response.from_dict(user_subscription_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


