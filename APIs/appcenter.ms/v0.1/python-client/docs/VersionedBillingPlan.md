# VersionedBillingPlan

Billing Plan with a version

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan**](BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccountPlan.md) |  | [optional] 
**etag** | **str** | The version of the object | [optional] 

## Example

```python
from openapi_client.models.versioned_billing_plan import VersionedBillingPlan

# TODO update the JSON string below
json = "{}"
# create an instance of VersionedBillingPlan from a JSON string
versioned_billing_plan_instance = VersionedBillingPlan.from_json(json)
# print the JSON string representation of the object
print(VersionedBillingPlan.to_json())

# convert the object into a dict
versioned_billing_plan_dict = versioned_billing_plan_instance.to_dict()
# create an instance of VersionedBillingPlan from a dict
versioned_billing_plan_from_dict = VersionedBillingPlan.from_dict(versioned_billing_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


