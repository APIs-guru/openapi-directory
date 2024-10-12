# CampaignBudget

A type that defines the budget details for a Cost Per Click (CPC) Promoted Listings campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily** | [**Budget**](Budget.md) |  | [optional] 

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


