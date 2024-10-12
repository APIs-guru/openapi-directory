# BillingResourceUsage

Usage section in the Billing Information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_service** | [**BillingAggregatedInformationGetByApp200ResponseUsageBuildService**](BillingAggregatedInformationGetByApp200ResponseUsageBuildService.md) |  | [optional] 
**test_service** | [**BillingAggregatedInformationGetByApp200ResponseUsageBuildService**](BillingAggregatedInformationGetByApp200ResponseUsageBuildService.md) |  | [optional] 

## Example

```python
from openapi_client.models.billing_resource_usage import BillingResourceUsage

# TODO update the JSON string below
json = "{}"
# create an instance of BillingResourceUsage from a JSON string
billing_resource_usage_instance = BillingResourceUsage.from_json(json)
# print the JSON string representation of the object
print(BillingResourceUsage.to_json())

# convert the object into a dict
billing_resource_usage_dict = billing_resource_usage_instance.to_dict()
# create an instance of BillingResourceUsage from a dict
billing_resource_usage_from_dict = BillingResourceUsage.from_dict(billing_resource_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


