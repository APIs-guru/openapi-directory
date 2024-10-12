# BillingAggregatedInformationGetByApp200ResponseUsage

Usage section in the Billing Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_service** | [**BillingAggregatedInformationGetByApp200ResponseUsageBuildService**](BillingAggregatedInformationGetByApp200ResponseUsageBuildService.md) |  | [optional] 
**test_service** | [**BillingAggregatedInformationGetByApp200ResponseUsageBuildService**](BillingAggregatedInformationGetByApp200ResponseUsageBuildService.md) |  | [optional] 

## Example

```python
from openapi_client.models.billing_aggregated_information_get_by_app200_response_usage import BillingAggregatedInformationGetByApp200ResponseUsage

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAggregatedInformationGetByApp200ResponseUsage from a JSON string
billing_aggregated_information_get_by_app200_response_usage_instance = BillingAggregatedInformationGetByApp200ResponseUsage.from_json(json)
# print the JSON string representation of the object
print(BillingAggregatedInformationGetByApp200ResponseUsage.to_json())

# convert the object into a dict
billing_aggregated_information_get_by_app200_response_usage_dict = billing_aggregated_information_get_by_app200_response_usage_instance.to_dict()
# create an instance of BillingAggregatedInformationGetByApp200ResponseUsage from a dict
billing_aggregated_information_get_by_app200_response_usage_from_dict = BillingAggregatedInformationGetByApp200ResponseUsage.from_dict(billing_aggregated_information_get_by_app200_response_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


