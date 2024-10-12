# UserSubscriptionQuotaListResult

Json-serialized array of User subscription quota response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** |  | [optional] [readonly] 
**value** | [**List[UserSubscriptionQuota]**](UserSubscriptionQuota.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_subscription_quota_list_result import UserSubscriptionQuotaListResult

# TODO update the JSON string below
json = "{}"
# create an instance of UserSubscriptionQuotaListResult from a JSON string
user_subscription_quota_list_result_instance = UserSubscriptionQuotaListResult.from_json(json)
# print the JSON string representation of the object
print(UserSubscriptionQuotaListResult.to_json())

# convert the object into a dict
user_subscription_quota_list_result_dict = user_subscription_quota_list_result_instance.to_dict()
# create an instance of UserSubscriptionQuotaListResult from a dict
user_subscription_quota_list_result_from_dict = UserSubscriptionQuotaListResult.from_dict(user_subscription_quota_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


