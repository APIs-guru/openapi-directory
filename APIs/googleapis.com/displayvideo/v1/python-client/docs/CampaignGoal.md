# CampaignGoal

Settings that control the goal of a campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_goal_type** | **str** | Required. The type of the campaign goal. | [optional] 
**performance_goal** | [**PerformanceGoal**](PerformanceGoal.md) |  | [optional] 

## Example

```python
from openapi_client.models.campaign_goal import CampaignGoal

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignGoal from a JSON string
campaign_goal_instance = CampaignGoal.from_json(json)
# print the JSON string representation of the object
print(CampaignGoal.to_json())

# convert the object into a dict
campaign_goal_dict = campaign_goal_instance.to_dict()
# create an instance of CampaignGoal from a dict
campaign_goal_from_dict = CampaignGoal.from_dict(campaign_goal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


