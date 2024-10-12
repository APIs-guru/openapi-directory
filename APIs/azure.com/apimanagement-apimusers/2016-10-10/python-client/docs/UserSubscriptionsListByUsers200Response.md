# UserSubscriptionsListByUsers200Response

Paged Subscriptions list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total record count number across all pages. | [optional] 
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[UserSubscriptionsListByUsers200ResponseValueInner]**](UserSubscriptionsListByUsers200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.user_subscriptions_list_by_users200_response import UserSubscriptionsListByUsers200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UserSubscriptionsListByUsers200Response from a JSON string
user_subscriptions_list_by_users200_response_instance = UserSubscriptionsListByUsers200Response.from_json(json)
# print the JSON string representation of the object
print(UserSubscriptionsListByUsers200Response.to_json())

# convert the object into a dict
user_subscriptions_list_by_users200_response_dict = user_subscriptions_list_by_users200_response_instance.to_dict()
# create an instance of UserSubscriptionsListByUsers200Response from a dict
user_subscriptions_list_by_users200_response_from_dict = UserSubscriptionsListByUsers200Response.from_dict(user_subscriptions_list_by_users200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


