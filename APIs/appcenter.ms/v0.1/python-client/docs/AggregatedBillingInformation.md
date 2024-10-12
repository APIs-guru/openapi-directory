# AggregatedBillingInformation

Aggregated Billing Information for a user or an organization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_subscription_id** | **str** | Unique identifier for the Azure subscription used for billing | [optional] 
**azure_subscription_state** | **str** | State of the Azure subscription used for billing | [optional] 
**billing_plans** | [**BillingAggregatedInformationGetByApp200ResponseBillingPlans**](BillingAggregatedInformationGetByApp200ResponseBillingPlans.md) |  | [optional] 
**id** | **str** | ID of the user or organization | [optional] 
**timestamp** | **str** | The ISO 8601 datetime of last modification | [optional] 
**usage** | [**BillingAggregatedInformationGetByApp200ResponseUsage**](BillingAggregatedInformationGetByApp200ResponseUsage.md) |  | [optional] 
**version** | **str** | Version of the Billing Information schema | [optional] 

## Example

```python
from openapi_client.models.aggregated_billing_information import AggregatedBillingInformation

# TODO update the JSON string below
json = "{}"
# create an instance of AggregatedBillingInformation from a JSON string
aggregated_billing_information_instance = AggregatedBillingInformation.from_json(json)
# print the JSON string representation of the object
print(AggregatedBillingInformation.to_json())

# convert the object into a dict
aggregated_billing_information_dict = aggregated_billing_information_instance.to_dict()
# create an instance of AggregatedBillingInformation from a dict
aggregated_billing_information_from_dict = AggregatedBillingInformation.from_dict(aggregated_billing_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


