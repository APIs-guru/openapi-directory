# GoogleAdsSearchads360V0ResourcesCampaignBudget

A campaign budget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_micros** | **str** | The amount of the budget, in the local currency for the account. Amount is specified in micros, where one million is equivalent to one currency unit. Monthly spend is capped at 30.4 times this amount. | [optional] 
**delivery_method** | **str** | The delivery method that determines the rate at which the campaign budget is spent. Defaults to STANDARD if unspecified in a create operation. | [optional] 
**period** | **str** | Immutable. Period over which to spend the budget. Defaults to DAILY if not specified. | [optional] 
**resource_name** | **str** | Immutable. The resource name of the campaign budget. Campaign budget resource names have the form: &#x60;customers/{customer_id}/campaignBudgets/{campaign_budget_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_campaign_budget import GoogleAdsSearchads360V0ResourcesCampaignBudget

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignBudget from a JSON string
google_ads_searchads360_v0_resources_campaign_budget_instance = GoogleAdsSearchads360V0ResourcesCampaignBudget.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCampaignBudget.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_campaign_budget_dict = google_ads_searchads360_v0_resources_campaign_budget_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCampaignBudget from a dict
google_ads_searchads360_v0_resources_campaign_budget_from_dict = GoogleAdsSearchads360V0ResourcesCampaignBudget.from_dict(google_ads_searchads360_v0_resources_campaign_budget_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


