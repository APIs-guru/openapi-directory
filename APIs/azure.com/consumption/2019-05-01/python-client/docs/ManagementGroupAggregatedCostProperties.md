# ManagementGroupAggregatedCostProperties

The properties of the Management Group Aggregated Cost.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_charges** | **float** | Azure Charges. | [optional] [readonly] 
**billing_period_id** | **str** | The id of the billing period resource that the aggregated cost belongs to. | [optional] [readonly] 
**charges_billed_separately** | **float** | Charges Billed Separately. | [optional] [readonly] 
**children** | [**List[ManagementGroupAggregatedCostResult]**](ManagementGroupAggregatedCostResult.md) | Children of a management group | [optional] 
**currency** | **str** | The ISO currency in which the meter is charged, for example, USD. | [optional] [readonly] 
**excluded_subscriptions** | **List[str]** | List of subscription Guids excluded from the calculation of aggregated cost | [optional] 
**included_subscriptions** | **List[str]** | List of subscription Guids included in the calculation of aggregated cost | [optional] 
**marketplace_charges** | **float** | Marketplace Charges. | [optional] [readonly] 
**usage_end** | **datetime** | The end of the date time range covered by the aggregated cost. | [optional] [readonly] 
**usage_start** | **datetime** | The start of the date time range covered by aggregated cost. | [optional] [readonly] 

## Example

```python
from openapi_client.models.management_group_aggregated_cost_properties import ManagementGroupAggregatedCostProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementGroupAggregatedCostProperties from a JSON string
management_group_aggregated_cost_properties_instance = ManagementGroupAggregatedCostProperties.from_json(json)
# print the JSON string representation of the object
print(ManagementGroupAggregatedCostProperties.to_json())

# convert the object into a dict
management_group_aggregated_cost_properties_dict = management_group_aggregated_cost_properties_instance.to_dict()
# create an instance of ManagementGroupAggregatedCostProperties from a dict
management_group_aggregated_cost_properties_from_dict = ManagementGroupAggregatedCostProperties.from_dict(management_group_aggregated_cost_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


