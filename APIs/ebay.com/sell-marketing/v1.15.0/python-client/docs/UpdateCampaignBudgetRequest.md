# UpdateCampaignBudgetRequest

A type that contains the fields for the <b>UpdateCampaignBudget</b> request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily** | [**BudgetRequest**](BudgetRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_campaign_budget_request import UpdateCampaignBudgetRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateCampaignBudgetRequest from a JSON string
update_campaign_budget_request_instance = UpdateCampaignBudgetRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateCampaignBudgetRequest.to_json())

# convert the object into a dict
update_campaign_budget_request_dict = update_campaign_budget_request_instance.to_dict()
# create an instance of UpdateCampaignBudgetRequest from a dict
update_campaign_budget_request_from_dict = UpdateCampaignBudgetRequest.from_dict(update_campaign_budget_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


