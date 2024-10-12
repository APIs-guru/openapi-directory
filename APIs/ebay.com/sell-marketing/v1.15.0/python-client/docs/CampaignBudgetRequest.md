# CampaignBudgetRequest

A container for the details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily** | [**BudgetRequest**](BudgetRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.campaign_budget_request import CampaignBudgetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignBudgetRequest from a JSON string
campaign_budget_request_instance = CampaignBudgetRequest.from_json(json)
# print the JSON string representation of the object
print(CampaignBudgetRequest.to_json())

# convert the object into a dict
campaign_budget_request_dict = campaign_budget_request_instance.to_dict()
# create an instance of CampaignBudgetRequest from a dict
campaign_budget_request_from_dict = CampaignBudgetRequest.from_dict(campaign_budget_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


