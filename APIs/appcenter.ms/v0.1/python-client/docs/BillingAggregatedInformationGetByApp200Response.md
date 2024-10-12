# BillingAggregatedInformationGetByApp200Response

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
from openapi_client.models.billing_aggregated_information_get_by_app200_response import BillingAggregatedInformationGetByApp200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAggregatedInformationGetByApp200Response from a JSON string
billing_aggregated_information_get_by_app200_response_instance = BillingAggregatedInformationGetByApp200Response.from_json(json)
# print the JSON string representation of the object
print(BillingAggregatedInformationGetByApp200Response.to_json())

# convert the object into a dict
billing_aggregated_information_get_by_app200_response_dict = billing_aggregated_information_get_by_app200_response_instance.to_dict()
# create an instance of BillingAggregatedInformationGetByApp200Response from a dict
billing_aggregated_information_get_by_app200_response_from_dict = BillingAggregatedInformationGetByApp200Response.from_dict(billing_aggregated_information_get_by_app200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


