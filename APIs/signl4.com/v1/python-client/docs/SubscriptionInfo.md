# SubscriptionInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch_id** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**currency** | **str** |  | [optional] 
**external_account_id** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**next_billing** | **datetime** |  | [optional] 
**owner_id** | **str** |  | [optional] 
**plan_code** | **str** |  | [optional] 
**plan_state** | **int** |  | [optional] 
**referral_enabled** | **bool** |  | [optional] 
**status** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.subscription_info import SubscriptionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionInfo from a JSON string
subscription_info_instance = SubscriptionInfo.from_json(json)
# print the JSON string representation of the object
print(SubscriptionInfo.to_json())

# convert the object into a dict
subscription_info_dict = subscription_info_instance.to_dict()
# create an instance of SubscriptionInfo from a dict
subscription_info_from_dict = SubscriptionInfo.from_dict(subscription_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


