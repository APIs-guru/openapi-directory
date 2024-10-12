# BillingAggregatedInformationGetByApp200ResponseUsageBuildServiceCurrentUsagePeriod

Usage for a single period

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**by_account** | **Dict[str, float]** | A collection of named numeric values | [optional] 
**by_app** | **Dict[str, Dict[str, float]]** | A collection of  named numeric values grouped by app | [optional] 
**end_time** | **str** | Exclusive end time of the usage period. | [optional] 
**start_time** | **str** | Inclusive start time of the usage period | [optional] 

## Example

```python
from openapi_client.models.billing_aggregated_information_get_by_app200_response_usage_build_service_current_usage_period import BillingAggregatedInformationGetByApp200ResponseUsageBuildServiceCurrentUsagePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAggregatedInformationGetByApp200ResponseUsageBuildServiceCurrentUsagePeriod from a JSON string
billing_aggregated_information_get_by_app200_response_usage_build_service_current_usage_period_instance = BillingAggregatedInformationGetByApp200ResponseUsageBuildServiceCurrentUsagePeriod.from_json(json)
# print the JSON string representation of the object
print(BillingAggregatedInformationGetByApp200ResponseUsageBuildServiceCurrentUsagePeriod.to_json())

# convert the object into a dict
billing_aggregated_information_get_by_app200_response_usage_build_service_current_usage_period_dict = billing_aggregated_information_get_by_app200_response_usage_build_service_current_usage_period_instance.to_dict()
# create an instance of BillingAggregatedInformationGetByApp200ResponseUsageBuildServiceCurrentUsagePeriod from a dict
billing_aggregated_information_get_by_app200_response_usage_build_service_current_usage_period_from_dict = BillingAggregatedInformationGetByApp200ResponseUsageBuildServiceCurrentUsagePeriod.from_dict(billing_aggregated_information_get_by_app200_response_usage_build_service_current_usage_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


