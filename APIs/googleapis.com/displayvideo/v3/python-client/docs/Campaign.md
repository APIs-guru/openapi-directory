# Campaign

A single campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | Output only. The unique ID of the advertiser the campaign belongs to. | [optional] [readonly] 
**campaign_budgets** | [**List[CampaignBudget]**](CampaignBudget.md) | The list of budgets available to this campaign. If this field is not set, the campaign uses an unlimited budget. | [optional] 
**campaign_flight** | [**CampaignFlight**](CampaignFlight.md) |  | [optional] 
**campaign_goal** | [**CampaignGoal**](CampaignGoal.md) |  | [optional] 
**campaign_id** | **str** | Output only. The unique ID of the campaign. Assigned by the system. | [optional] [readonly] 
**display_name** | **str** | Required. The display name of the campaign. Must be UTF-8 encoded with a maximum size of 240 bytes. | [optional] 
**entity_status** | **str** | Required. Controls whether or not the insertion orders under this campaign can spend their budgets and bid on inventory. * Accepted values are &#x60;ENTITY_STATUS_ACTIVE&#x60;, &#x60;ENTITY_STATUS_ARCHIVED&#x60;, and &#x60;ENTITY_STATUS_PAUSED&#x60;. * For CreateCampaign method, &#x60;ENTITY_STATUS_ARCHIVED&#x60; is not allowed. | [optional] 
**frequency_cap** | [**FrequencyCap**](FrequencyCap.md) |  | [optional] 
**name** | **str** | Output only. The resource name of the campaign. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when the campaign was last updated. Assigned by the system. | [optional] [readonly] 

## Example

```python
from openapi_client.models.campaign import Campaign

# TODO update the JSON string below
json = "{}"
# create an instance of Campaign from a JSON string
campaign_instance = Campaign.from_json(json)
# print the JSON string representation of the object
print(Campaign.to_json())

# convert the object into a dict
campaign_dict = campaign_instance.to_dict()
# create an instance of Campaign from a dict
campaign_from_dict = Campaign.from_dict(campaign_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


