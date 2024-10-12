# AutoRenewingBasePlanType

Represents a base plan that automatically renews at the end of its subscription period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_hold_duration** | **str** | Optional. Account hold period of the subscription, specified in ISO 8601 format. Acceptable values must be in DAYS and in the range P0D (zero days) to P30D (30 days). If not specified, the default value is P30D (30 days). | [optional] 
**billing_period_duration** | **str** | Required. Subscription period, specified in ISO 8601 format. For a list of acceptable billing periods, refer to the help center. | [optional] 
**grace_period_duration** | **str** | Grace period of the subscription, specified in ISO 8601 format. Acceptable values are P0D (zero days), P3D (3 days), P7D (7 days), P14D (14 days), and P30D (30 days). If not specified, a default value will be used based on the recurring period duration. | [optional] 
**legacy_compatible** | **bool** | Whether the renewing base plan is backward compatible. The backward compatible base plan is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one renewing base plan can be marked as legacy compatible for a given subscription. | [optional] 
**legacy_compatible_subscription_offer_id** | **str** | Subscription offer id which is legacy compatible. The backward compatible subscription offer is returned by the Google Play Billing Library deprecated method querySkuDetailsAsync(). Only one subscription offer can be marked as legacy compatible for a given renewing base plan. To have no Subscription offer as legacy compatible set this field as empty string. | [optional] 
**proration_mode** | **str** | The proration mode for the base plan determines what happens when a user switches to this plan from another base plan. If unspecified, defaults to CHARGE_ON_NEXT_BILLING_DATE. | [optional] 
**resubscribe_state** | **str** | Whether users should be able to resubscribe to this base plan in Google Play surfaces. Defaults to RESUBSCRIBE_STATE_ACTIVE if not specified. | [optional] 

## Example

```python
from openapi_client.models.auto_renewing_base_plan_type import AutoRenewingBasePlanType

# TODO update the JSON string below
json = "{}"
# create an instance of AutoRenewingBasePlanType from a JSON string
auto_renewing_base_plan_type_instance = AutoRenewingBasePlanType.from_json(json)
# print the JSON string representation of the object
print(AutoRenewingBasePlanType.to_json())

# convert the object into a dict
auto_renewing_base_plan_type_dict = auto_renewing_base_plan_type_instance.to_dict()
# create an instance of AutoRenewingBasePlanType from a dict
auto_renewing_base_plan_type_from_dict = AutoRenewingBasePlanType.from_dict(auto_renewing_base_plan_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


