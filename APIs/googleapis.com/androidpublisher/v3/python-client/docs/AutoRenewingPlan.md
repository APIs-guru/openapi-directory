# AutoRenewingPlan

Information related to an auto renewing plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_renew_enabled** | **bool** | If the subscription is currently set to auto-renew, e.g. the user has not canceled the subscription | [optional] 
**price_change_details** | [**SubscriptionItemPriceChangeDetails**](SubscriptionItemPriceChangeDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.auto_renewing_plan import AutoRenewingPlan

# TODO update the JSON string below
json = "{}"
# create an instance of AutoRenewingPlan from a JSON string
auto_renewing_plan_instance = AutoRenewingPlan.from_json(json)
# print the JSON string representation of the object
print(AutoRenewingPlan.to_json())

# convert the object into a dict
auto_renewing_plan_dict = auto_renewing_plan_instance.to_dict()
# create an instance of AutoRenewingPlan from a dict
auto_renewing_plan_from_dict = AutoRenewingPlan.from_dict(auto_renewing_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


