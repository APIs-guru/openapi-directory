# CampaignBudget

Settings that control how the campaign budget is allocated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**budget_amount_micros** | **str** | Required. The total amount the linked insertion order segments can budget. The amount is in micros. Must be greater than 0. For example, 500000000 represents 500 standard units of the currency. | [optional] 
**budget_id** | **str** | The unique ID of the campaign budget. Assigned by the system. Do not set for new budgets. Must be included when updating or adding budgets to campaign_budgets. Otherwise, a new ID will be generated and assigned. | [optional] 
**budget_unit** | **str** | Required. Immutable. Specifies whether the budget is measured in currency or impressions. | [optional] 
**date_range** | [**DateRange**](DateRange.md) |  | [optional] 
**display_name** | **str** | Required. The display name of the budget. Must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 
**external_budget_id** | **str** | Immutable. The ID identifying this budget to the external source. If this field is set and the invoice detail level of the corresponding billing profile is set to \&quot;Budget level PO\&quot;, all impressions served against this budget will include this ID on the invoice. Must be unique under the campaign. | [optional] 
**external_budget_source** | **str** | Required. The external source of the budget. | [optional] 
**invoice_grouping_id** | **str** | Immutable. The ID used to group budgets to be included the same invoice. If this field is set and the invoice level of the corresponding billing profile is set to \&quot;Budget invoice grouping ID\&quot;, all external_budget_id sharing the same invoice_grouping_id will be grouped in the same invoice. | [optional] 
**prisma_config** | [**PrismaConfig**](PrismaConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.campaign_budget import CampaignBudget

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignBudget from a JSON string
campaign_budget_instance = CampaignBudget.from_json(json)
# print the JSON string representation of the object
print(CampaignBudget.to_json())

# convert the object into a dict
campaign_budget_dict = campaign_budget_instance.to_dict()
# create an instance of CampaignBudget from a dict
campaign_budget_from_dict = CampaignBudget.from_dict(campaign_budget_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


