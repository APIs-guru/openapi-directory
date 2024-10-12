# UserSubscriptionQuota

User subscription quota response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | Current number of IotHub type | [optional] 
**id** | **str** | IotHub type id | [optional] 
**limit** | **int** | Numerical limit on IotHub type | [optional] 
**name** | [**Name**](Name.md) |  | [optional] 
**type** | **str** | Response type | [optional] 
**unit** | **str** | Unit of IotHub type | [optional] 

## Example

```python
from openapi_client.models.user_subscription_quota import UserSubscriptionQuota

# TODO update the JSON string below
json = "{}"
# create an instance of UserSubscriptionQuota from a JSON string
user_subscription_quota_instance = UserSubscriptionQuota.from_json(json)
# print the JSON string representation of the object
print(UserSubscriptionQuota.to_json())

# convert the object into a dict
user_subscription_quota_dict = user_subscription_quota_instance.to_dict()
# create an instance of UserSubscriptionQuota from a dict
user_subscription_quota_from_dict = UserSubscriptionQuota.from_dict(user_subscription_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


