# BillingAggregatedInformationGetByApp200ResponseUsageBuildService

Resource usage for a single Mobile Center service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_usage_period** | [**BillingAggregatedInformationGetByApp200ResponseUsageBuildServiceCurrentUsagePeriod**](BillingAggregatedInformationGetByApp200ResponseUsageBuildServiceCurrentUsagePeriod.md) |  | [optional] 

## Example

```python
from openapi_client.models.billing_aggregated_information_get_by_app200_response_usage_build_service import BillingAggregatedInformationGetByApp200ResponseUsageBuildService

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAggregatedInformationGetByApp200ResponseUsageBuildService from a JSON string
billing_aggregated_information_get_by_app200_response_usage_build_service_instance = BillingAggregatedInformationGetByApp200ResponseUsageBuildService.from_json(json)
# print the JSON string representation of the object
print(BillingAggregatedInformationGetByApp200ResponseUsageBuildService.to_json())

# convert the object into a dict
billing_aggregated_information_get_by_app200_response_usage_build_service_dict = billing_aggregated_information_get_by_app200_response_usage_build_service_instance.to_dict()
# create an instance of BillingAggregatedInformationGetByApp200ResponseUsageBuildService from a dict
billing_aggregated_information_get_by_app200_response_usage_build_service_from_dict = BillingAggregatedInformationGetByApp200ResponseUsageBuildService.from_dict(billing_aggregated_information_get_by_app200_response_usage_build_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


