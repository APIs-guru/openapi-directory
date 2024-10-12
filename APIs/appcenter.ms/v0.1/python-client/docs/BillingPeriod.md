# BillingPeriod

Billing plans for a given period

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by_account** | [**BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccount**](BillingAggregatedInformationGetByApp200ResponseBillingPlansBuildServiceCurrentBillingPeriodByAccount.md) |  | [optional] 
**end_time** | **str** | Exclusive end of the period. | [optional] 
**start_time** | **str** | Inclusive start of the period | [optional] 

## Example

```python
from openapi_client.models.billing_period import BillingPeriod

# TODO update the JSON string below
json = "{}"
# create an instance of BillingPeriod from a JSON string
billing_period_instance = BillingPeriod.from_json(json)
# print the JSON string representation of the object
print(BillingPeriod.to_json())

# convert the object into a dict
billing_period_dict = billing_period_instance.to_dict()
# create an instance of BillingPeriod from a dict
billing_period_from_dict = BillingPeriod.from_dict(billing_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


